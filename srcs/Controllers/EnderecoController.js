class EnderecoController {
    constructor(){
        throw new Error("This class can't instantiate new objects!")
    }

    static fetchZipCode(url) {
        let userAdress = document.querySelector("#userAdress");
        let zipCodeRequest = new XMLHttpRequest();
        zipCodeRequest.open("GET", url);

        zipCodeRequest.addEventListener("load", ()=>{
            if(zipCodeRequest.status == 200){
                let reqObj = JSON.parse(zipCodeRequest.responseText);
                let adress = new EnderecoModel(reqObj.cep, reqObj.logradouro, reqObj.complemento, reqObj.bairro, reqObj.localidade, reqObj.uf);
                userAdress.innerHTML = EnderecoView.templateView(adress.retornaEndereco());
            }
        });

        zipCodeRequest.send();

    }
}



