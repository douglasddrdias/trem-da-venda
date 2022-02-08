import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/elements/header/Header';
import AppRouter from '../../routes/AppRouter';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}
export default App;
