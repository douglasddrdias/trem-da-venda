import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import ListaCarrinho from '../../components/elements/listaCarrinho/ListaCarrinho';

function Carrinho() {
  const produtosCarrinho = useSelector((state) => state.carrinhoReducer.Cart);
  const carrinho = useSelector((state) => state.carrinhoReducer);
  const qtdeProd = carrinho.Cart.length;
  const finalizarPedido = () => {
    console.log('Finalizar pedido');
  };
  return (
    <ContainerPricipal>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: 'Roboto, Work Sans, sans-serif',
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        Meu carrinho de compras
      </Typography>
      {produtosCarrinho.length > 0 ? (
        <ListaCarrinho
          onFinalizarPedido={() => { finalizarPedido(); }}
          qtdeProd={qtdeProd}
          valorCarrinho={carrinho.value}
          produtosCarrinho={produtosCarrinho}
        />
      ) : (
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: 'Roboto, Work Sans, sans-serif',
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          O carrinho está vazio :/
          <br />
          Os produtos que desejar comprar aparecerão aqui.
        </Typography>
      )}
    </ContainerPricipal>
  );
}
export default Carrinho;
