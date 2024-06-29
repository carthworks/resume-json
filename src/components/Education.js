import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="mb-4">
      <div className="container">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="border p-3 mb-3">
            <h4>{edu.degree}</h4>
            <p><strong>{edu.institution}</strong> - {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
