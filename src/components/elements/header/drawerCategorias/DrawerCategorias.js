import {
  Divider,
  Drawer,
  IconButton, Link, MenuItem, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import DivEnd from '../../divEnd/DivEnd';

function DrawerCategorias() {
  const aberto = useSelector((state) => state.aberto);
  const dispatch = useDispatch();
  const getDrawerChoices = () => (
    <Link
      href="login"
      color="inherit"
      sx={{ textDecoration: 'none' }}
      key="loginDrawer"
    >
      <MenuItem>login</MenuItem>
    </Link>

  );
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(64, 205, 40)',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

  }));

  const textCategorias = (
    <Typography
      variant="h6"
      component="h1"
      {...{ edge: 'start' }}
      sx={{
        fontFamily: 'Roboto, Work Sans, sans-serif',
        fontWeight: 600,
        color: '#FFFEFE',
      }}
    >
      Categorias
    </Typography>
  );

  const drawerWidth = 240;

  const handleDrawerClose = () => {
    dispatch({ type: 'DRAWERCLOSE' });
  };
  const handleDrawerOpen = () => {
    dispatch({ type: 'DRAWEROPEN' });
  };
  return (
    <>
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
          open: aberto,
          onClose: handleDrawerClose,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <DrawerHeader>
          {textCategorias}
          <DivEnd>
            <IconButton
              sx={{ color: '#FFFEFE' }}
              {...{
                edge: 'end',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: handleDrawerClose,
                alignSelf: 'flex-end',
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DivEnd>
        </DrawerHeader>
        <Divider />
        <div sx={{ padding: '20px 30px' }}>{getDrawerChoices()}</div>
      </Drawer>
    </>
  );
}

export default DrawerCategorias;
