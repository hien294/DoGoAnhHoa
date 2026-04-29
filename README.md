# Xưởng Mộc Anh Hoa - Landingpage + Trang sản phẩm

Website tĩnh (HTML/CSS/JS) để hiển thị danh sách sản phẩm, xem chi tiết và liên hệ qua Zalo.

## Cách chạy local

Vì trang dùng `fetch()` để đọc dữ liệu trong `data/`, bạn nên mở bằng một local server (tránh mở bằng `file://`):

```bash
python -m http.server 8080
```

Sau đó truy cập: `http://localhost:8080/`

## Cấu hình Zalo

Chỉnh số Zalo trong `data/site.json`:

- `zaloPhone`

Nếu bạn muốn nội dung tin nhắn dài hơn/đúng ý hơn, chỉnh `generalZaloText` trong `data/site.json`.

