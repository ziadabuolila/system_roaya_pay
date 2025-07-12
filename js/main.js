const moreBtn = document.getElementById("moreBtn");
const menuMidBar = document.getElementById("menu_mid_bar");
moreBtn.addEventListener("click", () => {
menuMidBar.style.display =
    menuMidBar.style.display === "flex" ? "none" : "flex";
});
// -----
function showPasswordPrompt(event) {
    event.preventDefault();
    document.getElementById("passwordModal").style.display = "flex";
    document.getElementById("passwordInput").focus();
}
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    if (password === "051642" || password === "147258369") {
        window.location.href = "../system_roaya_pay/employee_salar.html";
    } else {
        errorMessage.textContent = "الكود الخاص بك خطأ، برجاء كتابة الكود الصحيح";
    }
}
document.getElementById("passwordModal").addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none";
        document.getElementById("passwordInput").value = "";
        document.getElementById("errorMessage").textContent = "";
    }
});