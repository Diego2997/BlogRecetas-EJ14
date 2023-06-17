import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Registro from './components/pages/Registo';
import Login from './components/pages/Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
