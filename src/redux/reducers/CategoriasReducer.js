import { ADDCATEGORIAS } from '../actions/CategoriasActions';

const initialState = {
  categorias: [],
};

export default function CategoriasReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADDCATEGORIAS:
      return {
        categorias: [...action.categorias],
      };
    default: {
      return state;
    }
  }
}
