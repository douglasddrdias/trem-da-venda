import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Btn = styled(Button)(({ theme, branco = false, verde = true }) => ({
  backgroundColor: verde
    ? 'rgb(64, 205, 40)'
    : theme.backgroundColor,
  color: verde ? '#FFFEFE' : theme.color,

  fontWeight: 'bold',
  padding: '.5rem 1rem',

  ':hover': {
    backgroundColor:
    verde || branco ? '#FFFEFE' : theme.backgroundColor,
    color:
    verde || branco
      ? 'rgb(64, 205, 40)'
      : theme.color,
    boxShadow: `0 0 0 2px ${
      verde || branco
        ? 'rgb(64, 205, 40)'
        : 'inherit'
    }, 0 0 8px 2px ${
      verde || branco
        ? 'rgb(64, 205, 40)'
        : 'inherit'
    }`,
  },
}));

export default Btn;
