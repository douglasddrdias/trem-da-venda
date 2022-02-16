import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import TrainIcon from '@mui/icons-material/Train';
import SeachInput from '../../searchInput/SearchInput';
import BtnCarrinho from '../../btnCarinho/BtnCarrinho';
import AlteredIconButton from '../../alteredIconButton/AlteredIconButton';
import DivEnd from '../../divEnd/DivEnd';

function MenuDesktop({
  mobile,
  quantidadeProdutosCarrinho,
  onClickCarrinho = () => {},
  onClickTrem = () => {},
  onClickLogin = () => {},
  menuDinamico,
}) {
  const tremDaVendaLogo = (
    <Typography
      variant="h6"
      component="h1"
      color="#FFFEFE"
    >
      TREM DA VENDA
    </Typography>
  );
  const getMenuButtons = () => (
    <DivEnd>
      <AlteredIconButton onUpdate={onClickLogin}>
        <AccountCircleOutlined />
        {!mobile && (
        <Typography
          variant="h6"
          component="h1"
          color="#FFFEFE"
        >
          Login
        </Typography>
        )}
      </AlteredIconButton>
      <BtnCarrinho
        quantidadeProdutosCarrinho={quantidadeProdutosCarrinho}
        onClickCarrinho={onClickCarrinho}
      />
    </DivEnd>
  );
  return (
    <Toolbar sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    >
      <Grid container spacing={1} justifyContent="space-evenly" alignItems="center">
        <Grid item sm={1}>
          {menuDinamico}
        </Grid>
        <Grid item lg={3} sm={2} xs={1}>
          <AlteredIconButton size="large" onUpdate={onClickTrem}>
            <TrainIcon />
            {!mobile && (tremDaVendaLogo)}
          </AlteredIconButton>
        </Grid>
        <Grid item md={5} sm={6} xs={7}>
          <SeachInput />
        </Grid>
        <Grid item xs={3}>
          {getMenuButtons()}
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default MenuDesktop;
