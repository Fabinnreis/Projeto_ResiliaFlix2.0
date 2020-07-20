class UsuarioView{
    constructor(){
        throw new Error ('Não precisa ser instanciado')
    }

   static templateUsuario(){
        return `
            <form id="cadastroUsu">
            <!--Informações pessoais-->
            <div id="infos">
            <!--Campo Nome-->
            <div class="form-group">
            <label for="inputNome">Nome</label>
            <input type="text" class="form-control" id="inputNome" placeholder="Nome">
            </div>
            <!--Campo sobrenome-->
            <div class="form-group">
            <label for="inputNome">Sobrenome</label>
            <input type="text" class="form-control" id="inputSobrenome" placeholder="Sobrenome">
            </div>
            <!--Campo de RG-->
            <div class="form-group">
            <label for="inputRg">RG</label>
            <input type="text" class="form-control" id="inputRg" placeholder="RG">
            </div>
            <!--Campo de email-->
            <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <!--Campo  confirmaçãode email-->
            <div class="form-group">
            <label for="inputConfirmaEmail">Confirm address</label>
            <input type="email" class="form-control" id="inputConfirmaEmail" aria-describedby="emailHelp" placeholder="Confirm email">
            </div>

            </div>
            <!--Informações de segurança-->
            <div id="infoSenha">
            <!--Campo de senha-->
            <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <!--Campo confirmação de senha-->
            <div class="form-group">
            <label for="retypePassword">Retype Password</label>
            <input type="password" class="form-control" id="retypePassword" placeholder="Password">
            </div>
            </div>
            <!--Botão de envio-->
            <div id ="btnCadastroForm"><button type="submit" class="btn btn-primary">Submit</button></div>
            </form>
        `
    }
}