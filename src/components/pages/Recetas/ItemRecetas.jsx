import React from "react";
import { Button } from "react-bootstrap";

const ItemRecetas = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.ingredientes}</td>
      <td>
      {receta.imagen}
      </td>
      <td>{receta.categoria}</td>
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
