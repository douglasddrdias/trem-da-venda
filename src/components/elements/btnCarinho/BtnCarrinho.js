import { Badge, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function BtnCarrinho({ quantidadeProdutosCarrinho, onClickCarrinho = () => {} }) {
  return (
    <Button
      key="Carrinho"
      sx={{
        color: '#FFFEFE',
      }}
      startIcon={(
        <Badge badgeContent={quantidadeProdutosCarrinho} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
)}
      onClick={onClickCarrinho}
    />
  );
}

export default BtnCarrinho;
