# Dấu Chân Tư Tưởng – Hành trình theo chân Bác

Website triển lãm số tương tác phục vụ học phần **Tư tưởng Hồ Chí Minh**. Sản phẩm được xây dựng bằng React + Vite, hoạt động hoàn toàn ở phía trình duyệt và sẵn sàng triển khai trên Vercel.

> “Mỗi dấu chân là một câu chuyện, mỗi câu chuyện mở ra một bài học.”

## Tính năng

- 8 route: trang chủ, hành trình, chi tiết 5 trạm, thử thách, vận dụng, hộ chiếu, bản đồ, tư liệu và trang 404.
- 5 trạm lịch sử với bối cảnh, sự kiện, kết nối tư tưởng, ý nghĩa, liên hệ sinh viên và nguồn đối chiếu.
- 25 câu trắc nghiệm (5 câu/trạm), chấm điểm và mở khóa theo tiến độ.
- Minigame sắp xếp dòng thời gian hỗ trợ kéo thả, bàn phím/nút di chuyển và mobile.
- Minigame ghép sự kiện với tư tưởng, phản hồi đúng/sai và điểm theo số lần thử.
- 5 tình huống sinh viên với nhiều lựa chọn có phân tích đa chiều.
- Hộ chiếu, 5 huy hiệu, chứng nhận hoàn thành, đổi tên và reset có xác nhận.
- LocalStorage có kiểm tra/sửa dữ liệu lỗi; chỉ lưu thành tích cao nhất, không cộng điểm vô hạn.
- Chế độ trình diễn dùng dữ liệu minh họa tách biệt, không ghi đè tiến độ thật.
- Bản đồ Leaflet/OpenStreetMap và danh sách fallback.
- Kho tư liệu có tìm kiếm, lọc theo giai đoạn và liên kết nguồn thật.
- Responsive, điều hướng bàn phím, focus state, `prefers-reduced-motion`, route loading và SEO cơ bản.

## Chạy local

Yêu cầu Node.js 20+.

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in trong terminal (thường là `http://localhost:5173`).

## Test và build

```bash
npm test
npm run build
npm run preview
```

Thư mục đầu ra production là `dist/`.

## Cấu trúc chính

```text
src/
├── components/
│   ├── common/      # minh họa, reveal, heading
│   ├── games/       # timeline, ghép cặp
│   ├── layout/      # navbar, footer, demo toggle
│   └── quiz/        # quiz 5 trạm
├── context/         # ProgressContext + LocalStorage
├── data/            # stations, events, questions, scenarios, sources
├── pages/           # toàn bộ route của ứng dụng
├── styles/          # theme và responsive CSS
└── utils/           # sanitize, tính điểm, mở khóa, test
```

## Đưa lên GitHub

```bash
git init
git add .
git commit -m "feat: build Dau Chan Tu Tuong interactive museum"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

Không commit `node_modules/` hoặc `dist/`; các thư mục này đã được loại khỏi Git qua `.gitignore`.

## Deploy Vercel

1. Đăng nhập Vercel và chọn **Add New → Project**.
2. Import repository GitHub vừa tạo.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Không cần biến môi trường.
7. Deploy.

`vercel.json` đã cấu hình rewrite mọi URL con về `index.html`, vì vậy các route như `/tram/1` hoặc `/thu-thach` vẫn hoạt động khi refresh trực tiếp.

## Nguyên tắc nội dung

- Dữ kiện lịch sử được đối chiếu từ Bảo tàng Hồ Chí Minh, Chuyên trang Hồ Chí Minh và hệ thống Tư liệu – Văn kiện Đảng.
- Phần liên hệ sinh viên hiện đại được đánh dấu là diễn giải của nhóm biên soạn.
- Minh họa trong giao diện là SVG/CSS artwork, không được giới thiệu như ảnh tư liệu.
- Đây là sản phẩm giáo dục độc lập, không phải website chính thức của cơ quan hoặc bảo tàng.
