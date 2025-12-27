import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  // state hook permite modificar variables dentro de un componente funcional
  // index es la variable que vamos a utilizar y setIndex la función para actualizar el valor de index
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
    console.log(i);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
      <li className="list-group-item">An item</li>
    </ul>
  );
}

export default List;
