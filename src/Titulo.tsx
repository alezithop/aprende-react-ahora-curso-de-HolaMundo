function Titulo() {
  // código jsx aquí -> se va a transformar a llamadas de React.createElement
  const nombre = "Alex feliz";
  if (nombre) {
    return <h1>Hola {nombre.toUpperCase()}</h1>;
  }

  return <h1>Hola Mundo</h1>;
}

export default Titulo;
