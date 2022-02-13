import {
  Divider, Grid, Paper, Typography,
} from '@mui/material';
import { fomatarValorEmReal } from '../../../utils/Utils';
import Btn from '../button/Button';
import TituloSecundario from '../tituloSecundario/TituloSecundario';

function ResumoPedido({ qtdeProd, valorCarrinho, onFinalizarPedido = () => {} }) {
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
              {fomatarValorEmReal(valorCarrinho)}
            </TituloSecundario>
          </Grid>
        </Grid>
        <Grid align="center" sx={{ marginTop: '10%' }}>
          <Btn
            align="center"
            onClick={onFinalizarPedido}
          >
            Finalizar o pedido
          </Btn>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ResumoPedido;
