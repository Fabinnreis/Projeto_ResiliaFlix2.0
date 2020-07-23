//let userRegister = document.querySelector('#userRegister');
//console.log(RegisterView.templateRegister);
//userRegister.innerHTML = RegisterView.templateRegister;
//console.log(userRegister);
let email = document.querySelector("#cadastroUsu").elements[3];
let validateEmail = document.querySelector("#cadastroUsu").elements[4];
let password = document.querySelector("#cadastroUsu").elements[5];
let validatePassword = document.querySelector("#cadastroUsu").elements[6];
let zipCodeField = document.querySelector("#cadastroUsu").elements[7];
let submitButton = document.querySelector("#cadastroUsu").elements[13];
let form = document.querySelector("#cadastroUsu");
let blocker = document.querySelector("#blocker");
let fecthButton = document.querySelector("#btnSearch");
let divForm = document.querySelector("#userRegister");

let validacep = /^[0-9]{8}$/;


bootstrapValidate('#inputNome', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputSobrenome', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputRg', 'numeric:Please only enter numeric characters!');
bootstrapValidate('#inputRg', 'min:9:Enter at least 9 characters!');
bootstrapValidate('#inputConfirmaEmail', 'matches:#inputEmail:Your e-mails should match');
bootstrapValidate('#inputPassword', 'min:8:Enter at least 8 characters!');
bootstrapValidate('#retypePassword', 'matches:#inputPassword:Your passwords should match');
bootstrapValidate('#inputLogradouro', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputBairro', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputLocalidade', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputUf', 'alpha:You can only input alphabetic characters');


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

//bootstrapValidate('#inputNome', 'required:É necessário informar um nome');

