import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { GetProdutos } from '../../services/produtosApi/ProdutosApi';
import CardProduto from '../../components/elements/cardProduto/CardProduto';

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
  const [cardsProdutos, setCardsProdutos] = useState([]);

  const getCardProdutos = async () => {
    const { data } = await GetProdutos();
    setCardsProdutos(data);
  };
  useEffect(() => {
    getCardProdutos();
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (
    <Container maxWidth="xl">
      {produtosLogo}
      <Grid container align="center" alignItems="center">
        <Grid
          spacing={4}
          container
          direction="row"
        >
          {cardsProdutos.length > 0 && cardsProdutos.map((item) => (
            <CardProduto produto={item} key={`cardProd${item.id}`} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Home;
