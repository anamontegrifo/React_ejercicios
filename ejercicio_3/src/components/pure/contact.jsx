import React from "react";
import { Contact } from "../../models/contact.class";
import PropTypes from "prop-types";

const ContactComponent = (props) => {
  const ConnectIcon = () => {
    if (props.item.connected) {
      return (
        <div onClick={() => props.connect(props.item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="tomato"
            class="bi bi-toggle-on"
            viewBox="0 0 16 16"
          >
            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div onClick={() => props.connect(props.item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="tomato"
            class="bi bi-toggle-off"
            viewBox="0 0 16 16"
          >
            <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z" />
          </svg>
        </div>
      );
    }
  };

  return (
    <li key={props.key} className="item">
      <button className="deleteButton" onClick={props.remove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="tomato"
          class="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </button>
      <p>Nombre: {props.item.name}</p>
      <p>Apellido: {props.item.surname}</p>
      <p>Email: {props.item.email}</p>
      <p>Teléfono: {props.item.phone}</p>
      <p className={props.item.connected ? "connected": "disconnected"}>{props.item.connected ? "Conectado" : "Desconectado"}</p>
      {ConnectIcon()}
    </li>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};
export default ContactComponent;
