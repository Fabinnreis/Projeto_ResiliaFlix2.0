class EnderecoModel{
    constructor(cep, logradouro, complemento, bairro, localidade, uf){
        this._cep = cep;
        this._logradouro = logradouro;
        this._complemento = complemento;
        this._bairro = bairro;
        this._localidade = localidade;
        this._uf = uf;
    }

    retornaEndereco(){
        return{
            cep: this._cep,
            logradouro: this._logradouro, 
            complemento: this._complemento, 
            bairro: this._bairro,
            localidade: this._localidade,
            uf: this._uf
        }
    }
}