import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const CardRecetas = () => {
    return (
        <Col md={4} ld={3} className="mb-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.paulinacocina.net/wp-content/uploads/2023/04/red-velvet-800x533.jpg"
          />
          <Card.Body>
            <Card.Title>Red velvet</Card.Title>
            <Card.Text>Prueba la deliciosa tarta Red Velvet, un postre que conquistará tu paladar con su sabor y textura.</Card.Text>
            <Button variant="primary">Ver detalle</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CardRecetas;