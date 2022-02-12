import {
  Box, Grid, Paper, Rating, Skeleton, Typography,
} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ComplementoProduto from '../complementoProduto/ComplementoProduto';
import DivImg from '../divImg/DivImg';
import CardMediaBase from '../cardMediaBase/CardMediaBase';
import { fomatarValorEmReal } from '../../../utils/Utils';
import Btn from '../button/Button';
import CarrinhoAction from '../../../redux/actions/CarrinhoAction';
import ModalMensagem from '../modalMensagem/ModalMensagem';

function DetalheProduto({ loading, produto }) {
  const cart = useSelector((state) => state.carrinhoReducer.value);
  const dispatch = useDispatch();
  const [mensagemCarrinho, setMensagemCarrinho] = useState('');
  const addProdutoCarrinho = () => {
    const mensagemSucesso = 'Produto adicionado com sucesso!';
    dispatch(CarrinhoAction.Add(cart, produto));
    if (mensagemCarrinho) {
      setMensagemCarrinho('');
      setTimeout(() => {
        setMensagemCarrinho(mensagemSucesso);
      }, 400);
    } else {
      setMensagemCarrinho(mensagemSucesso);
    }
  };
  const detalharDadosProduto = () => (
    <Grid container>
      <Grid item sm={12} xs={12} align="center">
        <Rating name="read-only" value={produto.rating.rate} readOnly />
      </Grid>
      <Grid item sm={12} xs={12}>
        <DivImg>
          <CardMediaBase image={produto.image} component="img" />
        </DivImg>
      </Grid>
      <Grid container alignItems="center">
        <Grid item sm={6} xs={12} align="center">
          <Typography variant="dashed" size="large">
            {fomatarValorEmReal(produto.price)}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} align="center">
          <Btn
            startIcon={<AddShoppingCartOutlinedIcon />}
            onClick={() => { addProdutoCarrinho(); }}
          >
            Comprar
          </Btn>
        </Grid>
      </Grid>
      <ModalMensagem mensagem={mensagemCarrinho} tipo="success" exibirIcone />
    </Grid>
  );
  const detalharProdutoCarregando = () => (

    <Grid container alignItems="center">
      <Grid item sm={12} xs={12} align="center" sx={{ marginBottom: '2%' }}>
        <Skeleton variant="rectangular" height={30} width="80%" animation="wave" />
      </Grid>
      <Grid item sm={12} xs={12} align="center">
        <Skeleton variant="rect" height={180} width="80%" animation="wave" />
      </Grid>
      <Grid container alignItems="center" sx={{ paddingTop: '24px;' }}>
        <Grid item sm={6} xs={12} align="center" sx={{ marginBottom: '2%' }}>
          <Skeleton variant="rectangular" height={40} width="80%" animation="wave" />
        </Grid>
        <Grid item sm={6} xs={12} align="center">
          <Skeleton variant="rectangular" height={40} width="80%" animation="wave" />
        </Grid>
      </Grid>
    </Grid>
  );
  const detalharProduto = () => (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ padding: '24px;' }}>
        <Grid container justifyContent="space-evenly">
          <Grid item md={4} sm={6} xs={12}>
            {loading ? (detalharProdutoCarregando()) : (detalharDadosProduto()
            )}
          </Grid>
          <Grid item md={8} sm={6} xs={12}>
            <ComplementoProduto produto={produto} loading={loading} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );

  return detalharProduto();
}

export default DetalheProduto;
