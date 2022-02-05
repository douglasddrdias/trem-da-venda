import { AppBar } from '@mui/material';
import { useEffect, useState } from 'react';
import MenuDesktop from './menuDesktop/MenuDesktop';
import MenuMobile from './menuMobile/MenuMobile';

function Header() {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setMobileView(true)
      : setMobileView(false));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => (
    <MenuDesktop />
  );
  const displayMobile = () => (
    <MenuMobile />
  );

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: (theme) => theme.spacing(2),
        backgroundColor: 'rgb(64, 205, 40)',
      }}
    >{mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

export default Header;
