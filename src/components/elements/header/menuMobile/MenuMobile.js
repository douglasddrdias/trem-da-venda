import { InputBase, Toolbar } from '@mui/material';

import TrainIcon from '@mui/icons-material/Train';
import React from 'react';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import DivEnd from '../../divEnd/DivEnd';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

function MenuMobile() {
  return (

    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <DrawerCategorias />
      <AlteredIconButton options={{ href: '/' }}>
        <TrainIcon />
      </AlteredIconButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar…"
          inputProps={{ Roboto: 'buscar' }}
        />
      </Search>
      <DivEnd width="30%">
        <AlteredIconButton options={{ href: '/login' }}>
          <AccountCircleOutlined />
        </AlteredIconButton>
        <AlteredIconButton options={{ href: '/carrinho' }} posicao="end">
          <ShoppingCartOutlinedIcon />
        </AlteredIconButton>
      </DivEnd>
    </Toolbar>
  );
}

export default MenuMobile;
