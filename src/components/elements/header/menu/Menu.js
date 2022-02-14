import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TrainIcon from '@mui/icons-material/Train';
import { useNavigate } from 'react-router-dom';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import ItemGrid from '../../itemGridSemBorda/ItemGridSemBorda';
import SeachInput from '../../searchInput/SearchInput';
import BtnCarrinho from '../../btnCarinho/BtnCarrinho';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';
import DivEnd from '../../divEnd/DivEnd';

function MenuDesktop({ mobile }) {
  const navigate = useNavigate();
  const tremDaVendaLogo = (
    <Typography
      variant="h6"
      component="h1"
      color="#FFFEFE"
    >
      TREM DA VENDA
    </Typography>
  );
  const getMenuButtons = () => (
    <DivEnd>
      <AlteredIconButton onUpdate={() => { navigate('/login'); }}>
        <AccountCircleOutlined />
        {!mobile && (
        <Typography
          variant="h6"
          component="h1"
          color="#FFFEFE"
        >
          Login
        </Typography>
        )}
      </AlteredIconButton>
      <BtnCarrinho />
    </DivEnd>
  );
  return (
    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <Grid container spacing={1} justifyContent="space-evenly" alignItems="center">
        <Grid item sm={1}>
          <DrawerCategorias />
        </Grid>
        <Grid item lg={3} sm={2} xs={1}>
          <AlteredIconButton size="large" onUpdate={() => { navigate('/'); }}>
            <TrainIcon />
            {!mobile && (tremDaVendaLogo)}
          </AlteredIconButton>
        </Grid>
        <Grid item md={5} sm={6} xs={7}>
          <SeachInput />
        </Grid>
        <Grid item xs={3}>
          <ItemGrid>{getMenuButtons()}</ItemGrid>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default MenuDesktop;
