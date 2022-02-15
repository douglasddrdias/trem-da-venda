import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/elements/footer/Footer';
import Header from '../../components/elements/header/Header';
import AppRouter from '../../routes/AppRouter';

function App() {
  const quantidade = useSelector((state) => state.carrinhoReducer.Cart.length);
  const navigate = useNavigate();
  const verCarrinho = () => {
    navigate('/carrinho');
  };
  const verHome = () => {
    navigate('/');
  };
  const logar = () => {
    navigate('/login');
  };
  return (
    <div>
      <main>
        <Header
          quantidadeProdutosCarrinho={quantidade}
          onClickCarrinho={() => { verCarrinho(); }}
          onClickTrem={() => { verHome(); }}
          onClickLogin={() => { logar(); }}
        />
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
export default App;
