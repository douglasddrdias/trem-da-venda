import React, { useEffect, useState } from 'react';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar, Button, Drawer, IconButton, Link, MenuItem, Toolbar, Typography,
} from '@mui/material';

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const femmecubatorLogo = (
    <Typography
      variant="h6"
      component="h1"
      sx={{
        fontFamily: 'Work Sans, sans-serif',
        fontWeight: 600,
        color: '#FFFEFE',
        textAlign: 'left',
      }}
    >
      Femmecubator
    </Typography>
  );

  useEffect(() => {
    const setResponsiveness = () => (window.innerWidth < 900
      ? setState((prevState) => ({ ...prevState, mobileView: true }))
      : setState((prevState) => ({ ...prevState, mobileView: false })));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  const getMenuButtons = () => (
    <Button key="Login" color="inherit" href="/login" startIcon={<AccountCircleOutlined />}>
      Login
    </Button>
  );

  const displayDesktop = () => (
    <Toolbar>
      {femmecubatorLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const getDrawerChoices = () => (
    <Link
      to="login"
      color="inherit"
      sx={{ textDecoration: 'none' }}
      key="loginDrawer"
    >
      <MenuItem>login</MenuItem>
    </Link>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div sx={{ padding: '20px 30px' }}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

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
