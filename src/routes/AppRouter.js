import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Carrinho from '../pages/carrinho/Carrinho';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/:categoria"
        element={<Home />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default AppRouter;
