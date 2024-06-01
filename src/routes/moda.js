var express = require("express");
var router = express.Router();

var modaController = require("../controllers/modaController");

router.get("/obter-dados-quiz", function (req, res) {
    modaController.obterDadosQuiz(req, res);
});

module.exports = router;