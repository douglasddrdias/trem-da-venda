import { Toolbar } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import React from 'react';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import DivEnd from '../../divEnd/DivEnd';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';
import SeachInput from '../../searchInput/SearchInput';
import BtnCarrinho from '../../btnCarinho/BtnCarrinho';

function MenuMobile() {
  const navigate = useNavigate();
  return (

    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <DrawerCategorias />
      <AlteredIconButton onUpdate={() => { navigate('/'); }}>
        <TrainIcon />
      </AlteredIconButton>
      <SeachInput />
      <DivEnd width="30%">
        <AlteredIconButton onUpdate={() => { navigate('/login'); }}>
          <AccountCircleOutlined />
        </AlteredIconButton>
        <BtnCarrinho />
      </DivEnd>
    </Toolbar>
  );
}

export default MenuMobile;
