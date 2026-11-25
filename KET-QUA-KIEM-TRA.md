# Kết quả xác minh — 18/11/2026

## Đã đạt trên máy local

- Cài sạch `npm ci` với Node 24.21.0.
- Build Nitro `node_server`: thành công; server thực tế chạy bằng `.output/server/index.mjs`.
- `npm run typecheck`, `check:content`, `check:prices`, `check:seo`: đạt.
- 8 xe, 18 bài viết, 816 giá số và 14 ô liên hệ: đạt.
- `npm run verify:local`: exit 0. Kiểm tra 58 trang sitemap qua proxy mô phỏng HTTPS với Host tên miền chính.
- SSR HTML, title/description duy nhất trong head, canonical khớp sitemap, metadata mạng xã hội, JSON-LD, robots và liên kết nội bộ: đạt.
- API lọc xe, tham số lỗi, trang lọc noindex, URL không tồn tại trả 404, ảnh và cache: đạt.
- Tên miền chính qua HTTPS: 200, không có header noindex. HTTP và www: 308 về HTTPS không www, giữ path/query.
- Tên miền tạm: header noindex cho trang chủ, danh sách xe, bài viết, sitemap, robots.
- 363 file đối chiếu SHA256 khớp folder 3: app, components, lib, public, next.config.ts và package-lock.json. Chi tiết trong SOURCE-PARITY.json.
- Logo `public/images/logo321.svg` khớp bản gốc của chủ sở hữu; giữ nguyên toàn bộ favicon và URL ảnh.

## Thay đổi để chuyển hosting

- Build/start chuyển sang Nitro Node server, giữ Dockerfile từ bản thử đã chạy được theo xác nhận của chủ sở hữu.
- Bật index production cho đúng canonical `https://hanhtrinhphuongnam.vn`, bỏ header noindex toàn site trong bản thử.
- proxy.ts nhận giao thức HTTPS từ X-Forwarded-Proto cho hai tên miền chính. Kiểm tra ban đầu đã phát hiện vòng lặp 308 khi proxy kết thúc TLS; bản sửa đã vượt kiểm tra lại.
- Bổ sung kiểm tra production qua proxy, đối chiếu source, đóng gói và tài liệu chuyển hosting/quay lại Netlify.
- Folder 3 không bị chỉnh sửa; bản test cũ đã được hoàn tác các chỉnh sửa bắt đầu trong chat này.

## Chưa được xác minh

- Chưa deploy bản 04 lên Vibe Host, chưa chạy Docker Linux, chưa đổi DNS.
- Chưa kiểm tra chứng chỉ SSL, Host/X-Forwarded-Proto từ proxy Vibe Host thực tế, tốc độ/tải, tương tác trình duyệt trên hosting mới.
- Chưa kiểm tra Googlebot, Search Console hoặc sự thay đổi thứ hạng sau chuyển. Không cam kết không có dao động SEO; cần làm đủ bước trong hướng dẫn bàn giao.
