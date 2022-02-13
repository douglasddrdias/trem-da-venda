import {
  Divider, Grid, Paper, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { fomatarValorEmReal } from '../../../utils/Utils';
import Btn from '../button/Button';
import TituloSecundario from '../tituloSecundario/TituloSecundario';

function ResumoPedido() {
  const carrinho = useSelector((state) => state.carrinhoReducer);
  const qtdeProd = carrinho.Cart.length;
  const finalizarPedido = () => {

  };
  return (
    <Grid container>
      <Paper sx={{ width: '100%', paddingTop: '10%', paddingBottom: '10%' }}>
        <TituloSecundario
          component="h1"
        >Resumo pedido
        </TituloSecundario>
        <Divider sx={{ marginTop: '20px', marginBottom: '20px', width: '100%' }} />
        <Grid container>
          <Grid item xs={6}>
            <Typography>{qtdeProd > 1 ? (`${qtdeProd} Produtos`) : (`${qtdeProd} Produto`)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TituloSecundario component="h2">
              {fomatarValorEmReal(carrinho.value)}
            </TituloSecundario>
          </Grid>
        </Grid>
        <Grid sm={12} align="center" sx={{ marginTop: '10%' }}>
          <Btn
            align="center"
            onClick={() => { finalizarPedido(); }}
          >
            Finalizar o pedido
          </Btn>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ResumoPedido;
