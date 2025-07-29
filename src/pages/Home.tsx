import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Code, Database, Globe } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Hey! I'm Naureen Syed",
    "I am a Software Engineer"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                {currentText}
                <span className="cursor">|</span>
              </h1>
              <p className="hero-subtitle">
                Backend Developer passionate about creating efficient, scalable solutions
                with Python, Flask, and modern web technologies.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View My Work 
                </Link>
                <Link to="/contact" className="btn btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <Code size={40} />
              </div>
              <h3>Backend Development</h3>
              <p>
                Building robust server-side applications with Python, Flask, and REST APIs.
                Focus on clean architecture and scalable solutions.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <Database size={40} />
              </div>
              <h3>Database Design</h3>
              <p>
                Designing and optimizing databases with PostgreSQL and MySQL.
                Experience with data modeling and performance tuning.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <Globe size={40} />
              </div>
              <h3>Full Stack Development</h3>
              <p>
                Creating complete web applications with modern frontend frameworks
                like React and responsive design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies section">
        <div className="container">
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">REST APIs</span>
                <span className="tech-tag">JWT</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-tags">
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">SQLite</span>
                
              </div>
            </div>
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">Bootstrap</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>Tools & Others</h3>
              <div className="tech-tags">
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;