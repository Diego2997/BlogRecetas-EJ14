import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CrearReceta = () => {
    return (
        <section className="container mainSection">
        <h1 className="display-4 mt-5">Nueva Receta</h1>
        <hr />
        <Form >
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Flan"
            />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Preparacion</Form.Label>
            <Form.Control
            as="textarea"
              type="text"
              placeholder=""
            />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="text"
            />
         
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
        
            />
        
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Categoria*</Form.Label>
            <Form.Select
            >
              <option value="">Seleccione una opcion</option>
              <option value="Almuerzo">Almuerzo</option>
              <option value="Postres">Postres</option>
              <option value="Salsas">Salsas</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Ensaladas">Ensaladas</option>
            </Form.Select>
         
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </section>
    );
};

export default CrearReceta;