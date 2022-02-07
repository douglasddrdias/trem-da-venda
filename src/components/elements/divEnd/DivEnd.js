import { styled } from '@mui/material';

const DivEnd = styled('div')(({ theme, width = '100%' }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  width: `${width}`,
}));

export default DivEnd;
