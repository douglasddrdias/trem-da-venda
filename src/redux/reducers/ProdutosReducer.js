import { FETCH_PRODUTOS_LOADING, FETCH_PRODUTOS_SUCCESS, FETCH_PRODUTOS_ERROR } from '../actions/ProdutosActions';

const initialState = {
  produtos: [],
  loading: false,
  error: false,
};

export default function ProdutosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PRODUTOS_LOADING:
      return {
        loading: true,
        error: false,
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
      };
    default: {
      return state;
    }
  }
}
