const PRODUCTS_URL = "./data/products.json";
const SITE_URL = "./data/site.json";

function formatVND(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
}

function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function buildZaloLink(phone, text) {
  // Zalo deep link thường dùng dạng: https://zalo.me/PHONE?text=...
  const cleanPhone = String(phone || "").replace(/\D/g, "");
  const encoded = encodeURIComponent(text || "");
  const base = `https://zalo.me/${cleanPhone || ""}`.replace(/\/$/, "");
  if (!cleanPhone) return "#";
  return `${base}?text=${encoded}`;
}

async function loadJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Không tải được: ${url} (HTTP ${res.status})`);
  return res.json();
}

function el(id) {
  return document.getElementById(id);
}

function setSiteFooterYear() {
  const year = new Date().getFullYear();
  const target = document.querySelectorAll("#siteYear");
  target.forEach((n) => (n.textContent = String(year)));
}

function setHeaderZalo({ zaloPhone, generalZaloText }) {
  const btn = el("headerZaloBtn");
  if (!btn) return;
  btn.href = buildZaloLink(zaloPhone, generalZaloText);
}

function renderFeaturedProducts(products) {
  const container = el("featuredProducts");
  if (!container) return;
  container.innerHTML = "";

  const featured = products.slice(0, 3);
  featured.forEach((p) => {
    const card = document.createElement("a");
    card.className = "featured-card";
    card.href = `./product.html?id=${encodeURIComponent(p.id)}`;
    card.innerHTML = `
      <img src="${p.image || ""}" alt="${p.name || ""}" />
      <div class="featured-card-body">
        <div class="featured-card-title">${p.name || "-"}</div>
        <div class="featured-card-meta">
          <span>${formatVND(p.price)}</span>
          <span aria-hidden="true">•</span>
          <span>${p.status || "-"}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function setHomeKpis(products) {
  const kpi = el("kpiProductCount");
  if (!kpi) return;
  kpi.textContent = String(products.length || 0);
}

function statusPillClass(status) {
  const s = String(status || "").toLowerCase();
  if (s.includes("còn") || s.includes("available") || s.includes("sẵn")) return "is-available";
  if (s.includes("đặt") || s.includes("hết") || s.includes("unavailable")) return "is-unavailable";
  return "";
}

