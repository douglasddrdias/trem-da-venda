import {
  Drawer,
  IconButton, Link, MenuItem, Toolbar,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function MenuMobile() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

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
          open: drawerOpen,
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
