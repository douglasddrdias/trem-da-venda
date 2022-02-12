import { styled as sysStyled } from '@mui/system';

const DivImg = sysStyled('div')(({ alturadiv = '200px' }) => ({
  height: alturadiv,
  display: 'flex',
  flexDirection: 'column',
}));

export default DivImg;
