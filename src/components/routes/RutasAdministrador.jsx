import {Routes,Route} from 'react-router-dom'
import Admin from '../pages/Admin';
import CrearReceta from '../pages/Recetas/CrearReceta'

const RutasAdministrador = () => {
    return (
        <>
        <Routes>
            <Route exact path='/' element={<Admin></Admin>}></Route>
            <Route exact path='/crear-receta' element={<CrearReceta></CrearReceta>}></Route>
        </Routes>
        </>
    );
};

export default RutasAdministrador;