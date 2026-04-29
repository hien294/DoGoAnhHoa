// Product Data
const products = [
    {
        id: 1,
        title: "Bộ Bàn Ghế Hoàng Gia Gỗ Mun",
        price: "185.000.000đ",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop",
        description: "Bộ bàn ghế phong cách Hoàng Gia được chế tác từ gỗ Mun đuôi công quý hiếm. Từng đường nét chạm khắc hoa văn cổ điển mang lại vẻ đẹp uy nghi, tráng lệ cho phòng khách.",
        specs: ["Gỗ: Mun đuôi công", "Số món: 10 món", "Kỹ thuật: Chạm khảm tay 100%", "Bảo hành: 10 năm"],
        material: "Gỗ Mun đuôi công",
        dimensions: "Bàn 1m8 x 1m, Ghế đơn 0.9m",
        origin: "Làng nghề Đồng Kỵ"
    },
    {
        id: 2,
        title: "Giường Ngủ Tân Cổ Điển Gỗ Gõ Đỏ",
        price: "45.000.000đ",
        image: "https://images.unsplash.com/photo-1505693419173-42b9256a0904?q=80&w=2070&auto=format&fit=crop",
        description: "Sự kết hợp hoàn hảo giữa nét hiện đại và cổ điển. Giường ngủ gỗ Gõ Đỏ không chỉ bền bỉ theo thời gian mà còn mang lại giấc ngủ an lành với hương thơm gỗ tự nhiên.",
        specs: ["Gỗ: Gõ Đỏ Pachy", "Kích thước: 1m8 x 2m", "Phong cách: Tân cổ điển", "Bảo hành: Trọn đời"],
        material: "Gỗ Gõ Đỏ Pachy",
        dimensions: "1m8 x 2m",
        origin: "Làng nghề Đồng Kỵ"
    },
    {
        id: 3,
        title: "Tủ Rượu Luxury Gỗ Hương",
        price: "32.000.000đ",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        description: "Tủ rượu đẳng cấp giúp nâng tầm không gian phòng ăn. Thiết kế cánh kính cường lực kết hợp khung gỗ Hương đỏ bền chắc, khoe trọn bộ sưu tập rượu quý của gia chủ.",
        specs: ["Gỗ: Hương Đỏ", "Phụ kiện: Đèn LED âm tủ", "Kích thước: 2m2 x 1m8", "Bảo hành: 5 năm"],
        material: "Gỗ Hương Đỏ",
        dimensions: "2m2 x 1m8",
        origin: "Làng nghề Đồng Kỵ"
    },
    {
        id: 4,
        title: "Bàn Ăn Nguyên Khối Gỗ Cẩm",
        price: "210.000.000đ",
        image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=1974&auto=format&fit=crop",
        description: "Bàn ăn gỗ Cẩm nguyên khối giữ nguyên đường vân tự nhiên uốn lượn như rồng bay phượng múa. Một kiệt tác thiên nhiên ngay trong căn bếp của bạn.",
        specs: ["Gỗ: Cẩm Lai", "Độ dày: 15cm", "Kích thước: 3m x 1m", "Tình trạng: Nguyên tấm"],
        material: "Gỗ Cẩm Lai",
        dimensions: "3m x 1m",
        origin: "Làng nghề Đồng Kỵ"
    },
    {
        id: 5,
        title: "Sập Gụ Tủ Chè Cổ Truyền",
        price: "75.000.000đ",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
        description: "Nét văn hóa truyền thống Việt Nam được tái hiện qua bộ Sập Gụ Tủ Chè. Được chạm khắc tích 'Mai Điểu' mang ý nghĩa sung túc, trường thọ cho gia đình.",
        specs: ["Gỗ: Gụ Lào", "Kỹ thuật: Chạm thủ công", "Hoàn thiện: Đánh vecni truyền thống", "Tuổi thọ: Trên 100 năm"],
        material: "Gỗ Gụ Lào",
        dimensions: "1m8 x 2m2",
        origin: "Làng nghề Đồng Kỵ"
    },
    {
        id: 6,
        title: "Kệ Tivi Mẫu Hiện Đại Gỗ Sồi",
        price: "12.500.000đ",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop",
        description: "Thiết kế đơn giản, tinh tế phù hợp với các căn hộ chung cư cao cấp. Gỗ Sồi Nga nhập khẩu đã qua xử lý chống cong vênh, mối mọt.",
        specs: ["Gỗ: Sồi Nga", "Kích thước: 2m", "Màu sắc: Óc chó/Tự nhiên", "Bảo hành: 2 năm"],
        material: "Gỗ Sồi Nga",
        dimensions: "2m",
        origin: "Làng nghề Đồng Kỵ"
    }
];

// Configuration
const ZALO_PHONE = "0901234567";

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initScrollReveal();
});

