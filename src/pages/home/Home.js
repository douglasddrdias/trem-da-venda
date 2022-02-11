import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CardProduto from '../../components/elements/cardProduto/CardProduto';
import { fetchProdutos } from '../../helper/ProdutoHelper';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';

function Home() {
  const produtos = useSelector((state) => state.produtoReducer.produtos);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();
  const getCardsProdutos = (itens) => (itens.map((item) => (
    <CardProduto produto={item} loading={loading} key={`cardProd${item.id}`} />)));

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
  }, [dispatch]);
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
          {getCardsProdutos(produtos)}
        </Grid>
      </Grid>
    </ContainerPricipal>
  );
}
export default Home;
