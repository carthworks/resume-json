import React from 'react';

const Header = ({ name, title }) => {
  return (
    <header>
      <h1 className="text-success">{name}</h1>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
