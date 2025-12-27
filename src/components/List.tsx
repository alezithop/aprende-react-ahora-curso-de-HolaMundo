type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} className="list-group-item">
          {elemento}
        </li>
      ))}
      <li className="list-group-item">An item</li>
    </ul>
  );
}

export default List;
