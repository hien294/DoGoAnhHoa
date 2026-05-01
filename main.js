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

// ===== RENDER PRODUCT GRID =====
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (p) => `
        <div class="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" onclick="openModal(${p.id})">
          <div class="relative overflow-hidden">
            <img src="${p.image}" class="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105" alt="${p.title}" />
            <div class="absolute inset-0 flex items-center justify-center bg-dark/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span class="rounded-full bg-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-dark">Xem Chi Tiết</span>
            </div>
            <div class="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-dark">Mới</div>
          </div>
          <div class="p-5 md:p-6">
            <h3 class="text-lg font-heading font-bold mb-2 transition-colors duration-300 group-hover:text-gold">${p.title}</h3>
            <p class="text-xl text-gold font-heading font-bold">${p.price}</p>
          </div>
        </div>
      `,
    )
    .join("");
}

// ===== MODAL =====
function openModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;

  document.getElementById("modal-image").src = p.image;
  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-price").innerText = p.price;
  document.getElementById("modal-description").innerText = p.description;

  document.getElementById("modal-specs").innerHTML = p.specs
    .map(
      (spec, index) => `
        <div class="flex items-center justify-between py-2.5 ${index !== p.specs.length - 1 ? "border-b border-gray-200" : ""}">
          <span class="text-gray-500 text-sm">${spec.label}</span>
          <span class="font-semibold text-dark text-sm text-right ml-4">${spec.value}</span>
        </div>
      `,
    )
    .join("");

  document.getElementById("modal-zalo-btn").href = generateZaloLink(p.title);

  const modal = document.getElementById("product-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

// ===== CATALOG =====
function showAllProducts() {
  const catalogGrid = document.getElementById("catalog-grid");

  catalogGrid.innerHTML = products
    .map(
      (p) => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid md:grid-cols-2">
            <div class="bg-cream-dark flex items-center justify-center p-4 md:p-6">
              <img src="${p.image}" class="w-full h-48 md:h-64 object-cover rounded-xl" alt="${p.title}" />
            </div>
            <div class="p-5 md:p-6 flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-heading font-bold mb-2">${p.title}</h3>
                <p class="text-2xl text-gold font-heading font-bold mb-3">${p.price}</p>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">${p.description}</p>
              </div>
              <div class="flex gap-3">
                <a href="${generateZaloLink(p.title)}" target="_blank" class="flex-1 bg-dark text-white text-center py-2.5 rounded-full font-bold text-sm hover:bg-gold hover:text-dark transition-all">
                  Liên Hệ Zalo
                </a>
                <button onclick="openModal(${p.id})" class="flex-1 border-2 border-dark text-dark py-2.5 rounded-full font-bold text-sm hover:bg-dark hover:text-white transition-all">
                  Chi Tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      `,
    )
    .join("");

  const overlay = document.getElementById("catalog-overlay");
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeCatalog() {
  const overlay = document.getElementById("catalog-overlay");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}

// ===== UTILS =====
function generateZaloLink(productName) {
  const msg = `Xin chào Ánh Hòa, tôi quan tâm sản phẩm: ${productName}. Vui lòng tư vấn thêm.`;
  return `https://zalo.me/${ZALO_PHONE}?text=${encodeURIComponent(msg)}`;
}

// ===== SCROLL EFFECTS =====
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  const backBtn = document.getElementById("backToTop");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "none";
  }

  if (window.scrollY > 500) {
    backBtn.classList.remove("opacity-0", "invisible");
    backBtn.classList.add("opacity-100", "visible");
  } else {
    backBtn.classList.remove("opacity-100", "visible");
    backBtn.classList.add("opacity-0", "invisible");
  }
});

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll('[data-aos="fade-up"]').forEach((el) => {
    el.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition-all",
      "duration-700",
      "ease-out",
    );
    observer.observe(el);
  });
}

// ===== BACK TO TOP =====
document.getElementById("backToTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== KEYBOARD =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCatalog();
  }
});

// ===== CLICK OUTSIDE MODAL =====
document
  .getElementById("product-modal")
  ?.addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initScrollReveal();
});
