let email = document.querySelector("#cadastroUsu").elements[3];
let validateEmail = document.querySelector("#cadastroUsu").elements[4];
let password = document.querySelector("#cadastroUsu").elements[5];
let validatePassword = document.querySelector("#cadastroUsu").elements[6];
let zipCodeField = document.querySelector("#cadastroUsu").elements[7];
let submitButton = document.querySelector("#cadastroUsu").elements[13];

let validacep = /^[0-9]{8}$/;

zipCodeField.addEventListener("change",function(){
    if((zipCodeField.value.length > 7) && (validacep.test(zipCodeField.value))){
        let url = `https://viacep.com.br//ws/${zipCodeField.value}/json/`;
        EnderecoController.fetchZipCode(url);
    }
});

validatePassword.addEventListener("change", function(){
    if(password.value != validatePassword.value){
        password.value = "";
        validatePassword.value = "";
        password.focus();
    }
});

validateEmail.addEventListener("change", function(){
    if(email.value != validateEmail.value){
        email.value = "";
        validateEmail.value = "";
        email.focus();
    }
});

submitButton.addEventListener("click", function(){
});