import axios from 'axios';

export const ProdutosApi = axios.create({
  baseURL: process.env.REACT_APP_ROOT_PRODUTOS_APP_API,
});
export async function GetCategoriasProdutos() {
  return ProdutosApi.get(process.env.REACT_APP_CATEGORIAS_APP_API);
}
export async function GetProdutos() {
  return ProdutosApi.get(process.env.REACT_APP_PRODUTOS_APP_API);
}
export async function GetProdutosPorCategoria(categoria) {
  return ProdutosApi.get(process.env.REACT_APP_CATEGORIAS_PRODUTOS_APP_API + categoria);
}
export async function GetProdutoPorId(id) {
  return ProdutosApi.get(`${process.env.REACT_APP_PRODUTOS_APP_API}/${id}`);
}
