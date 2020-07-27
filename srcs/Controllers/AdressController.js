class AdressController {
    
    constructor() {
        throw new Error("This class does not support object instancing.")
    }

    static fetchZipCode(url) {
        let userAdress = document.querySelector("#userAdress");
        let zipCodeRequest = new XMLHttpRequest();
        zipCodeRequest.open("GET", url);

        zipCodeRequest.addEventListener("load", ()=>{
            if(zipCodeRequest.status == 200){
                let reqObj = JSON.parse(zipCodeRequest.responseText);
                let adress = new AdressModel(reqObj.cep, reqObj.logradouro, reqObj.complemento, reqObj.bairro, reqObj.localidade, reqObj.uf);
                userAdress.innerHTML = AdressView.templateView(adress.returnAdress());
            }
        });

        zipCodeRequest.send();

    }
}



