import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import Fases from '../pages/Fases/fases';
import Nivelamento from '../pages/Nivelamento/nivelamento';
import Desafio from '../pages/Desafio/desafio';
import Recompensas from '../pages/Recompensas/recompensas';
import Inventario from '../pages/Inventario/inventario';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nivelamento" element={<Nivelamento />} />
        <Route path="/fases" element={<Fases />} />
        <Route path="/desafio" element={<Desafio />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;