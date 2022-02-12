import { Toolbar } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import React from 'react';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import DivEnd from '../../divEnd/DivEnd';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';
import SeachInput from '../../searchInput/SearchInput';
import BtnCarrinho from '../../btnCarinho/BtnCarrinho';

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
      <SeachInput />
      <DivEnd width="30%">
        <AlteredIconButton options={{ href: '/login' }}>
          <AccountCircleOutlined />
        </AlteredIconButton>
        <BtnCarrinho />
      </DivEnd>
    </Toolbar>
  );
}

export default MenuMobile;
