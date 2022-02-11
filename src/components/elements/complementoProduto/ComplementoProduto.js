import { Skeleton, Typography } from '@mui/material';
import TituloSecundario from '../tituloSecundario/TituloSecundario';

function ComplementoProduto({ produto, loading }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {loading ? (<><Skeleton animation="wave" variant="text" width="80%" height={80} /><Skeleton animation="wave" variant="rectangular" width="80%" height={120} /></>) : (
        <>
          <TituloSecundario component="h2">
            {produto.title}
          </TituloSecundario>
          <Typography>{produto.description}</Typography>
        </>
      )}
    </div>
  );
}
export default ComplementoProduto;
