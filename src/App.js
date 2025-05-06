import React from 'react';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <header style={{ background: '#1f2937', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
        <img src="/Profile.jpg.png" alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
        <h1>Hi, I'm <span style={{ color: '#60a5fa' }}>RaghuVardhanReddy</span></h1>

        <h3 style={{ marginTop: '1rem' }}>
          <Typewriter
            words={['Aspiring Software Developer', 'React Enthusiast', 'Frontend Engineer']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
      </header>

      {/* About Section */}
      <section id="about" style={{ padding: '2rem', backgroundColor: '#f9fafb' }}>
        <h2>About Me</h2>
        <p>
          I'm a passionate front-end developer focused on building user-friendly, accessible web applications.
          I enjoy transforming ideas into interactive digital experiences using modern tools like React, Tailwind CSS, and Firebase.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '2rem' }}>
        <h2>Skills</h2>
        <p>React, JavaScript, HTML, CSS, Git, Firebase</p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '2rem', backgroundColor: '#f3f4f6' }}>
        <h2>Projects</h2>
        <h3>My Portfolio</h3>
        <p>A responsive personal portfolio built with React.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '2rem' }}>
        <h2>Contact</h2>
        <p>Email: raghurvardhanreddy738@gmail.com</p>
        <p>GitHub: <a href="https://github.com/RAGHUVARDHANREDDY123" target="_blank" rel="noreferrer">github.com/RAGHUVARDHANREDDY123</a></p>
      </section>
    </div>
  );
}

export default App;
