import { Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import ItemProdutoCarrinho from '../../components/elements/itemProdutoCarrinho/ItemProdutoCarrinho';
import ModalMensagem from '../../components/elements/modalMensagem/ModalMensagem';
import ResumoPedido from '../../components/elements/resumoPedido/ResumoPedido';
import TituloSecundario from '../../components/elements/tituloSecundario/TituloSecundario';
import CarrinhoAction from '../../redux/actions/CarrinhoAction';

function Carrinho() {
  const produtosCarrinho = useSelector((state) => state.carrinhoReducer.Cart);
  const carrinho = useSelector((state) => state.carrinhoReducer);
  const qtdeProd = carrinho.Cart.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mensagemCarrinho, setMensagemCarrinho] = useState('');
  // const [tipoMensagem, setTipoMensagem] = useState('success');
  const mensagemSucesso = 'Compra finalizada com sucesso!';
  const atualizaModalMensagem = (mensagem) => {
    setMensagemCarrinho('');
    setTimeout(() => {
      setMensagemCarrinho(mensagem);
    }, 400);
  };
  function down(produto) {
    if (produto.quantity <= 1) {
      dispatch(CarrinhoAction.DeleteItem(produtosCarrinho, produto));
    }
    if (produto.quantity > 0) {
      dispatch(CarrinhoAction.RemoveItem(produtosCarrinho, produto));
    }
  }
  function up(produto) {
    dispatch(CarrinhoAction.AddItem(produtosCarrinho, produto));
  }
  const finalizarPedido = () => {
    dispatch(CarrinhoAction.ChangeCart());
    atualizaModalMensagem(mensagemSucesso);
  };

  const clicarEmProduto = (produto) => {
    navigate(`/produto/${produto.id}`);
  };

  const listaCarrinho = () => (
    <Grid container justifyContent="space-evenly" spacing={2}>
      <Grid item md={8} sm={6} xs={12} marginBottom="5%">
        <Grid container justifyContent="space-evenly">
          <Paper sx={{ width: '100%', paddingTop: '10%' }}>
            <Grid item sm={12} xs={12}>
              <TituloSecundario>Produtos</TituloSecundario>
            </Grid>
            <Grid item sm={12} xs={12}>
              {produtosCarrinho.map((item) => (
                <ItemProdutoCarrinho
                  produto={item}
                  key={`itemProduto${item.id}`}
                  onDown={() => { down(item); }}
                  onUp={() => { up(item); }}
                  onClicarEmProduto={() => { clicarEmProduto(item); }}
                />
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
        <ResumoPedido
          onFinalizarPedido={() => { finalizarPedido(); }}
          qtdeProd={qtdeProd}
          valorCarrinho={carrinho.value}
        />
      </Grid>
    </Grid>
  );
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
      {produtosCarrinho.length > 0 ? (listaCarrinho()
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
      <ModalMensagem mensagem={mensagemCarrinho} tipo="success" />
    </ContainerPricipal>
  );
}
export default Carrinho;