// Render Products to Grid
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = products.map(product => `
        <div class="product-card group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100" data-aos="fade-up">
            <div class="relative h-80 overflow-hidden">
                <img src="${product.image}" alt="${product.title}" class="image-zoom w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button onclick="openModal(${product.id})" class="bg-white text-wood-dark px-8 py-3 rounded-full font-bold text-sm hover:bg-wood-accent hover:text-white transition-all transform hover:scale-105 shadow-lg">
                        XEM CHI TIẾT
                    </button>
                    <a href="${generateZaloLink(product.title)}" target="_blank" class="bg-wood-accent text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-wood-accent transition-all transform hover:scale-105 shadow-lg">
                        LIÊN HỆ NGAY
                    </a>
                </div>
                <div class="absolute top-6 left-6 bg-wood-accent/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Tác Phẩm Mới
                </div>
            </div>
            <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <p class="text-wood-accent font-black text-xs uppercase tracking-widest mb-1">${product.material}</p>
                        <h3 class="text-2xl font-black text-wood-dark leading-tight group-hover:text-wood-accent transition-colors">${product.title}</h3>
                    </div>
                </div>
                <div class="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span class="text-xl font-black text-wood-dark">${product.price}</span>
                    <button onclick="openModal(${product.id})" class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-wood-dark hover:text-white transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Full Catalog Logic
function showAllProducts() {
    const catalogOverlay = document.getElementById('catalog-overlay');
    const catalogGrid = document.getElementById('catalog-grid');
    if (!catalogOverlay || !catalogGrid) return;
    
    catalogGrid.innerHTML = products.map(product => `
        <div class="flex flex-col md:flex-row gap-8 bg-white/50 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/80 transition-all duration-500">
            <div class="md:w-1/3 h-64 rounded-2xl overflow-hidden shadow-lg">
                <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700">
            </div>
            <div class="md:w-2/3 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-2xl font-black text-wood-dark">${product.title}</h3>
                        <span class="text-2xl font-black text-wood-accent">${product.price}</span>
                    </div>
                    <p class="text-gray-600 mb-4 line-clamp-2">${product.description}</p>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-wood-dark">Chất liệu:</span>
                            <span class="text-gray-500">${product.material}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-wood-dark">Kích thước:</span>
                            <span class="text-gray-500">${product.dimensions}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-wood-dark">Xuất xứ:</span>
                            <span class="text-gray-500">${product.origin}</span>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4 mt-6">
                    <a href="${generateZaloLink(product.title)}" target="_blank" class="flex-1 bg-wood-dark text-white text-center py-3 rounded-xl font-bold hover:bg-wood-accent transition-all">
                        Liên hệ tư vấn
                    </a>
                    <button onclick="openModal(${product.id})" class="flex-1 border-2 border-wood-dark text-wood-dark py-3 rounded-xl font-bold hover:bg-wood-dark hover:text-white transition-all">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    catalogOverlay.classList.remove('hidden');
    catalogOverlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeCatalog() {
    const catalogOverlay = document.getElementById('catalog-overlay');
    if (!catalogOverlay) return;
    catalogOverlay.classList.add('hidden');
    catalogOverlay.classList.remove('flex');
    document.body.style.overflow = '';
}

// Modal Logic
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalSpecs = document.getElementById('modal-specs');
    const modalZaloBtn = document.getElementById('modal-zalo-btn');

    if (modalImage) modalImage.src = product.image;
    if (modalTitle) modalTitle.textContent = product.title;
    if (modalDescription) modalDescription.textContent = product.description;
    
    if (modalSpecs) {
        modalSpecs.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-6 bg-gray-50 rounded-2xl">
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-black">Chất liệu</span>
                    <span class="font-bold text-wood-dark">${product.material}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-black">Kích thước</span>
                    <span class="font-bold text-wood-dark">${product.dimensions}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-black">Nguồn gốc</span>
                    <span class="font-bold text-wood-dark">${product.origin}</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-black">Bảo hành</span>
                    <span class="font-bold text-wood-dark">Trọn đời</span>
                </div>
            </div>
            <div class="mt-6">
                <h4 class="font-black text-sm uppercase tracking-widest mb-4">Chi tiết kỹ thuật</h4>
                <ul class="space-y-3">
                    ${product.specs.map(spec => `
                        <li class="flex items-center gap-3 text-gray-600">
                            <svg class="w-4 h-4 text-wood-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                            ${spec}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    if (modalZaloBtn) modalZaloBtn.href = generateZaloLink(product.title);

    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    document.body.style.overflow = '';
}

// Helper: Generate Zalo Link
function generateZaloLink(productName) {
    const message = encodeURIComponent(`Tôi quan tâm tới sản phẩm: ${productName}. Vui lòng tư vấn thêm cho tôi.`);
    return `https://zalo.me/${ZALO_PHONE}?text=${message}`;
}

// Scroll Reveal Logic
function initScrollReveal() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}
