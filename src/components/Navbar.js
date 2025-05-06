import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1e293b',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
      <a href="#skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</a>
      <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
      <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
    </nav>
  );
}
