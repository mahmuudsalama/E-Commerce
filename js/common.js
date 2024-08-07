// common.js
document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        updateUserName(storedName);
    }
});

function updateUserName(name) {
    const loginLink = document.getElementById('logoutLink');
    loginLink.textContent = `Hello, ${name}`;
    loginLink.href = 'profile.html'; 
}
