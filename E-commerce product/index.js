let addtocart = document.getElementById('addToCart');
let cartSidebar = document.getElementById("sideCart");
let cartItems = document.getElementById("cartItems");
let close = document.getElementById("closeCart");
let itemlistBtn = document.getElementById("itemlist");
let productImage = document.getElementById("productImage");
let sizeSelect = document.getElementById("selectsize");
let quantityInput = document.getElementById("quantityInput");
let colorButtons = document.querySelectorAll('.color-btn');
let cartTotalEl = document.getElementById('cartTotal');

let selectedColor = "White";
let cartTotal = 0;

colorButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    let imgSrc = btn.getAttribute('data-image');
    productImage.src = imgSrc;
    if (btn.classList.contains('bg-white')) selectedColor = "White";
    else if (btn.classList.contains('bg-[#d9c78f]')) selectedColor = "Beige";
    else if (btn.classList.contains('bg-[#2f4f4f]')) selectedColor = "Teal";
    else if (btn.classList.contains('bg-blue-500')) selectedColor = "Blue";
  });
});

function updateTotal(amount) {
  cartTotal += amount;
  cartTotalEl.textContent = cartTotal.toFixed(2);
}

addtocart.addEventListener('click', function() {
  let size = sizeSelect.value;
  let quantity = parseInt(quantityInput.value);
  let imageSrc = productImage.src;
  let pricePerItem = 403;
  let totalPriceForItem = pricePerItem * quantity;

  let item = {
    name: "ParcelYard T-Shirt",
    price: pricePerItem,
    size,
    color: selectedColor,
    quantity,
    image: imageSrc
  };

  cartSidebar.classList.remove('hidden');

  let itemBlock = document.createElement('li');
  itemBlock.className = "flex justify-between items-center space-x-3 mb-4 border-b pb-2";

  itemBlock.innerHTML = `
    <div class="flex space-x-3 items-center">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded" />
      <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm">Size: ${item.size}</p>
        <p class="text-sm">Color: ${item.color}</p>
        <p class="text-sm">Qty: ${item.quantity}</p>
        <p class="text-sm font-medium">$${totalPriceForItem.toFixed(2)}</p>
      </div>
    </div>
    <button class="remove-btn text-red-600 font-bold hover:text-red-800">Remove</button>
  `;

  cartItems.appendChild(itemBlock);

  updateTotal(totalPriceForItem);

  let removeBtn = itemBlock.querySelector('.remove-btn');
  removeBtn.addEventListener('click', function() {
    cartItems.removeChild(itemBlock);
    updateTotal(-totalPriceForItem);
  });
});

itemlistBtn.addEventListener('click', function() {
  cartSidebar.classList.toggle('hidden');
});

close.addEventListener('click', function() {
  cartSidebar.classList.add('hidden');
});
