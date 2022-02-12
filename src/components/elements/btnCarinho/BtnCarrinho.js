import { Button, Link } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';

function BtnCarrinho() {
  const carrinho = useSelector((state) => state.carrinhoReducer.Cart);
  const verCarrinho = () => {
    console.log(carrinho);
  };
  return (
    <Link href="/carrinho">
      <Button
        key="Carrinho"
        sx={{
          color: '#FFFEFE',
        }}
        startIcon={<ShoppingCartOutlinedIcon />}
        onClick={() => { verCarrinho(); }}
      />

    </Link>
  );
}

export default BtnCarrinho;
