# Chuyển từ Netlify sang Vibe Host, giữ nguyên URL

## 1. Triển khai trước khi chuyển DNS

1. Kết nối [repo SWMB](https://github.com/gialaccr7-svg/SWMB), chọn nhánh `main` và thư mục gốc chứa `package.json` và `Dockerfile`. Nếu triển khai bằng tệp nén, upload `vibe-host-ban-giao.zip` từ folder 04 lên Vibe Host.
2. Dùng Dockerfile có sẵn (cổng 3000). Nếu dùng Node: Node 24.21.0, install `npm ci --include=dev`, build `npm run build`, start `npm start`, HOST=0.0.0.0, PORT theo nền tảng. Build cần devDependencies. Không bật chế độ static/SPA.
3. Thêm cả `hanhtrinhphuongnam.vn` và `www.hanhtrinhphuongnam.vn` vào hosting mới. Cấu hình chứng chỉ HTTPS cho cả hai theo hướng dẫn của Mắt Bão. Nếu cần xác minh DNS để cấp chứng chỉ, làm theo nhà cung cấp và giữ traffic hiện tại tới Netlify cho tới lúc sẵn sàng.
4. Reverse proxy phải giữ Host tên miền người dùng và ghi đè `X-Forwarded-Proto` bằng giao thức thực tế (https cho HTTPS). Không để giá trị do client tự gửi đi xuyên qua proxy. Source xử lý header này cho hai tên miền chính để tránh vòng lặp redirect.
5. Trên địa chỉ tạm kiểm tra trang chủ, menu mobile, bộ lọc xe/bảng giá, bài viết, hotline/Zalo, ảnh, tải lại trang sâu và API. Địa chỉ tạm có noindex; canonical vẫn trỏ tên miền chính. Build này có meta index cho trang công khai, nhưng header noindex bảo vệ tên miền tạm; không được xóa header này tại hosting.
6. Trước khi chuyển DNS, dùng máy thử với hosts override hoặc curl --resolve theo IP/điểm kết nối nhà cung cấp hướng dẫn để kiểm tra đúng tên miền chính trên hosting mới, gồm chứng chỉ, header, 200/308/404. Địa chỉ tạm một mình chưa chứng minh custom domain hoạt động.

## 2. Giữ các tín hiệu SEO

- Giữ nguyên tên miền HTTPS không www, mọi đường dẫn, nội dung, title, description, canonical, JSON-LD, robots.txt, sitemap.xml, ảnh, favicon và mã Analytics/Search Console đã có trong source.
- `SITE_INDEXABLE=true` và canonical chính được cố định trong vite.config.ts. Không còn header noindex toàn site của bản test. Các trang lọc và 404 vẫn có noindex theo logic nguồn.
- HTTP và www phải chuyển 308 về HTTPS không www, giữ path/query. Các redirect URL cũ được giữ nguyên.
- Không dùng chức năng Change of Address của Search Console khi chỉ đổi hosting và giữ nguyên URL. Giữ property và xác minh hiện có; không xóa TXT xác minh trong DNS.
- Không thay bản ghi MX/email, SPF/DKIM/DMARC hoặc bản ghi xác minh khác khi chỉnh web DNS. Chỉ thay bản ghi web cần thiết theo Vibe Host; rà cả A, AAAA và CNAME liên quan để tránh traffic đi nhầm máy chủ.
- Giữ Netlify hoạt động trong thời gian DNS lan truyền và tới khi xác nhận traffic đã chuyển, để các máy còn cache DNS vẫn nhận website đầy đủ.

## 3. Chuyển và kiểm tra

1. Lưu lại DNS web hiện tại và giá trị TTL. Nếu có thể giảm TTL trước ngày chuyển theo nhà cung cấp DNS.
2. Chỉ chuyển khi hosting mới đã chạy được với custom domain/HTTPS và vượt kiểm tra. Chỉnh DNS theo chính xác giá trị Mắt Bão cấp; không có IP cố định được giả định trong tài liệu này.
3. Xóa cache CDN/proxy nếu còn header noindex hoặc nội dung cũ. Kiểm tra cả IPv4/IPv6 nếu có.
4. Trên máy đã phân giải sang hosting mới, chạy PowerShell trong thư mục source:

```powershell
$env:CHECK_URL='https://hanhtrinhphuongnam.vn'
$env:CHECK_CANONICAL_ORIGIN='https://hanhtrinhphuongnam.vn'
$env:CHECK_INDEXABLE='true'
$env:CHECK_PUBLIC='true'
npm run check:site
```

5. Xác minh HTTP/www redirect, SSL và không có vòng lặp; homepage/trang sâu trả 200, URL sai trả 404; không có X-Robots-Tag noindex trên trang công khai; sitemap/robots chứa tên miền chính. Kiểm tra DevTools, menu mobile và sự kiện liên hệ/Analytics trên trình duyệt.
6. Theo dõi lỗi 5xx/404, độ trễ, log hosting, Analytics và Search Console sau chuyển. Kiểm tra URL Inspection bản live trên vài trang chính. Không tuyên bố Google đã cập nhật favicon hay index chỉ vì deploy thành công.

## 4. Quay lại nếu có lỗi

Nếu lỗi SSL, redirect loop, 5xx kéo dài, trang công khai bị noindex hoặc mất trang/ảnh: khôi phục bản ghi DNS web về giá trị Netlify đã lưu; giữ Netlify nguyên vẹn. DNS cache có thể khiến việc quay lại không tức thì. Sửa và thử lại bản Vibe Host trước lần chuyển tiếp theo.

## Phạm vi và giới hạn

Bản bàn giao giữ cấu trúc và tín hiệu SEO trong source; không thể bảo đảm thứ hạng tuyệt đối không biến động. Kiểm tra local mô phỏng proxy đã đạt; cần kiểm tra SSL, DNS, proxy, tài nguyên và tốc độ trên Vibe Host thực tế. Chưa thực hiện deploy, đổi DNS hoặc kiểm chứng Google/Search Console.

Tham khảo Google: https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes
