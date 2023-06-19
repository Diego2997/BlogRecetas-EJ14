import React from 'react';
import { Carousel,Container,Row } from 'react-bootstrap';
import CardRecetas from './Recetas/CardRecetas';

const Inicio = () => {
    return (
        <>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block carrusel"
          src="https://www.paulinacocina.net/wp-content/uploads/2023/04/red-velvet-800x533.jpg"
          alt="Red Velvet"
        />
        <Carousel.Caption className='text-black bg-light bg-opacity-50'>
          <h3>Red Velvet</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carrusel"
          src="https://www.paulinacocina.net/wp-content/uploads/2023/03/pizza-casera-800x450.jpg"
          alt="Pizza"
        />

        <Carousel.Caption className='text-black bg-light bg-opacity-50'>
          <h3>Pizza</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carrusel"
          src="https://www.paulinacocina.net/wp-content/uploads/2022/05/receta-tarta-de-queso-al-horno-800x532.jpg"
          alt="Tarta De Queso"
        />

        <Carousel.Caption className='text-black bg-light bg-opacity-50'>
          <h3>Tarta De Queso</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Container>
        <h1 className="display-4">Recetas</h1>
        <hr />
        <Row>
            <CardRecetas></CardRecetas>
            <CardRecetas></CardRecetas>
            <CardRecetas></CardRecetas>
        </Row>
      </Container>
        </>
    );
};

export default Inicio;