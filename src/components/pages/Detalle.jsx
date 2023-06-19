import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Detalle = () => {
  return (
    <>
      <Container className="my-3 mainSection">
        <Card>
          <Row>
            <Col xl={8} md={12}>
              <Card.Img
              className="h-100 object-fit-cover"
                variant="top"
                src="https://www.paulinacocina.net/wp-content/uploads/2023/04/red-velvet-800x533.jpg"
              />
            </Col>
            <Col xl={4} md={12}>
              <Card.Body>
                <Card.Title className="display-6 text-danger">
                  Red velvet
                </Card.Title>
                <hr />
                <Card.Text>
                  <span className="text-danger fw-semibold ">
                    Ingredientes:
                  </span> 
                  250 gr de mantequilla sin sal,
                  330 gr de azúcar blanca,
                  10 gr de colorante alimentario rojo (en gel o pasta), 
                  2 huevos, 
                  1 cucharadita de esencia de vainilla natural,
                  375 gr de harina refinada y sin leudante,
                  35 gr de cacao amargo,
                  1 cucharadita de polvo para hornear 370 ml leche ácida,
                  1 cucharadita de bicarbonato,
                  15ml vinagre
                  <br />
                  <br />
                  <span className="text-danger fw-semibold ">
                    Categoria:
                  </span>{" "}
                  Postre
                 
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className="my-2">
          <Card.Header className="display-6 text-danger">Preparacion</Card.Header>
      <Card.Body>Precalentar el horno a 160°C.
Preparar 3 moldes de 20cm de diámetro y 3 cm de alto con papel manteca en la base.
Colocar la mantequilla en un bol y batir con batidora eléctrica hasta obtener una preparación cremosa.
Agregar el azúcar blanco y el colorante y batir hasta obtener un cremado.
Adicionar los huevos de a uno, batiendo después de cada adición. Agregar la esencia de vainilla. Integrar.
En otro bowl tamizar los secos: la harina y el polvo de hornear.
Adicionar los secos y leche ácida a la preparación intercalados. Integrar.
Añadir el bicarbonato al vinagre. Va a hacer efervescencia. Incorporar a la preparación.
Dividir la preparación y colocarla en las 3 tarteras.
Hornear por 25 minutos o hasta que al pincharlos con un palito éste salga limpio.
Dejar enfriar a temperatura ambiente. Reservar.</Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Detalle;
