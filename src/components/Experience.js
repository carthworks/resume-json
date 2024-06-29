import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section>
      <h3>Experience</h3>
      {experience.map((job, index) => (
        <div key={index}>
          <h4>{job.position}</h4>
          <p>{job.company} - {job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
