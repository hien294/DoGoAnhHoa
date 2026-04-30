// Dữ liệu sản phẩm (giữ nguyên 6 sản phẩm, đã có Sập Gụ...)
const products = [
  {
    id: 1,
    title: "Bộ Bàn Ghế Hoàng Gia Gỗ Mun",
    price: "185.000.000đ",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format",
    description:
      "Bộ bàn ghế phong cách Hoàng Gia từ gỗ Mun đuôi công quý hiếm. Từng đường nét chạm khắc cổ điển.",
    specs: [
      "Gỗ: Mun đuôi công",
      "Số món: 10 món",
      "Chạm khảm tay 100%",
      "Bảo hành: 10 năm",
    ],
    material: "Gỗ Mun đuôi công",
    dimensions: "Bàn 1m8 x 1m, Ghế đơn 0.9m",
    origin: "Làng nghề Đồng Kỵ",
  },
  {
    id: 2,
    title: "Giường Ngủ Tân Cổ Điển Gỗ Gõ Đỏ",
    price: "45.000.000đ",
    image:
      "https://images.unsplash.com/photo-1505693419173-42b9256a0904?q=80&w=2070&auto=format",
    description:
      "Sự kết hợp hoàn hảo giữa hiện đại và cổ điển. Giường ngủ gỗ Gõ Đỏ bền bỉ, thơm tự nhiên.",
    specs: [
      "Gỗ: Gõ Đỏ Pachy",
      "Kích thước: 1m8 x 2m",
      "Phong cách: Tân cổ điển",
      "Bảo hành: Trọn đời",
    ],
    material: "Gỗ Gõ Đỏ Pachy",
    dimensions: "1m8 x 2m",
    origin: "Làng nghề Đồng Kỵ",
  },
  {
    id: 3,
    title: "Tủ Rượu Luxury Gỗ Hương",
    price: "32.000.000đ",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format",
    description:
      "Tủ rượu đẳng cấp nâng tầm không gian. Kính cường lực + khung gỗ Hương đỏ.",
    specs: [
      "Gỗ: Hương Đỏ",
      "Phụ kiện: Đèn LED",
      "Kích thước: 2m2 x 1m8",
      "Bảo hành: 5 năm",
    ],
    material: "Gỗ Hương Đỏ",
    dimensions: "2m2 x 1m8",
    origin: "Làng nghề Đồng Kỵ",
  },
  {
    id: 4,
    title: "Bàn Ăn Nguyên Khối Gỗ Cẩm",
    price: "210.000.000đ",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1974&auto=format",
    description:
      "Bàn ăn gỗ Cẩm nguyên khối, giữ nguyên đường vân tự nhiên như rồng bay phượng múa.",
    specs: ["Gỗ: Cẩm Lai", "Độ dày: 15cm", "Kích thước: 3m x 1m", "Nguyên tấm"],
    material: "Gỗ Cẩm Lai",
    dimensions: "3m x 1m",
    origin: "Làng nghề Đồng Kỵ",
  },
  {
    id: 5,
    title: "Sập Gụ Tủ Chè Cổ Truyền",
    price: "75.000.000đ",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format",
    description:
      "Nét văn hóa truyền thống Việt Nam được tái hiện qua bộ Sập Gụ Tủ Chè. Chạm khắc tích 'Mai Điểu' sung túc.",
    specs: [
      "Gỗ: Gụ Lào",
      "Chạm thủ công",
      "Đánh vecni truyền thống",
      "Tuổi thọ: trên 100 năm",
    ],
    material: "Gỗ Gụ Lào",
    dimensions: "1m8 x 2m2",
    origin: "Làng nghề Đồng Kỵ",
  },
  {
    id: 6,
    title: "Kệ Tivi Mẫu Hiện Đại Gỗ Sồi",
    price: "12.500.000đ",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format",
    description:
      "Thiết kế đơn giản, tinh tế cho căn hộ cao cấp. Gỗ Sồi Nga nhập khẩu.",
    specs: [
      "Gỗ: Sồi Nga",
      "Kích thước: 2m",
      "Màu: Óc chó/Tự nhiên",
      "Bảo hành: 2 năm",
    ],
    material: "Gỗ Sồi Nga",
    dimensions: "2m",
    origin: "Làng nghề Đồng Kỵ",
  },
];

