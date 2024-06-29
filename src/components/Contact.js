import React from 'react';

const Contact = ({ contact }) => {
  return (
    <section className="mb-4">
      <div className="container">
        <h3>Contact</h3>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
      </div>
    </section>
  );
};

export default Contact;
