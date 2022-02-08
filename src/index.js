import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './pages/app/App';
import { GlobalStyle } from './styles/GlobalStyle';
import RootReducer from './redux/reducers/RootReducer';

const store = createStore(RootReducer);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
