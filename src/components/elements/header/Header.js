import { AppBar } from '@mui/material';
import { useEffect, useState } from 'react';
import MenuDesktop from './menu/Menu';

function Header() {
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
      <MenuDesktop mobile={mobileView} />
    </AppBar>
  );
}

export default Header;
