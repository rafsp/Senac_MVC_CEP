const repo = require('../repositories/produto.repository');
const cepClient = require('../utils/cepClient');
const estoqueClient = require('../utils/estoqueService');

exports.cadastrarProduto = async ({ nome, preco, cep }) => {
  const endereco = await cepClient.buscarEndereco(cep);
  const produto = { nome, preco, cep, endereco };
  repo.salvar(produto);
  return produto;
};

exports.listarProdutos = () => {
  const produtos = repo.listar();
  return produtos.map(p => ({
    ...p,
    estoque: estoqueClient.consultarEstoqueSimulado(p.nome)
  }));
};