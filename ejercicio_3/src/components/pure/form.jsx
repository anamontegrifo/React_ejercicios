import React, { useRef } from "react";
import { Contact } from "../../models/contact.class";

const Form = (props) => {
  const nameRef = useRef("");
  const surnameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const formRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      phoneRef.current.value,
      false
    );
    props.add(newContact);

  };

  return (
    <div>
      <h2>Añadir nuevo contacto</h2>
      <form onSubmit={handleSubmit} className="contactForm" ref={formRef}>
        <label htmlFor="name">
          Nombre: <input type="text" name="name" id="name" size="20px" ref={nameRef} required></input>
        </label>
        <label htmlFor="surname">
          Apellido: <input type="text" name="surname" id="surname" ref={surnameRef} required></input>
        </label>
        <label htmlFor="email">
          Email: <input type="email" name="email" id="email" ref={emailRef} required></input>
        </label>
        <label htmlFor="phone">
          Teléfono: <input type="tel" name="phone" id="phone" ref={phoneRef} required></input>
        </label>
        <button type="submit" className="formButton" value="newContact">Añadir contacto</button>
      </form>
    </div>
  );
};

export default Form;
