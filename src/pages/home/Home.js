import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import CardProduto from '../../components/elements/cardProduto/CardProduto';
import { fetchProdutos } from '../../helper/ProdutoHelper';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import { mockListProdutos } from '../../utils/Utils';

function Home() {
  const produtos = useSelector((state) => state.produtoReducer.produtos);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clicarEmProduto = (idProduto) => {
    navigate(`/produto/${idProduto}`);
  };
  const getCardsProdutos = (itens) => (itens.map((item) => (
    <CardProduto produto={item} loading={loading} key={`cardProd${item.id}`} onClicarEmProduto={() => { clicarEmProduto(item.id); }} />)));

  const { categoria } = useParams();
  const produtosLogo = (
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontFamily: 'Roboto, Work Sans, sans-serif',
        fontWeight: 600,
        textAlign: 'center',
      }}
    >
      {categoria ? `Produtos ${categoria}` : 'Produtos'}
    </Typography>
  );
  const getProdutos = useCallback(() => {
    fetchProdutos(dispatch, categoria);
  }, [dispatch, categoria]);
  useEffect(() => {
    getProdutos();
  }, [getProdutos]);
  return (
    <ContainerPricipal>
      {produtosLogo}
      <Grid container sx={{ marginTop: '20px' }}>
        <Grid
          spacing={4}
          container
        >
          {loading ? (getCardsProdutos(mockListProdutos())) : (getCardsProdutos(produtos))}
        </Grid>
      </Grid>
    </ContainerPricipal>
  );
}
export default Home;
