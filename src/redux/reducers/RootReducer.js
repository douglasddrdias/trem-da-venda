// import React from 'react';
import { combineReducers } from 'redux';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore, persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import CategoriasReducer from './CategoriasReducer';
import ProdutosReducer from './ProdutosReducer';
import CarrinhoReducer from './CarrinhoReducer';

const RootReducer = combineReducers({
  categoriaReducer: CategoriasReducer,
  produtoReducer: ProdutosReducer,
  carrinhoReducer: CarrinhoReducer,
});
const persistConfig = {
  key: 'trem-da-venda',
  storage,
  whitelist: ['carrinhoReducer'],
};
const pReducer = persistReducer(persistConfig, RootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
const persistor = persistStore(store);
export { persistor, store };
