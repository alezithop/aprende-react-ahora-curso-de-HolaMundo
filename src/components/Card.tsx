interface CardProps {
  body: string;
}

function Card(props: CardProps) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
  text2?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text, text2: opcionalText } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {opcionalText && <p className="card-text">{opcionalText}</p>}
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
