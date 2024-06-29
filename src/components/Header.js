import React from 'react';

const Header = ({ name, title }) => {
  return (
    <header className="bg-primary text-white text-center py-5 mb-4">
      <div className="container">
        <h1 className="display-4">{name}</h1>
        <p className="lead">{title}</p>
      </div>
    </header>
  );
};

export default Header;
