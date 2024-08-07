// document.addEventListener('DOMContentLoaded', function() {
//     const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (selectedProduct) {
//       document.getElementById('product-image').src = selectedProduct.imageUrl;
//       document.getElementById('product-name').textContent = selectedProduct.name;
//       document.getElementById('product-description').textContent = selectedProduct.description;
//       document.getElementById('product-price').textContent = selectedProduct.price;
//       document.getElementById('product-old-price').textContent = selectedProduct.oldPrice;

//       document.getElementById('add-to-cart-btn').addEventListener('click', function() {
//         addToCart(selectedProduct.id, selectedProduct.category);
//       });
//     }
//   });

//   function addToCart(productId, category) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = products[category].find(p => p.id === productId);
//     const cartItem = cart.find(item => item.id === productId && item.category === category);

//     if (cartItem) {
//       cartItem.quantity += 1;
//     } else {
//       cart.push({ ...product, category, quantity: 1 });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartDisplay();
//   }

//   function updateCartDisplay() {
//     const cartCount = document.querySelector('.count-item');
//     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//     cartCount.textContent = totalItems;
//   }

//   // Initialize cart display on page load
//   updateCartDisplay();

document.addEventListener('DOMContentLoaded', function() {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  if (selectedProduct) {
      document.getElementById('product-image').src = selectedProduct.imageUrl;
      document.getElementById('product-name').textContent = selectedProduct.name;
      document.getElementById('product-description').textContent = selectedProduct.description;
      document.getElementById('product-price').textContent = selectedProduct.price;
      document.getElementById('product-old-price').textContent = selectedProduct.oldPrice;

      document.getElementById('add-to-cart-btn').addEventListener('click', function() {
          addToCart(selectedProduct.id, selectedProduct.category);
      });
  }
  updateCartDisplay();
});
