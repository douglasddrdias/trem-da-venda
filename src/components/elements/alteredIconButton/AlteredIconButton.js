import {
  Button,
} from '@mui/material';

function AlteredIconButton({
  children, options, posicao = 'start', onUpdate = () => {},
}) {
  return (
    <Button
      onClick={onUpdate}
      {... options}
      {...{
        edge: `${posicao}`,
        color: 'inherit',
        'aria-haspopup': 'true',
      }}
    >
      {children}
    </Button>
  );
}

export default AlteredIconButton;
