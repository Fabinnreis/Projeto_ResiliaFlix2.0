class UsuarioModel{
    constructor(nome, email, senha, rg, endereco){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._rg = rg;
        this._endereco = endereco;
    }

    retornaUsuario(){
        return{
            nome: this._nome,
            email: this._email,
            senha: this._senha,
            rg: this._rg,
            endereco: this._endereco
        }
    }
}