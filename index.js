const electronics = [
    { name: "Смартфон Samsung Galaxy S24 Ultra", image: "images/samsung-s24-ultra.jpg" },
    { name: "Ноутбук Apple MacBook Air M3", image: "images/macbook-air-m3.jpg" },
    { name: "Навушники Sony WH-1000XM5", image: "images/sony-wh1000xm5.jpg" },
    { name: "Монітор LG UltraGear 27\"", image: "images/lg-ultragear-27.jpg" },
    { name: "Планшет Apple iPad Pro 12.9\"", image: "images/ipad-pro-12-9.jpg" },
    { name: "Смарт-годинник Apple Watch Series 9", image: "images/apple-watch-s9.jpg" },
    { name: "Відеокарта NVIDIA GeForce RTX 4080", image: "images/rtx-4080.jpg" },
    { name: "Ігрова консоль PlayStation 5", image: "images/ps5.jpg" },
    { name: "Колонка JBL Charge 5", image: "images/jbl-charge-5.jpg" },
    { name: "Камера Canon EOS R8", image: "images/canon-eos-r8.jpg" },
    { name: "Ноутбук ASUS ROG Strix", image: "images/asus-rog-strix.jpg" },
    { name: "Процесор Intel Core i9-14900K", image: "images/i9-14900k.jpg" },
    { name: "Смартфон Google Pixel 8 Pro", image: "images/pixel-8-pro.jpg" },
    { name: "SSD диск Samsung 990 Pro 2TB", image: "images/samsung-990-pro.jpg" },
    { name: "Клавіатура Logitech MX Mechanical", image: "images/logitech-mx-mechanical.jpg" },
    { name: "Мишка Razer DeathAdder V3 Pro", image: "images/razer-deathadder-v3-pro.jpg" },
    { name: "Мікрофон Shure SM7B", image: "images/shure-sm7b.jpg" },
    { name: "Телевізор Samsung Neo QLED 65\"", image: "images/samsung-neo-qled-65.jpg" },
    { name: "Саундбар Sony HT-A7000", image: "images/sony-ht-a7000.jpg" },
    { name: "Проєктор Xiaomi Mi Smart", image: "images/xiaomi-mi-smart.jpg" },
    { name: "Смартфон Xiaomi 14 Pro", image: "images/xiaomi-14-pro.jpg" },
    { name: "Ноутбук Lenovo Legion 7", image: "images/lenovo-legion-7.jpg" },
    { name: "Навушники AirPods Pro 2", image: "images/airpods-pro-2.jpg" },
    { name: "Монітор Samsung Odyssey G9", image: "images/samsung-odyssey-g9.jpg" },
    { name: "Планшет Samsung Galaxy Tab S9 Ultra", image: "images/galaxy-tab-s9-ultra.jpg" },
    { name: "Смарт-годинник Samsung Galaxy Watch 6", image: "images/galaxy-watch-6.jpg" },
    { name: "Відеокарта AMD Radeon RX 7900 XTX", image: "images/rx-7900-xtx.jpg" },
    { name: "Ігрова консоль Xbox Series X", image: "images/xbox-series-x.jpg" },
    { name: "Колонка Marshall Stanmore III", image: "images/marshall-stanmore-3.jpg" },
    { name: "Камера Nikon Z8", image: "images/nikon-z8.jpg" },
    { name: "Ноутбук HP Spectre x360", image: "images/hp-spectre-x360.jpg" },
    { name: "Процесор AMD Ryzen 9 7950X", image: "images/ryzen-9-7950x.jpg" },
    { name: "Смартфон OnePlus 12", image: "images/oneplus-12.jpg" },
    { name: "SSD Kingston KC3000 2TB", image: "images/kingston-kc3000.jpg" },
    { name: "Клавіатура Razer Huntsman V2", image: "images/razer-huntsman-v2.jpg" },
    { name: "Мишка Logitech G Pro X Superlight", image: "images/logitech-g-pro-x.jpg" },
    { name: "Мікрофон HyperX QuadCast", image: "images/hyperx-quadcast.jpg" },
    { name: "Телевізор LG OLED C3 65\"", image: "images/lg-oled-c3.jpg" },
    { name: "Саундбар Bose Smart Soundbar 900", image: "images/bose-900.jpg" },
    { name: "Проєктор Epson EH-TW7100", image: "images/epson-eh-tw7100.jpg" },
    { name: "Смартфон Huawei Mate 60 Pro", image: "images/huawei-mate-60-pro.jpg" },
    { name: "Ноутбук Acer Predator Helios 300", image: "images/acer-predator-helios-300.jpg" },
    { name: "Навушники Sennheiser Momentum 4", image: "images/sennheiser-momentum-4.jpg" },
    { name: "Монітор ASUS ProArt PA32DC", image: "images/asus-proart-pa32dc.jpg" },
    { name: "Смарт-годинник Garmin Fenix 7", image: "images/garmin-fenix-7.jpg" },
    { name: "Відеокарта NVIDIA GeForce RTX 4090", image: "images/rtx-4090.jpg" },
    { name: "Ігрова консоль Nintendo Switch OLED", image: "images/nintendo-switch-oled.jpg" },
    { name: "Колонка Sonos Era 300", image: "images/sonos-era-300.jpg" },
    { name: "Камера Fujifilm X-T5", image: "images/fujifilm-xt5.jpg" }
];

const productsContainer = document.getElementById("products-container");
const loadMoreBtn = document.getElementById("load-more-btn");
let currentIndex = 0;
const itemsPerLoad = 25;

function renderProducts(list = electronics) {
    const nextProducts = list.slice(currentIndex, currentIndex + itemsPerLoad);
    nextProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        const price = `₴${(Math.random() * 50000 + 5000).toFixed(0)}`;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${price}</p>
            <button class="add-to-cart-btn">У кошик</button>
        `;

        card.querySelector(".add-to-cart-btn").addEventListener("click", () => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (!isLoggedIn) {
                location.href = "register.html";
                return;
            }
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ title: product.name, image: product.image, price });
            localStorage.setItem("cart", JSON.stringify(cart));
            location.href = "cart.html";
        });

        productsContainer.appendChild(card);
    });

    currentIndex += itemsPerLoad;
    if (currentIndex >= list.length) {
        loadMoreBtn.style.display = "none";
    }
}

loadMoreBtn.addEventListener("click", () => renderProducts());

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    currentIndex = 0;
    productsContainer.innerHTML = "";
    if (query === "") {
        loadMoreBtn.style.display = "block";
        renderProducts();
        return;
    }
    const filtered = electronics.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    if (filtered.length === 0) {
        productsContainer.innerHTML = "<p class='no-results'>Нічого не знайдено.</p>";
        loadMoreBtn.style.display = "none";
    } else {
        renderProducts(filtered);
        loadMoreBtn.style.display = "none";
    }
});

function updateDateTime() {
    const datetimeElement = document.getElementById("datetime");
    const now = new Date();
    const days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    datetimeElement.textContent =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}, ` +
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}
setInterval(updateDateTime, 60000);
updateDateTime();

renderProducts();

document.getElementById("login-btn").addEventListener("click", () => {
    location.href = "login.html?redirect=cart";
});
document.getElementById("register-btn").addEventListener("click", () => {
    location.href = "register.html";
});
document.getElementById("cart-btn").addEventListener("click", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
        location.href = "cart.html";
    } else {
        location.href = "login.html?redirect=cart";
    }
});
