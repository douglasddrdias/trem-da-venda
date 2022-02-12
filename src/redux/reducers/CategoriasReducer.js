import produce from 'immer';
import { ADDCATEGORIAS } from '../actions/CategoriasActions';

const initialState = {
  categorias: [],
};

export default function CategoriasReducer(state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADDCATEGORIAS:
        draft.categorias = action.categorias;
        break;
      default:
    }
  });
}
