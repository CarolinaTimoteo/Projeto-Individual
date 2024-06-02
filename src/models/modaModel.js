var database = require("../database/config")
function obterDadosQuiz() {
    
    var instrucaoSql = `WITH CTE_resposta1 AS (
        SELECT 'questao1' AS questao, resposta1 AS resposta_valor, COUNT(*) AS qnt
        FROM quiz
        GROUP BY resposta1
    ),
    CTE_resposta2 AS (
        SELECT 'questao2' AS questao,resposta2 AS resposta_valor, COUNT(*) AS qnt
        FROM quiz
        GROUP BY resposta2
    ),
    CTE_resposta3 AS (
        SELECT 'questao3' AS questao, resposta3 AS resposta_valor, COUNT(*) AS qnt
        FROM quiz
        GROUP BY resposta3
    ),
    CTE_resposta4 AS (
        SELECT 'questao4' AS questao, resposta4 AS resposta_valor, COUNT(*) AS qnt
        FROM quiz
        GROUP BY resposta4
    )
    SELECT * FROM CTE_resposta1
    UNION ALL
    SELECT * FROM CTE_resposta2
    UNION ALL
    SELECT * FROM CTE_resposta3
    UNION ALL
    SELECT * FROM CTE_resposta4;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    obterDadosQuiz
};