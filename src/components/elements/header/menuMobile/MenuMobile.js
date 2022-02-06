import {
  IconButton, Toolbar,
} from '@mui/material';

import TrainIcon from '@mui/icons-material/Train';
import React from 'react';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import DivEnd from '../../divEnd/DivEnd';

function MenuMobile() {
  return (

    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <DrawerCategorias />
      <IconButton
        href="/"
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
        }}
      >
        <TrainIcon />
      </IconButton>
      <DivEnd>
        <IconButton
          href="/login"
          {...{
            edge: 'end',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
          }}
        >
          <AccountCircleOutlined />
        </IconButton>
        <IconButton
          href="/carrinho"
          {...{
            edge: 'end',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
          }}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </DivEnd>
    </Toolbar>
  );
}

export default MenuMobile;
