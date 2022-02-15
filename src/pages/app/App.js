import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import Footer from '../../components/elements/footer/Footer';
import Header from '../../components/elements/header/Header';
import AppRouter from '../../routes/AppRouter';
import { GetCategoriasProdutos } from '../../services/produtosApi/ProdutosApi';
import { fetchCategorias } from '../../redux/actions/CategoriasActions';
import MenuDinamico from '../../components/elements/header/menuDinamico/MenuDinamico';

function App() {
  const quantidade = useSelector((state) => state.carrinhoReducer.Cart.length);
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categoriaReducer.categorias);
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const [aberto, setAberto] = useState(false);
  const handleDrawerClose = () => {
    setAberto(false);
  };
  const handleDrawerOpen = () => {
    setAberto(true);
  };

  const verCarrinho = () => {
    navigate('/carrinho');
  };
  const verHome = () => {
    navigate('/');
  };
  const logar = () => {
    navigate('/login');
  };

  const clicarEmCategoria = (categoria) => {
    setAberto(false);
    navigate(`/${categoria}`);
  };

  async function getCategorias() {
    if (isMounted.current && categorias.length === 0) {
      const { data } = await GetCategoriasProdutos();
      dispatch(fetchCategorias(data));
    }
  }
  useEffect(() => {
    getCategorias();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getItensMenu = () => (
    <div sx={{ padding: '20px 30px' }}>{
      categorias.length > 0 && categorias.map((item) => (
        <MenuItem onClick={() => { clicarEmCategoria(item); }} key={`menuCat${item}`}>{item}</MenuItem>
      ))
  }
    </div>
  );

  const getMenuDinamico = () => (
    <MenuDinamico
      itensMenu={getItensMenu()}
      onClickDrawerClose={() => { handleDrawerClose(); }}
      onClickDrawerOpen={() => { handleDrawerOpen(); }}
      aberto={aberto}
    />
  );
  return (
    <div>
      <main>
        <Header
          quantidadeProdutosCarrinho={quantidade}
          onClickCarrinho={() => { verCarrinho(); }}
          onClickTrem={() => { verHome(); }}
          onClickLogin={() => { logar(); }}
          menuDinamico={getMenuDinamico()}
        />
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
export default App;
