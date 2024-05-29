function cadastrar(){

    const email = email_input.value
    const senha = senha_input.value
    const repetir_email = repetir_email_input.value
    const repetir_senha = repetir_senha_input.value
    const nome = nome_input.value
    
    
    if (nome == "" || email == "" || senha == "" || repetir_email == "" || repetir_senha == "") {
        exibirErro("Mensagem de erro para todos os campos em branco")
        finalizarAguardar();
        return false;
    }
    else if (email.indexOf("@") < 0) {
        alert("e-mail inválido, o e-mail deve conter @")
        finalizarAguardar();
        return false;
    }
    else if (/\d/.test(senha) == false) {
        alert("a senha deve conter pelo menos um numero")
        finalizarAguardar();
        return false;
    }
    else if (senha != repetir_senha) {
        alert("As senhas digitadas em senha e confirme a senha devem ser exatamente iguais.")
        finalizarAguardar();
        return false;
    }
    else if (senha.length > 8 || senha.length < 6) {
        alert("A senha precisa ter entre 6 e 8 caracteres")
    }
    else {
        // Executa uma função em milisegundos
        setInterval(sumirMensagem, 5000);
    }
    
    var body_json = JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
    
        email: email,
        confirme_email: repetir_email,
        senha: senha,
        confirme_senha: repetir_senha,
    });
    }