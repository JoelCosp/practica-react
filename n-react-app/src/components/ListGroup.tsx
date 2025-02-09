import { useState } from "react";
import { Fragment } from "react/jsx-runtime"; // Importamos fragmentos para poder usar varias etiquetas HTML. <> </> Para usar FRAGMENTOS

interface Props
{
  items: string[];
  heading: string;
  // (irem:s tring) => void
  onSelectedItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectedItem}: Props) {
   // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  heading = "";
  

  // FUNCION MAP: Por cada ITEM dentro de ITEMS, añade el item en un <li>. Para poder añadirlo en el HTML, lo ponemos entre { }
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onSelectedItem(item);
              }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
