class EnderecoView{
    constructor(){
        throw new Error ('Não precisa ser instanciado')
    }
    static templateView(adress){
        return `<div class="form-group">
                    <label for="inputLogradouro">Logradouro</label>
                    <input type="text" class="form-control" id="inputLogradouro" placeholder="Logradouro" value="${adress.logradouro}">
                </div>
                <div class="form-group">
                    <label for="inputComplemento">Complemento</label>
                    <input type="text" class="form-control" id="inputComplemento" placeholder="Complemento" value="${adress.complemento}">
                </div>
                <div class="form-group">
                    <label for="inputBairro">Bairro</label>
                    <input type="text" class="form-control" id="inputBairro" placeholder="Bairro" value="${adress.bairro}">
                </div>
                <div class="form-group">
                    <label for="inputLocalidade">Localidade</label>
                    <input type="text" class="form-control" id="inputLocalidade" placeholder="Localidade" value="${adress.localidade}">
                </div>
                <div class="form-group">
                    <label for="inputUf">Uf</label>
                    <input type="text" class="form-control" id="inputUf" placeholder="Uf" value="${adress.uf}">
                </div>
        `
    }
}