import produce from 'immer';
import { mockListProdutos } from '../../utils/Utils';
import { FETCH_PRODUTOS_LOADING, FETCH_PRODUTOS_SUCCESS, FETCH_PRODUTOS_ERROR } from '../actions/ProdutosActions';

const initialState = {
  produtos: mockListProdutos(),
  loading: true,
  error: false,
};

export default function ProdutosReducer(state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_PRODUTOS_LOADING:
        draft.loading = true;
        draft.error = false;
        break;
      case FETCH_PRODUTOS_SUCCESS:
        draft.produtos = action.produtos;
        draft.loading = false;
        draft.error = false;
        break;
      case FETCH_PRODUTOS_ERROR:
        draft.produtos = action.produtos;
        draft.loading = false;
        draft.error = true;
        break;
      default:
    }
  });
}
