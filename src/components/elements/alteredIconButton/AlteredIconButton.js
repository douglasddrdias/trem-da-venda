import {
  IconButton,
} from '@mui/material';

function AlteredIconButton({ children, options, posicao = 'start' }) {
  return (
    <IconButton
      {... options}
      {...{
        edge: `${posicao}`,
        color: 'inherit',
        'aria-label': 'menu',
        'aria-haspopup': 'true',
      }}
    >
      {children}
    </IconButton>
  );
}

export default AlteredIconButton;
