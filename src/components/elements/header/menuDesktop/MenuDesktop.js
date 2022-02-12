import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Button, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TrainIcon from '@mui/icons-material/Train';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import ItemGrid from '../../itemGridSemBorda/ItemGridSemBorda';
import SeachInput from '../../searchInput/SearchInput';

function MenuDesktop() {
  const navigate = useNavigate();
  const tremDaVendaLogo = (
    <Typography
      variant="h6"
      component="h1"
      sx={{
        fontFamily: 'Roboto, Work Sans, sans-serif',
        fontWeight: 600,
        color: '#FFFEFE',
        textAlign: 'left',
      }}
    >
      Trem da venda
    </Typography>
  );
  const getMenuButtons = () => (
    <div>
      <Button
        key="Login"
        onClick={() => { navigate('/login'); }}
        sx={{
          color: '#FFFEFE',
        }}
        startIcon={<AccountCircleOutlined />}
      >
        Login
      </Button>
      <Button
        key="Carrinho"
        onClick={() => { navigate('/carrinho'); }}
        sx={{
          color: '#FFFEFE',
        }}
        startIcon={<ShoppingCartOutlinedIcon />}
      />
    </div>
  );
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} align="center" alignItems="center">
          <Grid item sm={8}>
            <DrawerCategorias />
            <Button
              sx={{
                color: '#FFFEFE',
              }}
              key="trem"
              startIcon={<TrainIcon />}
              size="large"
              onClick={() => { navigate('/'); }}
            >
              {tremDaVendaLogo}
            </Button>
            <SeachInput />
          </Grid>
          <Grid item sm={4}>
            <ItemGrid>{getMenuButtons()}</ItemGrid>
          </Grid>
        </Grid>
      </Box>

    </Toolbar>
  );
}

export default MenuDesktop;
