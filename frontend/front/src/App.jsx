import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import SobreNos from './pages/SobreNos';
import CorpoEditorial from './pages/CorpoEditorial';
import NossosServicos from './pages/NossosServicos';
import EstanteVirtual from './pages/EstanteVirtual';
import CodigoDeEtica from './pages/CodigoDeEtica';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import PerguntasFrequentes from './pages/PerguntasFrequentes';

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
          <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade />} />
          <Route path='/perguntas-frequentes' element={<PerguntasFrequentes />} />
        </Routes>
      </Router>
        
    </>
  )
}

export default App