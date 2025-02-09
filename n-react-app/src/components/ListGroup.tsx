import { Fragment } from "react/jsx-runtime"; // Importamos fragmentos para poder usar varias etiquetas HTML. <> </> Para usar FRAGMENTOS
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Event HANDLER
  const handleClick = (event: MouseEvent) => console.log(event);

  // FUNCION MAP: Por cada ITEM dentro de ITEMS, añade el item en un <li>. Para poder añadirlo en el HTML, lo ponemos entre { }
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
