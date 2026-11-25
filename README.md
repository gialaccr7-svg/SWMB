# Bản bàn giao Vibe Host — Hành Trình Phương Nam

Đây là bản production chạy Node SSR, dùng tên miền chính `https://hanhtrinhphuongnam.vn`.
Folder `04-BAN-GIAO-VIBE-HOST` là thư mục nguồn dùng để cập nhật repo này.

Đọc `HUONG-DAN-VIBE-HOST.md` trước khi chuyển DNS và `KET-QUA-KIEM-TRA.md` để xem phạm vi đã xác minh.

- Trên Vibe Host, chọn nhánh `main` và thư mục gốc của repo. Nếu triển khai bằng ZIP, dùng `vibe-host-ban-giao.zip` với `package.json` và `Dockerfile` ở gốc ZIP.
- Node 24.21.0; cài `npm ci --include=dev`; build `npm run build`; start `npm start`.
- Docker: dùng Dockerfile, cổng 3000; `HOST=0.0.0.0`, `PORT` theo hosting.
- Cần build lại trên hosting Linux; không upload node_modules hoặc build Windows.
- Không chọn HTML tĩnh/SPA, không chỉ publish `dist`. Ứng dụng có SSR và API.
- Canonical và index production được cố định tại build. Không cần API key hay database.
- Tên miền tạm vẫn có header noindex cho HTML, robots và sitemap; nội dung có canonical về tên miền chính. Không gửi sitemap tên miền tạm.
- Kiểm tra local: `npm run build`, `npm run verify:local`.
- Đóng gói lại: `powershell -ExecutionPolicy Bypass -File scripts/package-handover.ps1`.
