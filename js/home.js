
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


// document.getElementById("homeLink").addEventListener("click", () => {
//     window.location.href = "home.html";
// });
// document.getElementById("productLink").addEventListener("click", () => {
//     window.location.href = "product.html";
// });
// document.getElementById("logoutLink").addEventListener("click", () => {
//     window.location.href = "login.html";
// });
// document.getElementById("cartLink").addEventListener("click", () => {
//     window.location.href = "cart.html";
// });

// var img = document.getElementById("img1");
// var i=1;
// function next(){
// 	if(i==2)
// 	i=0;
// 	img.setAttribute("src",`./images/${++i}.jpg`)
	
// }

// function back(){
// 	if(i==1)
// 	i=3;
// 	img.setAttribute("src",`./images/${--i}.jpg`)
	
	
// }

// slider.js
let slideIndex = 0;
var autoplayDelay = 3000;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function next() {
    if(slideIndex==3){
        slideIndex=0;
    }
    
    showSlide(slideIndex + 1);
}

function back() {
    if(slideIndex==1){
        slideIndex=4;
    }
    
    showSlide(slideIndex - 1);
}

function startAutoplay() {
    autoplayInterval = setInterval(next, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(startAutoplay, 2000); // Restart autoplay after 5 seconds
}
document.addEventListener('DOMContentLoaded', () => {
    startAutoplay();
    document.querySelector('.nexto').addEventListener('click', () => {
        stopAutoplay();
        next();
    });
    document.querySelector('.prevo').addEventListener('click', () => {
        stopAutoplay();
        back();
    });
});
let scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    scrollTopButton.style.display = window.scrollY > 100 ? "block" : "none";
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// function autoPlay() {
//     next();
//     setTimeout(autoPlay, 3000); // Change slide every 3 seconds
// }

// document.addEventListener('DOMContentLoaded', () => {
//     autoPlay();
// });

// slider.js
// var img = document.getElementById("img");
// var i = 1;
// var totalImages = 3; // Total number of images

// function next() {
//     i++;
//     if (i > totalImages) {
//         i = 1;
//     }
//     img.setAttribute("src", `./images/${i}.avif`);
// }

// function back() {
//     i--;
//     if (i < 1) {
//         i = totalImages;
//     }
//     img.setAttribute("src", `./images/${i}.avif`);
// }

// function autoPlay() {
//     next();
//     setTimeout(autoPlay, 3000); // Change slide every 3 seconds
// }

// document.addEventListener('DOMContentLoaded', () => {
//     autoPlay();
// });
