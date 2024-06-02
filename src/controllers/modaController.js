var modaModel = require("../models/modaModel");

function obterDadosQuiz(req, res){

    modaModel.obterDadosQuiz().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro no banco de dados ao obter dados do quiz.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    obterDadosQuiz
}