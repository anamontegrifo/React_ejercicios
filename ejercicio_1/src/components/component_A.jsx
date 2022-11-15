import React, {useState} from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import Component_B from "./component_B";


const Component_A = ({contact}) => {
  
  return <div>
    <p>Nombre: {contact.nombre}</p>
    <p>Apellido: {contact.apellido}</p>
    <p>Email: {contact.email}</p>
    <Component_B estadoConexion={contact.conectado}></Component_B>
  </div>;
};

Component_A.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default Component_A;