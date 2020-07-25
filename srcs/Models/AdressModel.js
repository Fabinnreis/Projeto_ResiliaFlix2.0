class AdressModel{
    constructor(zipCode, adress, complement, district, locality, state){
        this._zipCode = zipCode;
        this._adress = adress;
        this._complement = complement;
        this._district = district;
        this._locality = locality;
        this._state = state;
    }

    returnAdress(){
        return{
            zipCode: this._zipCode,
            adress: this._adress, 
            complement: this._complement, 
            district: this._district,
            locality: this._locality,
            state: this._state
        }
    }
}