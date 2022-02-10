import { fetchProdutosError, fetchProdutosLoading, fetchProdutosSuccess } from '../redux/actions/ProdutosActions';
import { GetProdutos } from '../services/produtosApi/ProdutosApi';

export const fetchProdutos = async (dispatch) => {
  try {
    dispatch(fetchProdutosLoading());
    const { data } = await GetProdutos();
    dispatch(fetchProdutosSuccess(data));
  } catch (e) {
    dispatch(fetchProdutosError(e));
  }
};
