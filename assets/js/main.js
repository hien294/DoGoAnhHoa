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
                <a href="${generateZaloLink(p.title)}" target="_blank" class="flex-1 bg-dark text-white text-center py-2.5 rounded-xl font-bold text-sm hover:bg-gold hover:text-dark transition-all">
                  Liên Hệ
                </a>
                <button onclick="openModal(${p.id})" class="flex-1 border-2 border-dark text-dark py-2.5 rounded-xl font-bold text-sm hover:bg-dark hover:text-white transition-all">
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
  const msg = `Xin chào Hòa Ánh, tôi quan tâm sản phẩm: ${productName}. Vui lòng tư vấn thêm.`;
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
