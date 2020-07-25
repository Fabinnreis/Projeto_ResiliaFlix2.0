class AdressView{
    constructor(){
        throw new Error ('Não precisa ser instanciado')
    }
    static templateView(adressObj){
        return `<div class="form-group">
                    <label for="inputLogradouro">Adress</label>
                    <input type="text" class="form-control" id="inputLogradouro" placeholder="Adress" value="${adressObj.adress}">
                </div>
                <div class="form-group">
                    <label for="inputComplemento">Complement</label>
                    <input type="text" class="form-control" id="inputComplemento" placeholder="Complement" value="${adressObj.complement}">
                </div>
                <div class="form-group">
                    <label for="inputBairro">District</label>
                    <input type="text" class="form-control" id="inputBairro" placeholder="District" value="${adressObj.district}">
                </div>
                <div class="form-group">
                    <label for="inputLocalidade">Locality</label>
                    <input type="text" class="form-control" id="inputLocalidade" placeholder="Locality" value="${adressObj.locality}">
                </div>
                <div class="form-group">
                    <label for="inputUf">State</label>
                    <input type="text" class="form-control" id="inputUf" placeholder="State" value="${adressObj.state}">
                </div>
        `
    }
}