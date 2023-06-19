import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Admin from './components/pages/Admin';
import CrearReceta from './components/pages/Recetas/CrearReceta';
import Inicio from './components/pages/Inicio';
import Detalle from './components/pages/Detalle';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
function App() {
  return (
    <>
    {/* <Admin></Admin> */}
    {/* <CrearReceta></CrearReceta> */}
{/* <Inicio></Inicio> */}
<Detalle></Detalle>
<Inicio></Inicio>
    <BrowserRouter>
    {/* <Menu></Menu> */}
      <Routes>
      {/* AQUI VAN LAS RUTAS */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
