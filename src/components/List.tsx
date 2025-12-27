type Props = {
  data: string[];
};

function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    <ul className="list-group">
      {data.map((elemento) => (
        // <li onClick={handleClick} key={elemento} className="list-group-item">
        <li
          onClick={() => handleClick(elemento)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
      <li className="list-group-item">An item</li>
    </ul>
  );
}

export default List;