const ZALO_PHONE = "0392469464"; // số mới

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = products
    .map(
      (p) => `
        <div class="product-card bg-white rounded-2xl overflow-hidden shadow-xl group">
            <div class="relative h-72 overflow-hidden">
                <img src="${p.image}" class="image-zoom w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center gap-3">
                    <button onclick="openModal(${p.id})" class="bg-white text-wood-dark px-5 py-2 rounded-full font-bold">Xem chi tiết</button>
                    <a href="${generateZaloLink(p.title)}" target="_blank" class="bg-wood-accent text-white px-5 py-2 rounded-full font-bold flex items-center gap-2">
                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" class="w-4 h-4"> Tư vấn
                    </a>
                </div>
                <div class="absolute top-4 left-4 bg-wood-accent text-white text-xs px-3 py-1 rounded-full">Mới</div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold">${p.title}</h3>
                <p class="text-wood-accent font-bold mt-2">${p.price}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

function openModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("modal-image").src = p.image;
  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-price").innerText = p.price;
  document.getElementById("modal-description").innerText = p.description;
  document.getElementById("modal-specs").innerHTML = `
        <div class="grid grid-cols-2 gap-2 text-sm mb-3">
            <div><span class="font-bold">Chất liệu:</span> ${p.material}</div>
            <div><span class="font-bold">Kích thước:</span> ${p.dimensions}</div>
            <div><span class="font-bold">Xuất xứ:</span> ${p.origin}</div>
        </div>
        <ul class="space-y-1 text-sm">${p.specs.map((s) => `<li>✓ ${s}</li>`).join("")}</ul>
    `;
  document.getElementById("modal-zalo-btn").href = generateZaloLink(p.title);
  document.getElementById("product-modal").classList.remove("hidden");
  document.getElementById("product-modal").classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

function showAllProducts() {
  const catalogGrid = document.getElementById("catalog-grid");
  catalogGrid.innerHTML = products
    .map(
      (p) => `
        <div class="bg-white p-5 rounded-2xl shadow flex flex-col md:flex-row gap-6">
            <img src="${p.image}" class="md:w-1/3 h-56 object-cover rounded-xl">
            <div class="flex-1">
                <h3 class="text-2xl font-bold">${p.title}</h3>
                <p class="text-wood-accent font-bold text-xl">${p.price}</p>
                <p class="text-gray-600 mt-2">${p.description.substring(0, 120)}...</p>
                <div class="mt-4 flex gap-3">
                    <a href="${generateZaloLink(p.title)}" target="_blank" class="bg-wood-dark text-white px-5 py-2 rounded-full flex items-center gap-2"><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png" class="w-4 h-4"> Liên hệ</a>
                    <button onclick="openModal(${p.id})" class="border border-wood-dark px-5 py-2 rounded-full">Chi tiết</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
  document.getElementById("catalog-overlay").classList.remove("hidden");
  document.getElementById("catalog-overlay").classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeCatalog() {
  document.getElementById("catalog-overlay").classList.add("hidden");
  document.body.style.overflow = "";
}

function generateZaloLink(productName) {
  const msg = `Xin chào, tôi quan tâm sản phẩm: ${productName}. Vui lòng tư vấn thêm.`;
  return `https://zalo.me/${ZALO_PHONE}?text=${encodeURIComponent(msg)}`;
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white", "shadow-lg");
    header.classList.remove("bg-white/70");
  } else {
    header.classList.add("bg-white/70");
    header.classList.remove("bg-white", "shadow-lg");
  }

  // Back to top button
  const backBtn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

// Scroll reveal
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll('[data-aos="fade-up"]')
    .forEach((el) => observer.observe(el));
}

// Back to Top click
document.getElementById("backToTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initScrollReveal();
});
