import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import SobreNos from './pages/SobreNos';
import CorpoEditorial from './pages/CorpoEditorial';
import NossosServicos from './pages/NossosServicos';
import EstanteVirtual from './pages/EstanteVirtual';
import CodigoDeEtica from './pages/CodigoDeEtica';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path='/corpo-editorial' element={<CorpoEditorial />} />
          <Route path='/nossos-servicos' element={<NossosServicos />} />
          <Route path='/estante-virtual' element={<EstanteVirtual />} />
          <Route path='/codigo-de-etica' element={<CodigoDeEtica />} />
          
        </Routes>
      </Router>
        
    </>
  )
}

export default App