function loadCart() {
  const cartContainer = document.getElementById("cart-container");
  const totalElement = document.getElementById("total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += parseFloat(item.price.replace("₴", ""));

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">Видалити</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  totalElement.textContent = "Разом: ₴" + total.toFixed(2);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Дякуємо за покупку! Ваше замовлення оформлено.");
  localStorage.removeItem("cart");
  loadCart();
});

loadCart();
