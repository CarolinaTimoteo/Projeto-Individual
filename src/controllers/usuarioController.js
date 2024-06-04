var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        //Envia o e-mail e a senha e valida se tem ou não este e-mail e senha no banco de dados
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function quiz(req, res) {
    var resposta1 = req.body.resposta1Server;
    var resposta2 = req.body.resposta2Server;
    var resposta3 = req.body.resposta3Server;
    var resposta4 = req.body.resposta4Server;
    var Id = req.body.IdServer;



    if (resposta1 == undefined) {
        res.status(400).send("Sua resposta está undefined!");
    } else if (resposta2 == undefined) {
        res.status(400).send("Sua resposta  está indefinida!");
    } else if (resposta3 == undefined) {
        res.status(400).send("Sua resposta está indefinida!");
    } else if (resposta4 == undefined) {
        res.status(400).send("Sua resposta está indefinida!");
    } else if (Id == undefined) {
        res.status(400).send("Sua resposta está indefinida!");
    } else {

        usuarioModel.quiz(resposta1, resposta2, resposta3, resposta4, Id)
            .then(
                function () {
                    res.status(200).json();
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function capturarQTD(req, res) {
    var usuarioId = req.query.Id

    if (usuarioId == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        usuarioModel.capturarQTD(usuarioId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar pegar a quantidade de respostas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    quiz,
    capturarQTD
}