import React from 'react';

const Summary = ({ summary }) => {
  return (
    <section className="mb-4">
      <div className="container">
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default Summary;
