import { useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  // state hook permite modificar variables dentro de un componente funcional
  // index es la variable que vamos a utilizar y setIndex la función para actualizar el valor de index
  const [index, setIndex] = useState(1);
  const handleClick = (i: number) => {
    setIndex(i);
    console.log(i);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i)}
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
