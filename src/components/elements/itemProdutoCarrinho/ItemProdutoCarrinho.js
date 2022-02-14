// import {
//   Divider, Grid, Paper, Typography,
// } from '@mui/material';
import {
  Divider, Grid, Typography,
} from '@mui/material';
import { fomatarValorEmReal } from '../../../utils/Utils';
import BtnCounterCarrinho from '../btnConterCarrinho/BtnConterCarrinho';
import CardMediaBase from '../cardMediaBase/CardMediaBase';
import DivImg from '../divImg/DivImg';

function ItemProdutoCarrinho({
  produto, onClicarEmProduto = () => {}, onDown = () => {}, onUp = () => {},
}) {
  return (
    <Grid container justifyContent="center" alignItems="center" align="center">
      <Divider sx={{ marginTop: '20px', marginBottom: '20px', width: '100%' }} />
      <Grid item md={5} sm={6} xs={12}>
        <DivImg alturadiv="160px">
          <CardMediaBase image={produto.image} component="img" onClick={onClicarEmProduto} className="mouse-hover" />
        </DivImg>
      </Grid>
      <Grid item md={5} sm={6} xs={12}>
        <Grid gridRow>
          <Typography variant="dashed" size="large" onClick={onClicarEmProduto} className="mouse-hover">
            {produto.title}
          </Typography>
        </Grid>
        <Grid gridRow>
          <Typography>{`${produto.quantity}X ${fomatarValorEmReal(produto.price)}`}</Typography>
        </Grid>
      </Grid>
      <Grid item md={2} sm={12} xs={12}>
        <BtnCounterCarrinho produto={produto} onUp={onUp} onDown={onDown} />
      </Grid>
    </Grid>
  );
}

export default ItemProdutoCarrinho;
