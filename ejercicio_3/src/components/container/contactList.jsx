import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";
import Form from "../pure/form";

const ContactList = () => {
  const contact1 = new Contact(
    "Pablo",
    "Oriol",
    "pablooriol@gmail.com",
    "659382047",
    false
  );
  const contact2 = new Contact(
    "Sofía",
    "Hernán",
    "sofihern@hotmail.com",
    "659034823",
    false
  );
  const contact3 = new Contact(
    "Marcos",
    "Rodrigo",
    "mrodri@hotmail.com",
    "698153487",
    false
  );

  const [myContacts, setMyContacts] = useState([contact1, contact2, contact3]);

  const connectContact = (contact) => {
    const index = myContacts.indexOf(contact);
    const tempMyContacts = [...myContacts];
    tempMyContacts[index].connected = !tempMyContacts[index].connected;
    setMyContacts(tempMyContacts)
  }

  const removeContact = (contact) => {
    const index = myContacts.indexOf(contact);
    const tempMyContacts = [...myContacts]
    tempMyContacts.splice(index, 1);
    setMyContacts(tempMyContacts);
  }

  const addContact = (contact) => {
    const tempMyContacts = [...myContacts]
    tempMyContacts.push(contact)
    setMyContacts(tempMyContacts)
  }

  const RenderContactList = () => {
    return myContacts.map((item, index) => {
      return <ContactComponent key={index} item={item} remove={removeContact} connect={connectContact}></ContactComponent>;
    });
  };

  let myContactsList;
  if (myContacts.length > 0) {
    myContactsList = <RenderContactList></RenderContactList>;
  } else {
    myContactsList = (
      <div>
        <h3> There are no tasks to show</h3>
        <h4>Please, create one</h4>
      </div>
    );
  }


 
  return (
    <div className="container">
      <h1>Lista de contactos</h1>
      <ul className="contactList">
      {myContactsList}
      </ul>
      <Form add={addContact}></Form>
    </div>
  );
};

export default ContactList;
