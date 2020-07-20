class EnderecoView{
    constructor(){
        throw new Error ('Não precisa ser instanciado')
    }
    templateView(){
        return `
        <!--Informações de endereço-->
        <div id="infoEndereco">
        <!--Campo de endereço-->
        <div class="form-group">
        <label for="inputCep">Cep</label>
        <input type="text" class="form-control" id="inputCep" placeholder="Cep">
        </div><br><br>
        <div class="form-group">
        <label for="inputLogradouro">Logradouro</label>
        <input type="text" class="form-control" id="inputLogradouro" placeholder="Logradouro">
        </div>
        <div class="form-group">
        <label for="inputComplemento">Complemento</label>
        <input type="text" class="form-control" id="inputComplemento" placeholder="Complemento">
        </div>
        <div class="form-group">
        <label for="inputBairro">Bairro</label>
        <input type="text" class="form-control" id="inputBairro" placeholder="Bairro">
        </div>
        <div class="form-group">
        <label for="inputLocalidade">Localidade</label>
        <input type="text" class="form-control" id="inputLocalidade" placeholder="Localidade">
        </div>
        <div class="form-group">
        <label for="inputUf">Uf</label>
        <input type="text" class="form-control" id="inputUf" placeholder="Uf">
        </div>
        </div>
        `
    }
}