import {
  Box, Grid, Paper, Skeleton,
} from '@mui/material';
import ComplementoProduto from '../complementoProduto/ComplementoProduto';
import DivImg from '../divImg/DivImg';
import CardMediaBase from '../cardMediaBase/CardMediaBase';

function DetalheProduto({ loading, produto }) {
  const detalharProduto = () => (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ paddingTop: '24px;' }}>
        <Grid container>
          <Grid item sm={4}>
            {loading ? (<Skeleton variant="rect" height={200} width="80%" animation="wave" />) : (
              <DivImg>
                <CardMediaBase image={produto.image} component="img" />
              </DivImg>
            )}
          </Grid>
          <Grid item sm={8}>
            <ComplementoProduto produto={produto} loading={loading} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );

  return detalharProduto();
}

export default DetalheProduto;
