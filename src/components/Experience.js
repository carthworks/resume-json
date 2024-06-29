import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="mb-4">
      <div className="container">
        <h3>Experience</h3>
        {experience.map((job, index) => (
          <div key={index} className="border p-3 mb-3">
            <h4>{job.position}</h4>
            <p><strong>{job.company}</strong> - {job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
