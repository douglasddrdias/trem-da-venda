import { useEffect, useState } from 'react';
import { Alert, Slide, Snackbar } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
function ModalMensagem({
  tipo, mensagem, icone, exibirIcone = false,
}) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    mensagem ? setAberto(true) : setAberto(false);
  }, [mensagem]);

  const handleClose = () => {
    setAberto(false);
  };

  return (
    <Snackbar
      open={aberto}
      severity={tipo}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={TransitionDown}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        severity={tipo}
        variant="filled"
        icon={exibirIcone ? icone || <AddShoppingCartIcon fontSize="inherit" /> : ''}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
}

export default ModalMensagem;
