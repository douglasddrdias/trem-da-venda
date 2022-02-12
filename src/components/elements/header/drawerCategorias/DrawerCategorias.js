import {
  Divider,
  Drawer,
  IconButton, MenuItem, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import DivEnd from '../../divEnd/DivEnd';
import { GetCategoriasProdutos } from '../../../../services/produtosApi/ProdutosApi';
import { fetchCategorias } from '../../../../redux/actions/CategoriasActions';

function DrawerCategorias() {
  const [aberto, setAberto] = useState(false);
  const categorias = useSelector((state) => state.categorias.categorias);
  const dispatch = useDispatch();
  const isMounted = useRef(true);

  async function getCategorias() {
    if (isMounted.current && categorias.length === 0) {
      const { data } = await GetCategoriasProdutos();
      dispatch(fetchCategorias(data));
    }
  }
  const navigate = useNavigate();
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
    setAberto(false);
  };
  const handleDrawerOpen = () => {
    setAberto(true);
  };

  const clicarEmCategoria = (categoria) => {
    handleDrawerClose();
    navigate(`/${categoria}`);
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
              <MenuItem onClick={() => { clicarEmCategoria(item); }} key={`menuCat${item}`}>{item}</MenuItem>
            ))
        }
        </div>
      </Drawer>
    </>
  );
}

export default DrawerCategorias;
