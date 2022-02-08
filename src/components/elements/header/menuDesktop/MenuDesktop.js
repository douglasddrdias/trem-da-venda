import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Button, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TrainIcon from '@mui/icons-material/Train';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from '@mui/material/Link';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';
import ItemGrid from '../../itemGridSemBorda/ItemGridSemBorda';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';

function MenuDesktop() {
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
      <Link href="/login">
        <Button
          key="Login"
          sx={{
            color: '#FFFEFE',
          }}
          startIcon={<AccountCircleOutlined />}
        >
          Login
        </Button>
      </Link>
      <AlteredIconButton options={{ href: '/carrinho' }} posicao="end">
        <ShoppingCartOutlinedIcon />
      </AlteredIconButton>
    </div>
  );
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} align="center" alignItems="center">
          <Grid item xs={8}>
            <DrawerCategorias />
            <Link href="/">
              <Button
                sx={{
                  color: '#FFFEFE',
                }}
                key="trem"
                startIcon={<TrainIcon />}
                size="large"
              >
                {tremDaVendaLogo}
              </Button>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <ItemGrid>{getMenuButtons()}</ItemGrid>
          </Grid>
        </Grid>
      </Box>

    </Toolbar>
  );
}

export default MenuDesktop;
