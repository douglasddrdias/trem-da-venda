import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function CardProduto({ produto }) {
  return (
    <Grid item xs={12} sm={6} md={3} alignItems="center">
      <Card sx={{ maxWidth: 340, height: 340 }}>
        <CardActionArea sx={{ width: '100%' }}>
          <CardMedia
            sx={{ width: '50%', height: '50%' }}
            component="img"
            image={produto.image}
            alt={produto.title}
          />
          <CardContent>
            <Typography gutterBottom variant="body2" component="div">
              {produto.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {produto.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
