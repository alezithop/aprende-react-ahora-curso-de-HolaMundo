import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = [
    "Personaje 1",
    //   "Personaje 2",
    //   "Personaje 3",
    //   "Personaje 4",
    //   "Personaje 5",
  ];

  // const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo: ", elemento);
  };

  // const handleSelect2 = (elemento: string) => {
  //   console.log("Mostrando: ", elemento);
  // };

  // se encarga de almacenar la lógica de qué es lo que se renderiza y que no.
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  // código jsx aquí -> se va a transformar a llamadas de React.createElement
  return (
    <Card>
      <CardBody
        title="Hola mundo"
        text="Este es un ejemplo de texto para la tarjeta."
        // text2="Este es un texto opcional adicional." // <- Este texto es un parametro opcional
      />
      {contenido}
    </Card>
  );
}

export default App;
