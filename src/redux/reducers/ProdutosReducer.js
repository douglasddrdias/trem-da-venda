import { GETALLPRODUTOS } from '../actions/ProdutosActions';

const initialState = {
  produtos: [],
};

export default function ProdutosReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETALLPRODUTOS:
      return {
        produtos: [...action.produtos],
      };
    default: {
      return state;
    }
  }
}
