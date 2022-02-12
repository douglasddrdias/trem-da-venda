import { Grid, Paper } from '@mui/material';
// import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemProdutoCarrinho from '../itemProdutoCarrinho/ItemProdutoCarrinho';
import TituloSecundario from '../tituloSecundario/TituloSecundario';

function ListaCarrinho() {
  const carrinho = useSelector((state) => state.carrinhoReducer?.Cart);
  return (
    <Grid container justifyContent="space-evenly">
      <Grid item md={8} sm={6} xs={12}>
        <Grid container justifyContent="space-evenly">
          <Paper sx={{ width: '100%', paddingTop: '10%' }}>
            <Grid item sm={12} xs={12}>
              <TituloSecundario>Produtos</TituloSecundario>
            </Grid>
            <Grid item sm={12} xs={12}>
              {carrinho.map((item) => (<ItemProdutoCarrinho produto={item} key={`itemProduto${item.id}`} />))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <Grid container>
          <TituloSecundario>Resumo pedido</TituloSecundario>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ListaCarrinho;
