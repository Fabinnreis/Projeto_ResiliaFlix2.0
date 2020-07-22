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
let fecthButton = document.querySelector("#fecthButton");
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
submitButton.addEventListener("click", function(){
    let counter = 0;
    for(let i=0; i< form.length;i++){
        if((!form[i].classList.contains("is-invalid")) && (form[i].value != "")){
            counter++;
        }
    }
    
    if(counter >= 13){
        
        setTimeout(function(){
            form.classList.add("slide-out-bck-center");
        },300);

        setTimeout(function(){
            divForm.removeChild(form);
            let thanksMsg = document.createElement("p");
            thanksMsg.innerText = "Thank you for registering! Enjoy our services!";
            thanksMsg.classList.add("thanksMsg");
            thanksMsg.classList.add("scale-in-center");
            divForm.appendChild(thanksMsg);
        },1300);

        setTimeout(function(){
            blocker.classList.add("fade-out");
        },4000);
        

        setTimeout(function(){
            document.querySelector("#catalog").removeChild(blocker);
            fecthButton.classList.remove("btn-outline-danger");
            fecthButton.classList.add("btn-outline-success");
            fecthButton.disabled = false;
        },7000);
        
        
    }
    console.log(counter);
    counter = 0;
});

