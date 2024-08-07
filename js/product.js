document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'home.html';
    });
    
    document.getElementById('productLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'product.html';
    });
    
    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html';
    });
    
    document.getElementById('cartLink').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'cart.html';
    });
});
    
const products = {
    fridge: [
    {
    id: 1,
    name: 'Fridge 1',
    price: 30000,
    imageUrl: '../images/fridge/1.avif',
    oldPrice: 35000,
    description: 'Description for Fridge 1'
    },
    {
    id: 2,
    name: 'Fridge 2',
    price: 30000,
    imageUrl: '../images/fridge/2.avif',
    oldPrice: 35000,
    description: 'Description for Fridge 2'
    }, {
    id: 3,
    name: 'Fridge 3',
    price: 30000,
    imageUrl: '../images/fridge/3.avif',
    oldPrice: 35000,
    description: 'Description for Fridge 3'
    }, {
    id: 4,
    name: 'Fridge 4',
    price: 30000,
    imageUrl: '../images/fridge/4.avif',
    oldPrice: 35000,
    description: 'Description for Fridge 4'
    },
    {
    id: 5,
    name: 'Fridge 5',
    price: 30000,
    imageUrl: '../images/fridge/5.avif',
    oldPrice: 35000,
    description: 'Description for Fridge 5'
    }
    ],
    tv: [
    {
    id: 1,
    name: 'TV 1',
    price: 10000,
    imageUrl: '../images/tv/1.avif',
    oldPrice: 15000,
    description: 'Description for TV 1'
    },{
    id: 2,
    name: 'TV 2',
    price: 10000,
    imageUrl: '../images/tv/2.avif',
    oldPrice: 15000,
    description: 'Description for TV 2'
    },{
    id: 3,
    name: 'TV 3',
    price: 10000,
    imageUrl: '../images/tv/3.avif',
    oldPrice: 15000,
    description: 'Description for TV 3'
    },{
    id: 4,
    name: 'TV 4',
    price: 10000,
    imageUrl: '../images/tv/4.avif',
    oldPrice: 15000,
    description: 'Description for TV 4'
    },
    
    ],
    washing: [
      {
        id: 1,
        name: 'Washing Machine 1',
        price: 20000,
        imageUrl: '../images/washing/1.avif',
        oldPrice: 25000,
        description: 'Description for Washing Machine 1'
      },{
        id: 2,
        name: 'Washing Machine 2',
        price: 20000,
        imageUrl: '../images/washing/2.avif',
        oldPrice: 25000,
        description: 'Description for Washing Machine 2'
      },{
        id: 3,
        name: 'Washing Machine 3',
        price: 20000,
        imageUrl: '../images/washing/3.avif',
        oldPrice: 25000,
        description: 'Description for Washing Machine 3'
      },{
        id: 4,
        name: 'Washing Machine 4',
        price: 20000,
        imageUrl: '../images/washing/4.avif',
        oldPrice: 25000,
        description: 'Description for Washing Machine 4'
      },{
        id: 5,
        name: 'Washing Machine 5',
        price: 20000,
        imageUrl: '../images/washing/5.avif',
        oldPrice: 25000,
        description: 'Description for Washing Machine 5'
      },
      // Add more washing products here
    ]
};

function displayProducts(category) {
  const productContainer = document.querySelector('.products');
  productContainer.innerHTML = '';

  if (category === 'All') {
      Object.keys(products).forEach(cat => {
          products[cat].forEach(product => {
              document.getElementsByClassName("header_category")[0].innerHTML= "All Category";
              productContainer.innerHTML += createProductHTML(product,cat);
          });
      });
  } else {
      products[category].forEach(product => {
          document.querySelector(".header_category").innerHTML = `${category}`;
          productContainer.innerHTML += createProductHTML(product,category);
      });
  }
}
function createProductHTML(product,category) {
  return `
      <div class="product">
          <div class="img-product">
              <img src="${product.imageUrl}" alt="${product.name}">
          </div>
          <h3 class="name-product"><a href="#">${product.name}</a></h3>
          <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
              <span>${product.price}</span>
              <p class="old-price">${product.oldPrice}</p>
          </div>
          <div class="addtocart">
              <button class="btn_add" onclick="addToCart(${product.id},'${category}')">add to cart</button>
          </div>
      </div>
  `;
}
function addCategoryListeners() {
  const categoryLinks = document.querySelectorAll('.Category');
  categoryLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          const category = event.target.getAttribute('data-category');
          displayProducts(category);
      });
  });
}
displayProducts("All")
addCategoryListeners();



