

let username = document.getElementById("name");
let password = document.getElementById("password");
let email = document.getElementById("email");
let loginbtn = document.getElementById("loginbtn");
let valid = true;

let nameRegex = /^([a-zA-Z]{3,20}[ ]?)+$/;
let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{9,}$/;
let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

username.addEventListener("focus", (e) => {
    e.target.style.border = "2px solid blue";
});

username.addEventListener("input", (e) => {
    if (nameRegex.test(username.value.trim())) {
        e.target.style.border = "2px solid green";
        e.target.nextElementSibling.style.display = "none";
    } else {
        e.target.style.border = "2px solid red";
        e.target.nextElementSibling.style.display = "block";
        valid = false;
    }
});

email.addEventListener("focus", (e) => {
    e.target.style.border = "2px solid blue";
});

email.addEventListener("input", (e) => {
    if (emailregex.test(email.value.trim())) {
        e.target.style.border = "2px solid green";
        e.target.nextElementSibling.style.display = "none";
    } else {
        e.target.style.border = "2px solid red";
        e.target.nextElementSibling.style.display = "block";
        valid = false;
    }
});

password.addEventListener("focus", (e) => {
    e.target.style.border = "2px solid blue";
});

password.addEventListener("input", (e) => {
    if (passwordregex.test(password.value.trim())) {
        e.target.style.border = "2px solid green";
        e.target.nextElementSibling.style.display = "none";
    } else {
        e.target.style.border = "2px solid red";
        e.target.nextElementSibling.style.display = "block";
        valid = false;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        updateUserName(storedName);
    }
});

function submitForm(e) {
    e.preventDefault();
    valid = true;

    if (!nameRegex.test(username.value.trim())) {
        username.style.border = "2px solid red";
        username.nextElementSibling.style.display = "block";
        valid = false;
    }

    if (!emailregex.test(email.value.trim())) {
        email.style.border = "2px solid red";
        email.nextElementSibling.style.display = "block";
        valid = false;
    }

    if (!passwordregex.test(password.value.trim())) {
        password.style.border = "2px solid red";
        password.nextElementSibling.style.display = "block";
        valid = false;
    }

    if (valid) {
        localStorage.setItem('userName', username.value.trim());
        updateUserName(username.value.trim());
        window.location.href = "home.html";
    } else {
        document.getElementById("loginerror").style.display = "block";
    }

    return false;
}

function updateUserName(name) {
    const loginLink = document.getElementById('logoutLink');
    loginLink.textContent = `Hello, ${name}`;
    
}
