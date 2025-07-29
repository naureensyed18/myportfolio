import React from 'react';
import {  Briefcase, GraduationCap, Heart } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="container">
        <section className="about-hero section">
          <div className="about-content">
            <div className="about-text">
              <h1 className="section-title">03 : About me</h1>
              <div className="about-intro">
                <h2>Hi, I'm Naureen Syed,</h2>

                <p>
                 A software engineer based in Bangalore with a strong interest in backend development and solving practical problems with code.
                </p>
                <p>
                  I enjoy working with technologies like <strong>Python, Flask, PostgreSQL, and REST APIs</strong>, 
                  and I've had the opportunity to contribute to projects both in professional settings and through 
                  freelance work — including collaborations with an NGO and a real estate company.
                </p>
                <p>
                  I'm currently working at Tata Consultancy Services, where I've focused on improving system 
                  performance and backend architecture.
                </p>
                <p>
                  Beyond work, I find joy in travelling, trekking, surfing, spending time with my family, 
                  and occasionally cooking something new. These experiences help me stay balanced and bring 
                  a thoughtful, patient approach to how I build software.
                </p>
                <p>
                  I've also explored areas like natural language processing, cloud deployment, and full-stack 
                  development through university projects, and continue learning through platforms like LeetCode 
                  and online courses.
                </p>
                <p>
                  I value clean, maintainable code, good collaboration, and the chance to work on meaningful products.
                </p>
                <div className="cta-text">
                  <strong>LET'S CONNECT!</strong>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img src="/profil.jpg" alt="Naureen Syed" className="profile-image" />

                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <h3>Software Development Engineer</h3>
                <h4>Tata Consultancy Services</h4>
                <p className="timeline-date">2022 - Present</p>
                <p>
                  Working on backend development and system architecture improvements. 
                  Focus on performance optimization, API development, and database design.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <h3>Freelance Developer</h3>
                <h4>Various Clients</h4>
                <p className="timeline-date">2021 - Present</p>
                <p>
                  Developed web applications for NGO and real estate company. 
                  Built volunteer management systems and property management platforms.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={24} />
              </div>
              <div className="timeline-content">
                <h3>Frontend Developer Intern</h3>
                <h4>OneHash</h4>
                <p className="timeline-date">2021 - 2022</p>
                <p>
                  Developed and maintained UI components in ReactJS for a SaaS CRM platform, improving customer engagement workflows.
 <br /> Built reusable UI components and contributed to the internal design system, reducing development time by 25%.

                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="education section">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={32} />
              </div>
              <h3>Bachelor's in Computer Science</h3>
              <p className="education-institution">Medi-Caps University</p>
              <p className="education-date">2019 - 2023</p>
              <p>
                Focused on software engineering, data structures, algorithms, and 
                natural language processing. Completed various projects in full-stack 
                development and machine learning.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-detailed section">
  <h2 className="section-title">Technical Skills</h2>
  <div className="skills-categories">
    <div className="skill-category">
      <h3>Backend Development</h3>
      <ul className="skill-list">
        <li>Python</li>
        <li>Flask</li>
        <li>REST APIs</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Database</h3>
      <ul className="skill-list">
        <li>PostgreSQL</li>
        <li>MySQL</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Frontend</h3>
      <ul className="skill-list">
        <li>React</li>
        <li>JavaScript</li>
      </ul>
    </div>
  </div>
</section>


        <section className="interests section">
          <h2 className="section-title">Beyond Code</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <div className="interest-icon">
                <Heart size={32} />
              </div>
              <h3>Travel & Trekking</h3>
              <p>
                I love exploring new places and challenging myself with trekking adventures. 
                These experiences help me stay balanced and bring fresh perspectives to my work.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Heart size={32} />
              </div>
              <h3>Surfing</h3>
              <p>
                Surfing teaches me patience, balance, and the importance of reading conditions - 
                skills that translate well to software development.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Heart size={32} />
              </div>
              <h3>Cooking</h3>
              <p>
                Experimenting with new recipes is like solving coding problems - 
                it requires creativity, precision, and patience.
              </p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">
                <Heart size={32} />
              </div>
              <h3>Continuous Learning</h3>
              <p>
                I regularly practice on LeetCode and take online courses to stay updated 
                with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;