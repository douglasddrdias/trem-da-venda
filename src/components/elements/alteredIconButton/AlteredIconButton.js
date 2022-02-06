import {
  IconButton,
} from '@mui/material';

function AlteredIconButton({ children }) {
  return (
    <IconButton
      {...{
        edge: 'start',
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
