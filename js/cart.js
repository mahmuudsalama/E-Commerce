let cartProduct = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
  const cartContainer = document.querySelector('.cart-container');
  cartContainer.innerHTML = ''; 
  cartProduct.forEach(item => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="info">
         <div>
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
         </div>
        <button onclick="removeFromCart(${item.id}, '${item.category}')">Remove</button>
 
        </div>
       
        </div>
    `;
  });
  
  const totalPrice = cartProduct.reduce((total, item) => total + (item.price * item.quantity), 0);
  cartContainer.innerHTML += `<h3 id="cart_total">Total Price: ${totalPrice}</h3>`;
}

function removeFromCart(productId, category) {
  cartProduct = cartProduct.filter(item => !(item.id === productId && item.category === category));
  localStorage.setItem('cart', JSON.stringify(cartProduct));
  displayCartItems();
}
document.addEventListener('DOMContentLoaded', () => {
    let cartCounts =  localStorage.getItem("count-item");
    document.getElementsByClassName("count-item")[0].innerHTML = cartCounts;
    displayCartItems();
    displayUserName();
});
