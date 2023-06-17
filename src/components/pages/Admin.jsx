import React from 'react';
import { Table, Button } from 'react-bootstrap';
import ItemRecetas from './Recetas/ItemRecetas';

const Admin = () => {
    return (
           <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Recetas disponibles</h1>
          <Button className="btn btn-info " to='/administrar/crear'>
          <i class="bi bi-plus-circle-fill"> Nueva Receta </i>
          </Button>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Receta</th>
              <th>ingredientes</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemRecetas></ItemRecetas>
          </tbody>
        </Table>
      </section>
    );
};

export default Admin;