function renderProductsGrid(products) {
  const grid = el("productsGrid");
  const empty = el("productsEmpty");
  const count = el("productsCount");
  const hint = el("filterHint");
  if (!grid) return;

  grid.innerHTML = "";
  empty && (empty.hidden = true);

  const list = products || [];
  if (count) count.textContent = String(list.length);
  if (hint) hint.textContent = list.length ? "" : "";

  if (!list.length) {
    empty && (empty.hidden = false);
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-card-media">
        <img src="${p.image || ""}" alt="${p.name || ""}" />
      </div>
      <div class="product-card-body">
        <div class="product-card-title">${p.name || "-"}</div>
        <div class="product-pill-row">
          <div class="pill ${statusPillClass(p.status)}">${p.status || "-"}</div>
          <div class="pill">${p.material || "-"}</div>
        </div>
        <div class="product-card-footer">
          <div class="product-price">${formatVND(p.price)}</div>
          <a class="btn btn-sm btn-secondary" href="./product.html?id=${encodeURIComponent(p.id)}">Xem chi tiết</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function normalizeText(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setProductsSearchHandler(products) {
  const input = el("searchInput");
  const clearBtn = el("clearSearchBtn");
  const hint = el("filterHint");

  if (!input) return;

  const apply = () => {
    const q = input.value.trim();
    const nq = normalizeText(q);
    const filtered = !q
      ? products
      : products.filter((p) => {
          const hay = [
            p.name,
            p.material,
            p.status,
            p.description,
            p.dimensions,
            p.unit,
          ]
            .map(normalizeText)
            .join(" ");
          return hay.includes(nq);
        });

    if (hint) hint.textContent = q ? `Kết quả cho: "${q}"` : "";
    renderProductsGrid(filtered);
  };

  input.addEventListener("input", apply);
  clearBtn && clearBtn.addEventListener("click", () => (input.value = ""));
  clearBtn && clearBtn.addEventListener("click", apply);

  apply();
}

function renderProductDetail(product) {
  const notFound = el("productNotFound");
  if (!product) {
    notFound && (notFound.hidden = false);
    return;
  }

  const img = el("productImage");
  const title = el("productTitle");
  const status = el("productStatus");
  const price = el("productPrice");
  const material = el("productMaterial");
  const availability = el("productAvailability");
  const unit = el("productUnit");
  const dimensions = el("productDimensions");
  const desc = el("productDescription");

  img && (img.src = product.image || "");
  img && (img.alt = product.name || "");
  title && (title.textContent = product.name || "-");
  status && (status.textContent = product.status || "-");
  price && (price.textContent = `${formatVND(product.price)} / ${product.unit || ""}`.replace(" /  ", " "));
  material && (material.textContent = product.material || "-");
  availability && (availability.textContent = product.availability || product.status || "-");
  unit && (unit.textContent = product.unit || "-");
  dimensions && (dimensions.textContent = product.dimensions || "-");
  desc && (desc.textContent = product.description || "-");
}

function buildZaloTextTemplate({ productName, generalText }) {
  if (productName) {
    return `Xin chào! Tôi muốn liên hệ về sản phẩm: ${productName}. ` +
      `Xin báo giá và thông tin chi tiết.`;
  }
  return generalText || `Xin chào! Tôi muốn tư vấn/báo giá.`;
}

function setContactZalo({ zaloPhone, generalZaloText, product }) {
  // Header (mặc định tin nhắn chung)
  setHeaderZalo({ zaloPhone, generalZaloText });

  // Nút liên hệ trên landing
  const zaloContactBtn = el("zaloContactBtn");
  const siteEmail = el("siteEmail");
  const sitePhone = el("sitePhone");
  const siteYear = el("siteYear");
  const zaloNote = el("zaloNote");
  const copyZaloTextBtn = el("copyZaloTextBtn");
  const textPreview = el("zaloTextPreview");

  if (siteEmail && sitePhone) {
    siteEmail.textContent = window.__SITE_EMAIL__ || "-";
    sitePhone.textContent = window.__SITE_PHONE__ || "-";
  }

  if (siteYear) {
    siteYear.textContent = new Date().getFullYear();
  }

  const zaloText = buildZaloTextTemplate({
    productName: product ? product.name : "",
    generalText: generalZaloText,
  });

  if (zaloContactBtn) {
    zaloContactBtn.href = buildZaloLink(zaloPhone, zaloText);
  }
  if (zaloNote) {
    zaloNote.textContent = zaloPhone ? "Bấm để mở Zalo và gửi tin nhắn đã điền sẵn." : "Chưa cấu hình số Zalo.";
  }
  if (textPreview) {
    textPreview.textContent = zaloText;
  }

  // Copy text (landing)
  if (copyZaloTextBtn) {
    copyZaloTextBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(zaloText);
        copyZaloTextBtn.textContent = "Đã sao chép";
        setTimeout(() => (copyZaloTextBtn.textContent = "Sao chép nội dung nhắn"), 1400);
      } catch {
        alert("Không thể sao chép tự động. Bạn hãy chọn và copy nội dung trong khung bên dưới.");
      }
    });
  }

  // Nút Zalo trên trang chi tiết sản phẩm
  const zaloProductBtn = el("zaloProductBtn");
  const copyProductBtn = el("copyProductZaloTextBtn");
  const productTextPreview = el("productZaloTextPreview");
  if (zaloProductBtn) {
    zaloProductBtn.href = buildZaloLink(zaloPhone, zaloText);
  }
  if (productTextPreview) {
    productTextPreview.textContent = zaloText;
  }
  if (copyProductBtn) {
    copyProductBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(zaloText);
        copyProductBtn.textContent = "Đã sao chép";
        setTimeout(() => (copyProductBtn.textContent = "Sao chép nội dung nhắn"), 1400);
      } catch {
        alert("Không thể sao chép tự động. Bạn hãy chọn và copy nội dung trong khung bên dưới.");
      }
    });
  }
}

function setSiteMeta(site) {
  if (!site) return;
  window.__SITE_EMAIL__ = site.email || "";
  window.__SITE_PHONE__ = site.phone || "";
}

async function boot() {
  const page = document.body.dataset.page;
  setSiteFooterYear();

  const [products, site] = await Promise.all([
    loadJson(PRODUCTS_URL).catch(() => []),
    loadJson(SITE_URL).catch(() => ({})),
  ]);

  setSiteMeta(site);

  const zaloPhone = site.zaloPhone || "";
  const generalZaloText = site.generalZaloText || "";

  if (page === "home") {
    setHomeKpis(products);
    renderFeaturedProducts(products);
    setContactZalo({ zaloPhone, generalZaloText, product: null });
  }

  if (page === "products") {
    renderProductsGrid(products);
    setProductsSearchHandler(products);
    setContactZalo({ zaloPhone, generalZaloText, product: null });
    // Trên trang sản phẩm không có khối liên hệ Zalo (đều nằm ở trang chi tiết/landing)
  }

  if (page === "product") {
    const id = getQueryParam("id");
    const product = products.find((p) => String(p.id) === String(id)) || null;
    renderProductDetail(product);
    setContactZalo({ zaloPhone, generalZaloText, product });
  }
}

boot().catch((err) => {
  // Không phá UI; chỉ log để dev sửa nhanh
  console.error(err);
  const note = el("zaloNote");
  if (note) note.textContent = "Lỗi tải dữ liệu. Vui lòng kiểm tra file data/products.json và data/site.json.";
});

