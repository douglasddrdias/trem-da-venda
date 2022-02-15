import { AppBar } from '@mui/material';
import { useEffect, useState } from 'react';
import Menu from './menu/Menu';

function Header({
  quantidadeProdutosCarrinho,
  onClickCarrinho = () => {},
  onClickTrem = () => {},
  onClickLogin = () => {},
}) {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 1100
      ? setMobileView(true)
      : setMobileView(false));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return (
    <AppBar
      position="static"
      className="background-green"
      sx={{
        marginBottom: (theme) => theme.spacing(2),
      }}
    >
      <Menu
        mobile={mobileView}
        quantidadeProdutosCarrinho={quantidadeProdutosCarrinho}
        onClickCarrinho={onClickCarrinho}
        onClickTrem={onClickTrem}
        onClickLogin={onClickLogin}
      />
    </AppBar>
  );
}

export default Header;
