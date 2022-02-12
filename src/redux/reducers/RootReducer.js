import { combineReducers } from 'redux';
import CarrinhoReducer from './CarrinhoReducer';
import CategoriasReducer from './CategoriasReducer';
import ProdutosReducer from './ProdutosReducer';

const RootReducer = combineReducers({
  categoriaReducer: CategoriasReducer,
  produtoReducer: ProdutosReducer,
  carrinhoReducer: CarrinhoReducer,
});

export default RootReducer;
