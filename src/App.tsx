import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = [
    "Personaje 1",
    "Personaje 2",
    "Personaje 3",
    "Personaje 4",
    "Personaje 5",
  ];

  // const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo: ", elemento);
  };

  // código jsx aquí -> se va a transformar a llamadas de React.createElement
  return (
    <Card>
      <CardBody
        title="Hola mundo"
        text="Este es un ejemplo de texto para la tarjeta."
        // text2="Este es un texto opcional adicional." // <- Este texto es un parametro opcional
      />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No hay contenido"
      )}
      {
        <Button isLoading={isLoading} onClick={handleClick}>
          Hola Mundo
        </Button>
        // <Button type="button" class="btn btn-secondary">Secondary</Button>
      }
    </Card>
  );
}

export default App;
