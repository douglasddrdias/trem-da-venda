import {
  Divider,
  Drawer,
  IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import DivEnd from '../../divEnd/DivEnd';

function MenuDinamico({
  tituloMenu = 'Categorias',
  itensMenu,
  aberto = false,
  onClickDrawerOpen = () => {},
  onClickDrawerClose = () => {},
}) {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
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
      {tituloMenu}
    </Typography>
  );

  const drawerWidth = 240;
  return (
    <>
      <IconButton
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: onClickDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        {...{
          anchor: 'left',
          open: aberto,
          onClose: onClickDrawerClose,
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
        <DrawerHeader className="background-green">
          {textCategorias}
          <DivEnd>
            <IconButton
              sx={{ color: '#FFFEFE' }}
              {...{
                edge: 'end',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: onClickDrawerClose,
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DivEnd>
        </DrawerHeader>
        <Divider />
        {itensMenu}
      </Drawer>
    </>
  );
}

export default MenuDinamico;
