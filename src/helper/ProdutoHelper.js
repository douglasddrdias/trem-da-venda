import { fetchProdutosError, fetchProdutosLoading, fetchProdutosSuccess } from '../redux/actions/ProdutosActions';
import { GetProdutos, GetProdutosPorCategoria } from '../services/produtosApi/ProdutosApi';

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
