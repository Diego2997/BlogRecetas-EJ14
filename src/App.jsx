import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Registro from './components/pages/Registo';
import Admin from './components/pages/Admin';
import Inicio from './components/pages/Inicio';
import Detalle from './components/pages/Detalle';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Login from './components/pages/Login'
import { useState } from 'react';

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {}
  const [usuarioLogueado,setUsuarioLogueado] = useState(usuario)

  return (
    <>
    <BrowserRouter>
    <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Registro></Registro>}></Route>
      <Route path='/detalle' element={<Detalle></Detalle>}></Route>
      <Route path='/administrador/*' element={<Admin></Admin>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App
