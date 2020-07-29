let $ = document.querySelector.bind(document);
let nameUser = $("#registerUser").elements[0];
let idUser = $("#registerUser").elements[1];
let email = $("#registerUser").elements[2];
let validateEmail = $("#registerUser").elements[3];
let password = $("#registerUser").elements[10];
let validatePassword = $("#registerUser").elements[11];
let submitButton = $("#registerUser").elements[13];
let zipCodeField = $("#inputZipCode");
let form = $("#registerUser");
let blocker = $("#blocker");
let fecthButton = $("#btnSearch");
let divForm = $("#userRegister");
let btnRegisterSubmit = $("#btnRegisterSubmit");

let validacep = /^[0-9]{8}$/;


bootstrapValidate('#inputName', 'regex:^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,8}$:Enter a valid name');
bootstrapValidate('#inputId', 'numeric:Please only enter numeric characters!');
bootstrapValidate('#inputId', 'min:9:Enter at least 9 characters!');
bootstrapValidate('#inputEmail', 'email:Enter a valid E-Mail Address!');
bootstrapValidate('#inputConfirmEmail', 'matches:#inputEmail:Your e-mails should match');
bootstrapValidate('#inputPassword', 'min:8:Enter at least 8 characters!');
bootstrapValidate('#retypePassword', 'matches:#inputPassword:Your passwords should match');
bootstrapValidate('#inputAdress', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputDistrict', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputLocality', 'alpha:You can only input alphabetic characters');
bootstrapValidate('#inputState', 'alpha:You can only input alphabetic characters');


zipCodeField.addEventListener("change",function(){
    if((zipCodeField.value.length > 7) && (validacep.test(zipCodeField.value))){
        let url = `https://viacep.com.br//ws/${zipCodeField.value}/json/`;
        AdressController.fetchZipCode(url);
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

btnRegisterSubmit.addEventListener("click", function(event){
    if((nameUser.value == "") || (idUser.value == "") || ( email.value == "") || (password.value == "") || (zipCodeField.value == "")){
        event.preventDefault();
        alert("Make sure to fill all fields")
    } else{
        alert('Register successful');
    }
})