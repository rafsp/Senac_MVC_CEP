const service = require('../services/produto.service');

exports.cadastrar = async (req, res) => {
  try {
    const resultado = await service.cadastrarProduto(req.body);
    res.status(201).json(resultado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

exports.listar = (req, res) => {
  const lista = service.listarProdutos();
  res.status(200).json(lista);
};