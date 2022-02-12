import { Badge, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function BtnCarrinho() {
  const quantidade = useSelector((state) => state.carrinhoReducer.Cart.length);
  const navigate = useNavigate();
  const verCarrinho = () => {
    navigate('/carrinho');
    console.log(quantidade);
  };
  return (
    <Button
      key="Carrinho"
      sx={{
        color: '#FFFEFE',
      }}
      startIcon={(
        <Badge badgeContent={quantidade} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
)}
      onClick={() => { verCarrinho(); }}
    />
  );
}

export default BtnCarrinho;
