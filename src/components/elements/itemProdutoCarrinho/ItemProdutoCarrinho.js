// import {
//   Divider, Grid, Paper, Typography,
// } from '@mui/material';
import {
  Divider, Grid, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fomatarValorEmReal } from '../../../utils/Utils';
import BtnCounterCarrinho from '../btnConterCarrinho/BtnConterCarrinho';
import CardMediaBase from '../cardMediaBase/CardMediaBase';
import DivImg from '../divImg/DivImg';
import CarrinhoAction from '../../../redux/actions/CarrinhoAction';

function ItemProdutoCarrinho({ produto }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.carrinhoReducer?.Cart);
  const clicarEmProduto = () => {
    navigate(`/produto/${produto.id}`);
  };
  function down() {
    if (produto.quantity <= 1) {
      dispatch(CarrinhoAction.DeleteItem(carrinho, produto));
    }
    if (produto.quantity > 0) {
      dispatch(CarrinhoAction.RemoveItem(carrinho, produto));
    }
  }
  function up() {
    dispatch(CarrinhoAction.AddItem(carrinho, produto));
  }
  return (
    <Grid container justifyContent="center" alignItems="center" align="center">
      <Divider sx={{ marginTop: '20px', marginBottom: '20px', width: '100%' }} />
      <Grid item md={5} sm={6} xs={12}>
        <DivImg alturadiv="160px">
          <CardMediaBase image={produto.image} component="img" onClick={() => { clicarEmProduto(); }} className="mouse-hover" />
        </DivImg>
      </Grid>
      <Grid item md={5} sm={6} xs={12}>
        <Grid gridRow>
          <Typography variant="dashed" size="large" onClick={() => { clicarEmProduto(); }} className="mouse-hover">
            {produto.title}
          </Typography>
        </Grid>
        <Grid gridRow>
          <Typography>{`${produto.quantity}X ${fomatarValorEmReal(produto.price)}`}</Typography>
        </Grid>
      </Grid>
      <Grid item md={2} sm={12} xs={12}>
        <BtnCounterCarrinho produto={produto} up={() => { up(); }} down={() => { down(); }} />
      </Grid>
    </Grid>
  );
}

export default ItemProdutoCarrinho;
