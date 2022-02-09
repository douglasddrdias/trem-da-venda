import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AlteredIconButton from '../alteredIconButton/AlteredIconButton';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // verticalPadding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));
function SeachInput() {
  return (
    <StyledInputBase
      placeholder="Buscar…"
      endAdornment={(
        <InputAdornment position="start">
          <AlteredIconButton>
            <SearchIcon sx={{
              color: '#FFFEFE',
              position: 'absolute',
              marginLeft: '-8px',
            }}
            />
          </AlteredIconButton>
        </InputAdornment>
      )}
    />
  );
}
export default SeachInput;
