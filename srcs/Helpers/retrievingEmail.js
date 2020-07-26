let emailField = document.querySelector("#inputEmail4");
let msgUser = document.querySelector("#successErrorMsg");
let sendBtn = document.querySelector(".formWidth")[1];
let validating = /\S+@\S+\.\S+/;

sendBtn.addEventListener("click", (event)=>{

    if(validating.test(emailField.value)){
        event.preventDefault();
        msgUser.innerHTML = `Recovery e-mail sent to <br>${emailField.value}.<br>Check your mailbox.`;
        emailField.value = "";
    } else{
        event.preventDefault();
        msgUser.innerHTML = `Not a valid e-mail adress.`;
    }
    
});