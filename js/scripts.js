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

if(!validatePassword(passwordInput.value, 8)){
    alert("A senha precisa de no mínimo 8 dígitos.");
    return;
}

if(jobSelect.value === ""){
    alert("Por favor selecione a sua situação.");
    return;
}

if(messageTextarea.value === ""){
    alert("Por favor escreva uma mensagem.");
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