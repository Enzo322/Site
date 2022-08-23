const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    ValidarInputs();
});

function ValidarInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmationValue = confirmation.value;

    if(usernameValue == ""){
        setErrorFor(username, "O nome de usuário é obrigatório!");

    }else{
        setSuccessFor(username);
        localStorage.setItem("Nome",usernameValue);
    }

    if(emailValue == ''){
        setErrorFor(email,"O email é obrigatório!");
    }else if(!ValidarEMail(emailValue)){
        setErrorFor(email,"Por Favor, insira um email válido.");
    }else{
        setSuccessFor(email);
        localStorage.setItem("Email",emailValue);
    }
    if(passwordValue == ''){
        setErrorFor(password,"A senha é obrigatória");
    }else if(passwordValue.length < 7){
        setErrorFor(password, "Mínimo de caractéres inválido!");

    }else{
        setSuccessFor(password);
        localStorage.setItem("Senha",passwordValue);
    }

    if(confirmationValue == ''){
        setErrorFor(confirmation,"A confirmação é obrigatória!");

    }else if(confirmationValue != passwordValue){
        setErrorFor(confirmation, "As senhas não conferem.");

    }else{
        setSuccessFor(confirmation);
        window.location.href="http://127.0.0.1:5500/index.html";
    }
    
}
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function ValidarEMail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}