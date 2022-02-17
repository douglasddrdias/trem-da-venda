import {
  Grid, List, ListItem, ListItemIcon, ListItemText, Paper,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import Titulo from '../titulo/Titulo';

function Footer() {
  return (
    <footer>
      <Paper className="background-green">
        <Grid container justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Titulo>Endereço</Titulo>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Rua Trem da venda, 255, bairro Vagão "
                  secondary="Sta Luzia, MG - CEP 33200-00"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Titulo>Contato</Titulo>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <WhatsappOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="(99) 99999-9999" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalPhoneOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="(99) 3333-9999" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="tremdavenda@gmail.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Titulo>Criado por</Titulo>
            <ListItem>
              <ListItemIcon>
                <PersonPinOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Douglas Dias da Rocha"
              />
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  );
}

export default Footer;
