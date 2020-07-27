class AdressView{
    constructor(){
        throw new Error ('No need to be instantiated')
    }
    static templateView(adressObj){
        return `<div class="form-group">
                    <label for="inputAdress">Adress</label>
                    <input type="text" class="form-control" id="inputAdress" placeholder="Adress" value="${adressObj.adress}">
                </div>
                <div class="form-group">
                    <label for="inputComplement">Complement</label>
                    <input type="text" class="form-control" id="inputComplement" placeholder="Complement" value="${adressObj.complement}">
                </div>
                <div class="form-group">
                    <label for="inputDistrict">District</label>
                    <input type="text" class="form-control" id="inputDistrict" placeholder="District" value="${adressObj.district}">
                </div>
                <div class="form-group">
                    <label for="inputLocality">Locality</label>
                    <input type="text" class="form-control" id="inputLocality" placeholder="Locality" value="${adressObj.locality}">
                </div>
                <div class="form-group">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState" placeholder="State" value="${adressObj.state}">
                </div>
        `
    }
}