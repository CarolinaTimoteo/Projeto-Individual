var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}
function quiz(resposta1, resposta2, resposta3, resposta4, Id) {
    var instrucaoSql = `
    insert into quiz values
(default, ${Id}, '${resposta1}', '${resposta2}', '${resposta3}', '${resposta4}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function capturarQTD(usuarioId) {
    var instrucaoSql = `
        SELECT 
            usuario.nome AS nome_usuario,
            COUNT(quiz.idResposta) AS vezes_respondido
        FROM 
            usuario
        LEFT JOIN 
            quiz ON usuario.id = quiz.FkUsuario
        WHERE
            usuario.id = ${usuarioId}
        GROUP BY 
            usuario.id, usuario.nome;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    quiz,
    capturarQTD
};