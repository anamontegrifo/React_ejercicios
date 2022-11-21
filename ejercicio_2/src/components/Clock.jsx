import React, { useState, useEffect } from "react";

export default function Clock() {
  const defaultUSer = {
    fecha: new Date(),
    edad: 0,
    nombre: "Ana",
    apellidos: "Montegrifo",
  };

  const [user, setUser] = useState(defaultUSer);

  useEffect(() => {
    const interval = setInterval(() => {
      updateUSer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateUSer = () => {
    setUser({
      fecha: new Date(),
      edad: user.edad + 1,
      nombre: "Ana",
      apellidos: "Montegrifo",
    });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {user.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>Edad: {user.edad}</h1>
    </div>
  );
}
