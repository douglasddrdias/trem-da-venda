import { mockListProdutos } from '../../utils/Utils';
import { FETCH_PRODUTOS_LOADING, FETCH_PRODUTOS_SUCCESS, FETCH_PRODUTOS_ERROR } from '../actions/ProdutosActions';

const initialState = {
  produtos: mockListProdutos(),
  loading: true,
  error: false,
};

export default function ProdutosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PRODUTOS_LOADING:
      return {
        loading: true,
        error: false,
        produtos: state.produtos,
      };
    case FETCH_PRODUTOS_SUCCESS:
      return {
        produtos: [...action.produtos],
        loading: false,
        error: false,
      };
    case FETCH_PRODUTOS_ERROR:
      return {
        loading: false,
        error: true,
        produtos: state.produtos,
      };
    default: {
      return state;
    }
  }
}
