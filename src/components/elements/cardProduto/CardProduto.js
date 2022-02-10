import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Rating } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { styled as sysStyled } from '@mui/system';
import { fomatarValorEmReal } from '../../../utils/Utils';

const CardMediaBase = styled(CardMedia)(() => ({
  width: 'auto',
  margin: 'auto',
  marginTop: 0,
  height: '70%',

}));
const CardBase = styled(Card)(() => ({
  margin: 'auto',
  maxWidth: '250px',
  height: '340px',
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

const DivImg = sysStyled('div')(() => ({
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
}));

export default function CardProduto({ produto, loading }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} align="center">
      <CardBase>
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
            <Typography gutterBottom variant="caption" component="div">
              {produto.title}
            </Typography>
            <Typography variant="dashed" size="large">
              {fomatarValorEmReal(produto.price)} {loading}
            </Typography>
          </CardContentBase>
        </CardActionArea>
      </CardBase>
    </Grid>
  );
}
