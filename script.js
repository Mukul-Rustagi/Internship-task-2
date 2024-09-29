const passwordEle = document.getElementById("password");
const showEle = document.getElementById("show-password");
const login = document.getElementById("login");
const form = document.getElementById("form");
showEle.addEventListener("click", () => {
    if (passwordEle.type == "password") {
        // console.log(passwordEle.type);
        passwordEle.type = "text";
        showEle.innerHTML = "Hide"
    } else {
        passwordEle.type = "password";
        showEle.innerHTML = "Show"

    }
})
login.addEventListener("click", () => {
    login.classList.add("login-ani-container")
    setTimeout(() => {
        login.classList.remove("login-ani-container");
    }, 3000)
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
})