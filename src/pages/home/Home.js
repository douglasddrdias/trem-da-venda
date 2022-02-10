import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
// import { useState, useEffect, useRef } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduto from '../../components/elements/cardProduto/CardProduto';
import { fetchProdutos } from '../../utils/ProdutoUtils';

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
    Produtos
  </Typography>
);
function Home() {
  const isMounted = useRef(true);
  const produtos = useSelector((state) => state.produtoReducer.produtos);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();

  const getCardProdutos = async () => {
    if (isMounted.current) {
      fetchProdutos(dispatch);
    }
  };
  useEffect(() => {
    getCardProdutos();
    return () => {
      isMounted.current = false;
    };
  }, [loading]);
  return (
    <Container maxWidth="lg">
      {produtosLogo}
      <Grid container>
        <Grid
          spacing={4}
          container
        >
          {produtos && produtos.length > 0 && produtos.map((item) => (
            <CardProduto produto={item} loading={loading} key={`cardProd${item.id}`} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
