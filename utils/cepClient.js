const axios = require('axios');

exports.buscarEndereco = async cep => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const { data } = await axios.get(url);
  return data;
};