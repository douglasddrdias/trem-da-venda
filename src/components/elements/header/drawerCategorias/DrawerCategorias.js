import {
  Divider,
  Drawer,
  IconButton, Link, MenuItem, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef } from 'react';
import DivEnd from '../../divEnd/DivEnd';
import { GetCategoriasProdutos } from '../../../../services/produtosApi/ProdutosApi';
import { fetchCategorias } from '../../../../redux/actions/CategoriasActions';
import { DRAWERCLOSE, DRAWEROPEN } from '../../../../redux/actions/MenuMobileActions';

function DrawerCategorias() {
  const aberto = useSelector((state) => state.menuMobile.aberto);
  const categorias = useSelector((state) => state.categorias.categorias);
  const dispatch = useDispatch();
  const isMounted = useRef(true);

  async function getCategorias() {
    const { data } = await GetCategoriasProdutos();
    if (isMounted.current && categorias.length === 0) {
      dispatch(fetchCategorias(data));
    }
  }
  useEffect(() => {
    getCategorias();
    return () => {
      isMounted.current = false;
    };
  }, []);

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
      Categorias
    </Typography>
  );

  const drawerWidth = 240;

  const handleDrawerClose = () => {
    dispatch({ type: DRAWERCLOSE });
  };
  const handleDrawerOpen = () => {
    dispatch({ type: DRAWEROPEN });
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
        <DrawerHeader className="background-green">
          {textCategorias}
          <DivEnd>
            <IconButton
              sx={{ color: '#FFFEFE' }}
              {...{
                edge: 'end',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                onClick: handleDrawerClose,
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DivEnd>
        </DrawerHeader>
        <Divider />
        <div sx={{ padding: '20px 30px' }}>{
            categorias.length > 0 && categorias.map((item) => (
              <Link
                href={`/${item}`}
                color="inherit"
                sx={{ textDecoration: 'none' }}
                key={`drawer${item}`}
              >
                <MenuItem>{item}</MenuItem>
              </Link>
            ))
        }
        </div>
      </Drawer>
    </>
  );
}

export default DrawerCategorias;
