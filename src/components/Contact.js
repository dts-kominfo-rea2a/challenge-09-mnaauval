// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "../style/contact.css";

const Contact = ({ contacts }) => {
  return (
    // <div className="container__card">
    //   {contacts.map((contact) => (
    //     <div className="card" key={contact.id}>
    //       <img src={contact.photo} alt={contact.name} />
    //       <div className="card__details">
    //         <h2>{contact.name}</h2>
    //         <p>{contact.phone}</p>
    //         <p>{contact.email}</p>
    //       </div>
    //     </div>
    //   ))}

    <div className="container__card">
      <div className="card" key={contacts.id}>
        <img src={contacts.photo} alt={contacts.name} />
        <div className="card__details">
          <h2>{contacts.name}</h2>
          <p>{contacts.phone}</p>
          <p>{contacts.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
