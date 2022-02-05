import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Button, Toolbar, Typography } from '@mui/material';

function MenuDesktop() {
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
  const getMenuButtons = () => (
    <Button key="Login" color="inherit" href="/login" startIcon={<AccountCircleOutlined />}>
      Login
    </Button>
  );
  return (
    <Toolbar>
      {femmecubatorLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );
}

export default MenuDesktop;
