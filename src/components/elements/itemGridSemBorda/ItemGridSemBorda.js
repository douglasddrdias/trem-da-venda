import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ItemGridSemBorda = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'rgb(64, 205, 40)',
  border: 'none',
  borderRadius: 'none',
  boxShadow: 'none',
  color: '#FFFEFE',
}));

export default ItemGridSemBorda;
