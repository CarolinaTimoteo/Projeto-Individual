// sessão
function validarSessao() {
    var usuarioLogado = validaUsuarioLogado()
    var b_usuario = document.getElementById("b_usuario");

    if (usuarioLogado == true) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function validaUsuarioLogado() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    if (email == null || nome == null) {
        return false
    }
    else {
        return true
    }
}

function exibirMenu() {
    var usuarioLogado = validaUsuarioLogado()
    if (usuarioLogado == false) {
       let link_dash = document.getElementById("link_dashboard")
       link_dash.style.display = "none"
    }

}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

