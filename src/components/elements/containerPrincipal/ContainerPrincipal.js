import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const ContainerPricipal = styled((props) => <Container {...props} maxWidth="lg" />)(() => ({
  minHeight: '100vh',
  margin: '48px auto',
  marginBottom: '6rem',
}));

export default ContainerPricipal;
