import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../../components/elements/footer/Footer';
import Header from '../../components/elements/header/Header';
import AppRouter from '../../routes/AppRouter';

function App() {
  return (
    <div>
      <main>
        <Router>
          <Header />
          <AppRouter />
        </Router>
      </main>
      <Footer />
    </div>
  );
}
export default App;
