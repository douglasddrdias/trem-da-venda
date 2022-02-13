import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import ListaCarrinho from '../../components/elements/listaCarrinho/ListaCarrinho';

function Carrinho() {
  const carrinho = useSelector((state) => state.carrinhoReducer.Cart);
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
      {carrinho.length > 0 ? (<ListaCarrinho />) : (
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
