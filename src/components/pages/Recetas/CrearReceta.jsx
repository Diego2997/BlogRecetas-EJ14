import React from "react";
import { Form, Button } from "react-bootstrap";
import { crearReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (recetaNueva) => {
    console.log(recetaNuevaNuevo);

    crearReceta(recetaNueva).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Receta creada",
          `La receta ${recetaNueva.nombreReceta} fue creada correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `La receta ${recetaNueva.nombreReceta} no pudo ser creada, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva Receta</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Receta*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Flan" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPreparacion">
          <Form.Label>Preparacion</Form.Label>
          <Form.Control as="textarea" type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value:
                  /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/,
                message: "Por favor, ingresa una URL de imagen válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select 
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}>
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