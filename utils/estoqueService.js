exports.consultarEstoqueSimulado = nome => {
  return nome.toLowerCase().includes('mouse') ? 12 : 0;
};