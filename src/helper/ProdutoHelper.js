import { fetchProdutosError, fetchProdutosLoading, fetchProdutosSuccess } from '../redux/actions/ProdutosActions';
import { GetProdutoPorId, GetProdutos, GetProdutosPorCategoria } from '../services/produtosApi/ProdutosApi';

export const fetchProdutos = async (dispatch, categoria) => {
  try {
    dispatch(fetchProdutosLoading());
    let produtos = [];
    if (!categoria) {
      produtos = await GetProdutos();
    } else {
      produtos = await GetProdutosPorCategoria(categoria);
    }
    dispatch(fetchProdutosSuccess(produtos.data));
  } catch (e) {
    dispatch(fetchProdutosError(e));
  }
};

export const fetchProduto = async (dispatch, id) => {
  try {
    dispatch(fetchProdutosLoading());
    const { data } = await GetProdutoPorId(id);
    dispatch(fetchProdutosSuccess([data]));
  } catch (e) {
    dispatch(fetchProdutosError(e));
  }
};
// export const fetchProduto = async (id) => {
//   try {
//     const { data } = await GetProdutoPorId(id);
//     return data;
//   } catch (e) {
//     // dispatch(fetchProdutosError(e));
//   }
//   return [];
// };
