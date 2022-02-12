import { combineReducers } from 'redux';
import CarrinhoReducer from './CarrinhoReducer';
import CategoriasReducer from './CategoriasReducer';
import MenuMobileReducer from './MenuMobileReducer';
import ProdutosReducer from './ProdutosReducer';

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  menuMobile: MenuMobileReducer,
  produtoReducer: ProdutosReducer,
  carrinhoReducer: CarrinhoReducer,
});

export default RootReducer;
