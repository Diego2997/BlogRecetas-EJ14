import React from "react";
import { Button } from "react-bootstrap";

const ItemRecetas = () => {
  return (
    <tr>
      <td>1</td>
      <td>FLAN CASERO</td>
      <td>5 huevos, 500cc. de leche, 200g de azúcar</td>
      <td>
        https://www.recetasderechupete.com/wp-content/uploads/2015/07/flan_de_huevo.jpg
      </td>
      <td>Postre</td>
      <td >
        <div className="d-flex">
        <Button className="btn btn-success mx-1">
          <i class="bi bi-pencil-fill"></i>
        </Button>
        <Button className="mx-1" variant="danger">
          <i class="bi bi-x-circle"></i>
        </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemRecetas;
