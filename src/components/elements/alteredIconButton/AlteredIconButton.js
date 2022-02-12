import {
  IconButton,
} from '@mui/material';

function AlteredIconButton({
  children, options, posicao = 'start', onUpdate = () => {},
}) {
  return (
    <IconButton
      onClick={onUpdate}
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
