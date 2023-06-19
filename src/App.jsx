import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/common/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      {/* AQUI VAN LAS RUTAS */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
