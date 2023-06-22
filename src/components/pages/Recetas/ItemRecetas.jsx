import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemRecetas = ({receta}) => {
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>{receta.ingredientes}</td>
      <td className="truncar">
      {receta.imagen}
      </td>
      <td>{receta.categoria}</td>
      <td >
        <div className="d-flex">
        <Link to={"/administrador/editar-receta/"+receta.id} className="btn btn-success mx-1">
          <i className="bi bi-pencil-fill"></i>
        </Link>
        <Button className="mx-1" variant="danger">
          <i class="bi bi-x-circle"></i>
        </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemRecetas;
