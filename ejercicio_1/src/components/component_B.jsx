import React, {useState} from "react";


const Component_B = ({estadoConexion}) => {
  const [conectado, setConectado] = useState(estadoConexion)

  const conectar = () => {
  conectado ? setConectado(false) : setConectado(true)
  }

  return <div>
  <p>Conectado: {conectado ? "Contacto en línea": "Contacto no disponible"}</p>
  <button onClick={conectar}>Cambio estado</button>
  </div>;
};


export default Component_B;