// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

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
    // </div>
    <div className="container__card">
      <div className="card">
        <img src={contacts.photo} alt={contacts.name}></img>
        <section className="card__details">
          <h3>{contacts.name}</h3>
          <p>{contacts.phone}</p>
          <p>{contacts.email}</p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
