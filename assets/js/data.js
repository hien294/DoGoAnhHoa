// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    title: "Bộ Bàn Ghế Hoàng Gia Gỗ Mun",
    price: "185.000.000đ",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format",
    description:
      "Bộ bàn ghế phong cách Hoàng Gia từ gỗ Mun đuôi công quý hiếm. Từng đường nét chạm khắc tinh xảo, mang đậm dấu ấn nghệ thuật cổ điển Việt Nam.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Mun đuôi công" },
      { label: "Số món", value: "10 món cao cấp" },
      { label: "Kích thước bàn", value: "1m8 x 1m" },
      { label: "Kỹ thuật", value: "Chạm khảm tay 100%" },
      { label: "Bảo hành", value: "10 năm" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
  {
    id: 2,
    title: "Giường Ngủ Tân Cổ Điển Gỗ Gõ Đỏ",
    price: "45.000.000đ",
    image:
      "https://images.unsplash.com/photo-1505693419173-42b9256a0904?q=80&w=2070&auto=format",
    description:
      "Sự kết hợp hoàn hảo giữa thiết kế hiện đại và cổ điển. Giường ngủ gỗ Gõ Đỏ bền bỉ, tỏa hương thơm tự nhiên, mang đến giấc ngủ an lành.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Gõ Đỏ Pachy" },
      { label: "Kích thước", value: "1m8 x 2m" },
      { label: "Phong cách", value: "Tân cổ điển" },
      { label: "Bảo hành", value: "Trọn đời" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
  {
    id: 3,
    title: "Tủ Rượu Luxury Gỗ Hương",
    price: "32.000.000đ",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format",
    description:
      "Tủ rượu đẳng cấp nâng tầm không gian sống. Kính cường lực kết hợp khung gỗ Hương đỏ, thiết kế sang trọng với hệ thống đèn LED tinh tế.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Hương Đỏ" },
      { label: "Kích thước", value: "2m2 x 1m8" },
      { label: "Phụ kiện", value: "Đèn LED cao cấp + Kính cường lực" },
      { label: "Bảo hành", value: "5 năm" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
  {
    id: 4,
    title: "Bàn Ăn Nguyên Khối Gỗ Cẩm",
    price: "210.000.000đ",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1974&auto=format",
    description:
      "Bàn ăn gỗ Cẩm nguyên khối quý hiếm, giữ nguyên đường vân tự nhiên như rồng bay phượng múa. Mỗi thớ gỗ là một tác phẩm nghệ thuật độc nhất vô nhị.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Cẩm Lai nguyên khối" },
      { label: "Kích thước", value: "3m x 1m" },
      { label: "Độ dày", value: "15cm - Nguyên tấm" },
      { label: "Bảo hành", value: "Trọn đời" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
  {
    id: 5,
    title: "Sập Gụ Tủ Chè Cổ Truyền",
    price: "75.000.000đ",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format",
    description:
      "Nét văn hóa truyền thống Việt Nam được tái hiện qua bộ Sập Gụ Tủ Chè. Chạm khắc tích 'Mai Điểu' sung túc, thể hiện đỉnh cao nghệ thuật chạm khắc gỗ.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Gụ Lào thượng hạng" },
      { label: "Kích thước", value: "1m8 x 2m2" },
      { label: "Kỹ thuật", value: "Chạm thủ công 100%" },
      { label: "Tuổi thọ", value: "Trên 100 năm" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
  {
    id: 6,
    title: "Kệ Tivi Hiện Đại Gỗ Sồi",
    price: "12.500.000đ",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format",
    description:
      "Thiết kế đơn giản mà tinh tế cho căn hộ cao cấp. Gỗ Sồi Nga nhập khẩu, xử lý chống mối mọt, phù hợp với không gian sống hiện đại.",
    specs: [
      { label: "Chất liệu", value: "Gỗ Sồi Nga nhập khẩu" },
      { label: "Kích thước", value: "2m" },
      { label: "Màu sắc", value: "Óc chó / Tự nhiên" },
      { label: "Bảo hành", value: "2 năm" },
      { label: "Xuất xứ", value: "Làng nghề Đồng Kỵ, Bắc Ninh" },
    ],
  },
];

const ZALO_PHONE = "0392469464";
