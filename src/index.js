import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import getLocalStorage from './helper/getLocalEstorage';
import App from './pages/app/App';
// import localStorage from './redux/reducers/localStorage.middleware';
// import store from './redux/reducers/RootReducer';
// import { store, persistor } from './redux/reducers/RootReducer';
import { store, persistor } from './redux/reducers/RootReducer';
import { GlobalStyle } from './styles/GlobalStyle';

console.log('getLocalStorage', getLocalStorage('trem-da-venda'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
