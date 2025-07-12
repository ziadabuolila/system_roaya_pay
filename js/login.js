const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
// --- loader login ---
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
            document.getElementById("content").style.display = "block";
            document.body.style.overflow = "auto";
        }, 500);
    }, 1850);
});