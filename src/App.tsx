import { CardBody } from "./components/Card";

function App() {
  // código jsx aquí -> se va a transformar a llamadas de React.createElement
  return (
    <CardBody
      title={"Hola Mundo"}
      text={"Este es un ejemplo de texto para la tarjeta."}
      // text2={"Este es un texto opcional."} // <- Este texto es un parametro opcional
    />
  );
}

export default App;
