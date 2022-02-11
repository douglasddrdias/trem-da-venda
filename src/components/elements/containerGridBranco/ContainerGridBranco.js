import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const GridContainerBranco = styled((props) => <Grid {...props} container />)(() => ({
  backgroundColor: '#fff',
}));

export default GridContainerBranco;
