import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const Titulo = styled((props) => (
  <Typography variant="h3" component="h2" {...props} />
))(() => ({
  position: 'relative',
  margin: '2rem 0',

  fontSize: 'clamp(1rem, 5vw, 3rem)',
  lineHeight: '1',
  fontFamily: 'Roboto, Work Sans, sans-serif',
  fontWeight: 600,
  color: '#FFFEFE',
}));

export default Titulo;
