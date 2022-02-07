import { combineReducers } from 'redux';
import CategoriasReducer from './CategoriasReducer';
import MenuMobileReducer from './MenuMobileReducer';

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  menuMobile: MenuMobileReducer,
});

export default RootReducer;
