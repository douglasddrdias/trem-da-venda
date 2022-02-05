import {
  Drawer,
  IconButton, Link, MenuItem, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MenuMobile() {
  const aberto = useSelector((state) => state.aberto);
  const dispatch = useDispatch();
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

  const handleDrawerOpen = () => {
    dispatch({ type: 'DRAWEROPEN' });
  };

  const handleDrawerClose = () => {
    dispatch({ type: 'DRAWERCLOSE' });
  };

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
          open: aberto,
          onClose: handleDrawerClose,
        }}
      >
        <div sx={{ padding: '20px 30px' }}>{getDrawerChoices()}</div>
      </Drawer>

      <div>TextoPrincipal</div>
    </Toolbar>
  );
}

export default MenuMobile;
