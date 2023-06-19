import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'

function App() {

  return (
    <>
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
