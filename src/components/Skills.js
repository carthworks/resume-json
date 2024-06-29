import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="mb-4">
      <div className="container">
        <h3>Skills</h3>
        <ul className="list-group">
          {skills.map((skill, index) => (
            <li key={index} className="list-group-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
