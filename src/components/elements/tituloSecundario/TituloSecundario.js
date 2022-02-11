import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const TituloSecundario = styled((props) => <Typography {...props} />)(() => ({
  position: 'relative',
  fontSize: 'clamp(1rem, 10vw, 2rem)',
  color: '#333',
  lineHeight: '1',
}));

export default TituloSecundario;
