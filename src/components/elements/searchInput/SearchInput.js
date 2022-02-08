import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AlteredIconButton from '../alteredIconButton/AlteredIconButton';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));
function SeachInput() {
  return (
    <Search>
      <StyledInputBase
        placeholder="Buscar…"
        endAdornment={(
          <InputAdornment position="end">
            <AlteredIconButton
              aria-label="toggle password visibility"
              edge="end"
            >
              <SearchIcon sx={{ color: '#FFFEFE' }} />
            </AlteredIconButton>
          </InputAdornment>
            )}
      />
    </Search>
  );
}
export default SeachInput;
