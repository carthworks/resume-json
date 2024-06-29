import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="App">
      <Header name={data.name} title={data.title} />
      <Contact contact={data.contact} />
      <Summary summary={data.summary} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
    </div>
  );
}

export default App;