let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId && item.category === category);
    if (cartItem) {
      cartItem.quantity += 1;
    }
    else {
       cart.push({ ...product, category, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}
    
function updateCartDisplay() {
    const cartCount = document.querySelector('.count-item');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}
updateCartDisplay();
    

function createProductHTML(product, category) {
  return `
    <div class="product">
      <div class="img-product" onclick="viewProductDetails(${product.id}, '${category}')">
        <img src="${product.imageUrl}" alt="${product.name}">
      </div>
      <h3 class="name-product"><a href="#" onclick="viewProductDetails(${product.id}, '${category}')">${product.name}</a></h3>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="price">
        <span>${product.price}</span>
        <p class="old-price">${product.oldPrice}</p>
      </div>
      <div class="addtocart">
        <button onclick="addToCart(${product.id}, '${category}')">add to cart</button>
      </div>
    </div>
  `;
}


function viewProductDetails(productId, category) {
  const product = products[category].find(p => p.id === productId);
  localStorage.setItem('selectedProduct', JSON.stringify({ ...product, category }));
  window.location.href = '/html/product-details.html';
}

// // 
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function addToCart(productId, category) {
//     const product = products[category].find(p => p.id === productId);
//     const cartItem = cart.find(item => item.id === productId && item.category === category);
//     if (cartItem) {
//         cartItem.quantity += 1;
//     } else {
//         cart.push({ ...product, category, quantity: 1 });
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartDisplay();
// }

// function updateCartDisplay() {
//     const cartCount = document.querySelector('.count-item');
//     const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
//     cartCount.textContent = totalItems;
// }

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('homeLink').addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'home.html';
//     });

//     document.getElementById('productLink').addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'product.html';
//     });

//     document.getElementById('logoutLink').addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'login.html';
//     });

//     document.getElementById('cartLink').addEventListener('click', function(event) {
//         event.preventDefault();
//         window.location.href = 'cart.html';
//     });

//     updateCartDisplay();
// });

// const products = {
//     fridge: [
//         { id: 1, name: 'Fridge 1', price: 30000, imageUrl: '../images/fridge/1.avif', oldPrice: 35000, description: 'Description for Fridge 1' },
//         { id: 2, name: 'Fridge 2', price: 30000, imageUrl: '../images/fridge/2.avif', oldPrice: 35000, description: 'Description for Fridge 2' },
//         { id: 3, name: 'Fridge 3', price: 30000, imageUrl: '../images/fridge/3.avif', oldPrice: 35000, description: 'Description for Fridge 3' },
//         { id: 4, name: 'Fridge 4', price: 30000, imageUrl: '../images/fridge/4.avif', oldPrice: 35000, description: 'Description for Fridge 4' },
//         { id: 5, name: 'Fridge 5', price: 30000, imageUrl: '../images/fridge/5.avif', oldPrice: 35000, description: 'Description for Fridge 5' }
//     ],
//     tv: [
//         { id: 1, name: 'TV 1', price: 10000, imageUrl: '../images/tv/1.avif', oldPrice: 15000, description: 'Description for TV 1' },
//         { id: 2, name: 'TV 2', price: 10000, imageUrl: '../images/tv/2.avif', oldPrice: 15000, description: 'Description for TV 2' },
//         { id: 3, name: 'TV 3', price: 10000, imageUrl: '../images/tv/3.avif', oldPrice: 15000, description: 'Description for TV 3' },
//         { id: 4, name: 'TV 4', price: 10000, imageUrl: '../images/tv/4.avif', oldPrice: 15000, description: 'Description for TV 4' }
//     ],
//     washing: [
//         { id: 1, name: 'Washing Machine 1', price: 20000, imageUrl: '../images/washing/1.avif', oldPrice: 25000, description: 'Description for Washing Machine 1' },
//         { id: 2, name: 'Washing Machine 2', price: 20000, imageUrl: '../images/washing/2.avif', oldPrice: 25000, description: 'Description for Washing Machine 2' },
//         { id: 3, name: 'Washing Machine 3', price: 20000, imageUrl: '../images/washing/3.avif', oldPrice: 25000, description: 'Description for Washing Machine 3' },
//         { id: 4, name: 'Washing Machine 4', price: 20000, imageUrl: '../images/washing/4.avif', oldPrice: 25000, description: 'Description for Washing Machine 4' },
//         { id: 5, name: 'Washing Machine 5', price: 20000, imageUrl: '../images/washing/5.avif', oldPrice: 25000, description: 'Description for Washing Machine 5' }
//     ]
// };

// function displayProducts(category) {
//     const productContainer = document.querySelector('.products');
//     productContainer.innerHTML = '';

//     if (category === 'All') {
//         Object.keys(products).forEach(cat => {
//             products[cat].forEach(product => {
//                 document.getElementsByClassName("header_category")[0].innerHTML= "All Category";
//                 productContainer.innerHTML += createProductHTML(product, cat);
//             });
//         });
//     } else {
//         products[category].forEach(product => {
//             document.querySelector(".header_category").innerHTML = `${category}`;
//             productContainer.innerHTML += createProductHTML(product, category);
//         });
//     }
// }

// function createProductHTML(product, category) {
//     return `
//         <div class="product">
//             <div class="img-product" onclick="viewProductDetails(${product.id}, '${category}')">
//                 <img src="${product.imageUrl}" alt="${product.name}">
//             </div>
//             <h3>${product.name}</h3>
//             <div class="price">
//                 <span>${product.price} </span>
//                 <p class="old-price">${product.oldPrice}</p>
//             </div>
//             <button onclick="addToCart(${product.id}, '${category}')">Add to Cart</button>
//         </div>
//     `;
// }

// function viewProductDetails(productId, category) {
//     const product = products[category].find(p => p.id === productId);
//     localStorage.setItem('selectedProduct', JSON.stringify({ ...product, category }));
//     window.location.href = 'details.html';
// }

// document.addEventListener('DOMContentLoaded', function() {
//     displayProducts('All');
// });

    


