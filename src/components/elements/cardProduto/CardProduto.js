import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, CardHeader, Rating, Skeleton,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { fomatarValorEmReal } from '../../../utils/Utils';
import CardMediaBase from '../cardMediaBase/CardMediaBase';
import DivImg from '../divImg/DivImg';

const CardBase = styled(Card)(() => ({
  margin: 'auto',
  maxWidth: '250px',
  height: '340px',
  ':hover': {
    boxShadow: '0 0 7px 4px ',
  },
  ':visited:': {
    textDecoration: 'none',
  },
}));

const CardContentBase = styled(CardContent)(() => ({
  padding: '16px',
  paddingBottom: '24px',
  position: 'absolute',
  bottom: 0,
  width: '100%',
}));
const CardHeaderBase = styled(CardHeader)(() => ({
  padding: '16px',
  margin: 0,
  display: 'flex',
  position: 'absolute',
  top: 0,
  width: '100%',
}));

export default function CardProduto({ produto, loading }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} align="center">
      {loading ? (<Skeleton variant="rect" width={250} height={320} animation="wave" />) : (
        <CardBase>
          <Link to={`/produto/${produto.id}`}>
            <CardActionArea sx={{ width: '100%', height: '100%' }}>
              <CardHeaderBase
                avatar={
                  <Rating name="read-only" value={produto.rating.rate} readOnly />
            }
              />
              <DivImg>
                <CardMediaBase
                  image={produto.image}
                  component="img"
                />
              </DivImg>
              <CardContentBase>
                <Typography gutterBottom variant="caption" component="div" color="inherit">
                  {produto.title}
                </Typography>
                <Typography variant="dashed" size="large">
                  {fomatarValorEmReal(produto.price)}
                </Typography>
              </CardContentBase>
            </CardActionArea>
          </Link>
        </CardBase>
      )}
    </Grid>
  );
}
