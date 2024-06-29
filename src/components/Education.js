import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.degree}</h4>
          <p>{edu.institution} - {edu.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
