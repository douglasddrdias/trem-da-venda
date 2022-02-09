import { combineReducers } from 'redux';
import CategoriasReducer from './CategoriasReducer';
import MenuMobileReducer from './MenuMobileReducer';
// import ProdutosReducer from './ProdutosReducer';

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  menuMobile: MenuMobileReducer,
  // produtoReducer: ProdutosReducer,
});

export default RootReducer;
