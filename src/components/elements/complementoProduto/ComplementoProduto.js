import { Grid, Skeleton, Typography } from '@mui/material';
import TituloSecundario from '../tituloSecundario/TituloSecundario';

function ComplementoProduto({ produto, loading }) {
  return (
    <div style={{ margin: '2rem' }}>
      {loading ? (
        <Grid container justifyContent="space-evenly" alignItems="center">
          <Skeleton animation="wave" variant="text" width="80%" height={80} aria-label="titleSkeleton" />
          <Skeleton animation="wave" variant="rectangular" width="80%" height={120} aria-label="describeSkeleton" />
        </Grid>
      ) : (
        <Grid container alignItems="center">
          <Grid item xs={12} align="center">
            <TituloSecundario component="h2">
              {produto.title}
            </TituloSecundario>
            <Typography>{produto.description}</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
export default ComplementoProduto;
