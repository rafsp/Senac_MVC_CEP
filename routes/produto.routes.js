const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto.controller');

router.post('/', controller.cadastrar);
router.get('/', controller.listar);

module.exports = router;
