import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navibar from '../../components/elements/header/navibar/Navibar';
import AppRouter from '../../routes/AppRouter';

function App() {
  return (
    <Router>
      <Navibar />
      <AppRouter />
    </Router>
  );
}
export default App;
