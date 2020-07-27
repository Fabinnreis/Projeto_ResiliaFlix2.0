let email = document.querySelector("#registerUser").elements[2];
let validateEmail = document.querySelector("#registerUser").elements[3];
let password = document.querySelector("#registerUser").elements[10];
let validatePassword = document.querySelector("#registerUser").elements[11];
let submitButton = document.querySelector("#registerUser").elements[13];
let zipCodeField = document.querySelector("#inputZipCode");
let form = document.querySelector("#registerUser");
let blocker = document.querySelector("#blocker");
let fecthButton = document.querySelector("#btnSearch");
let divForm = document.querySelector("#userRegister");

let validacep = /^[0-9]{8}$/;


bootstrapValidate('#inputName', 'alpha:You can only input alphabetic characters');
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