import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CardProduto from '../../components/elements/cardProduto/CardProduto';
import { fetchProdutos } from '../../helper/ProdutoHelper';
import { mockListProdutos } from '../../utils/Utils';

function Home() {
  const isMounted = useRef(true);
  const produtos = useSelector((state) => state.produtoReducer.produtos);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();
  const produtosMocados = mockListProdutos();
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
    return () => {
      isMounted.current = false;
    };
  }, [getProdutos]);
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        marginBottom: '6rem',
      }}
    >
      {produtosLogo}
      <Grid container sx={{ marginTop: '20px' }}>
        <Grid
          spacing={4}
          container
        >
          {loading ? getCardsProdutos(produtosMocados) : getCardsProdutos(produtos)}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
