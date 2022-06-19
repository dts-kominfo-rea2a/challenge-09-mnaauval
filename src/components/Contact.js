// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./contact.css";

const Contact = ({ contacts }) => {
  return (
    <div className="container__card">
      {contacts.map((contact) => (
        <div className="card" key={contact.id}>
          <img src={contact.photo} alt={contact.name} />
          <div className="card__details">
            <h2>{contact.name}</h2>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
    // <div className="container__card">
    //   <div className="card">
    //     <img src={data.photo} alt={data.name}></img>
    //     <section className="card__details">
    //       <h3>{data.name}</h3>
    //       <p>{data.phone}</p>
    //       <p>{data.email}</p>
    //     </section>
    //   </div>
  );
};

export default Contact;
