const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
event.preventDefault();

if (nameInput.value === ""){
    alert("Por favor preencha seu nome");
    return;
}

if (emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor preencha seu email");
    return;
}

form.submit();

});

function isEmailValid(email){
    const emailRegex = new RegExp (
        /^[a-aA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.text(email)){
        return true;
    }

    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    }

    return false
}