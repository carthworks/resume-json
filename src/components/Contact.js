import React from 'react';

const Contact = ({ contact }) => {
  return (
    <section>
      <h3>Contact</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </section>
  );
};

export default Contact;
