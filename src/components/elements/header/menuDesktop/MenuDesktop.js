import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Button, Toolbar, Typography } from '@mui/material';
import DrawerCategorias from '../drawerCategorias/DrawerCategorias';

function MenuDesktop() {
  const femmecubatorLogo = (
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
      Femmecubator
    </Typography>
  );
  const getMenuButtons = () => (
    <Button key="Login" color="inherit" href="/login" startIcon={<AccountCircleOutlined />}>
      Login
    </Button>
  );
  return (
    <Toolbar>
      <DrawerCategorias />
      {femmecubatorLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );
}

export default MenuDesktop;
