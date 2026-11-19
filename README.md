# Hành Trình Phương Nam trên Vibe Host

Repo triển khai website https://hanhtrinhphuongnam.vn.

Trên Vibe Host, chọn nhánh `main` và dùng thư mục gốc của repo. Ứng dụng chạy SSR và API trên Node.

- Docker dùng `Dockerfile` ở thư mục gốc và cổng `3000`.
- Với cấu hình Node, dùng Node 24.21.0 và chạy `npm ci --include=dev`, `npm run build`, rồi `npm start`. Đặt `HOST=0.0.0.0` và `PORT` theo Vibe Host.
- URL canonical là `https://hanhtrinhphuongnam.vn`. Các tên miền thử có header `X-Robots-Tag: noindex, follow` trên các trang HTML.
- Kiểm tra URL tạm trước. Khi gắn tên miền thật, xác nhận HTTPS trên cả hai tên miền, redirect từ `www` về tên miền chính và khả năng lập chỉ mục trên tên miền chính. Proxy cần giữ `Host` và đặt `X-Forwarded-Proto` theo giao thức thực tế.

Chạy `npm run verify:local` sau build để kiểm tra phản hồi HTTP, sitemap, metadata và redirect.
