import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data: Project[] = [
        // Existing Projects
        {
          id: 1,
          title: 'Current**- JiraLite – Project Management Tool',
          description: 'A simplified clone of Jira to manage tasks, teams, and sprints.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Python'],
          github: '#',
          demo: '#',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 2,
          title: 'Hate Speech Detection System',
          description: 'A machine learning application that classifies hate speech in text.',
          technologies: ['Python', 'Flask', 'Scikit-learn', 'NLP'],
          github: 'https://github.com/naureensyed18/Hate-Speech-Detection-Flask-App',
          demo: '#',
         image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
        {
          id: 3,
          title: 'BookVault – Book Management System',
          description: 'A full-stack CRUD app to manage a personal or institutional book collection.',
          technologies: ['React', 'Firebase', 'Tailwind CSS'],
          github: 'https://github.com/naureensyed18/BookVault',
          demo: '#',
          image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 4,
          title: 'Portfolio Website',
          description: 'My personal portfolio built with React and Tailwind CSS.',
          technologies: ['React', 'Tailwind CSS','Python','Flask', 'Netlify Functions'],
          github: 'https://github.com/naureensyed18/myportfolio',
          demo: '#',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        },

        // New high-impact projects for top companies
        
    
        {
          id: 5,
          title: 'Weather Dashboard',
          description: 'React app fetching live weather data from external REST API with search functionality.',
          technologies: ['React', 'JavaScript', 'REST API'],
          github: 'https://github.com/naureensyed18/Weather-Dashboard',
          demo: '#',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        },
      ];

      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="projects">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects">
      <div className="container">
        <section className="projects-hero section">
          <h1 className="section-title">02 : My Projects</h1>
          <p className="projects-subtitle">
            A collection of projects I've built using various technologies and frameworks.
            Each project represents a learning journey and showcases different aspects of my development skills.
          </p>
        </section>

        <section className="projects-grid section">
          {projects.length === 0 ? (
            <div className="no-projects">
              <p>No projects found.</p>
            </div>
          ) : (
            <div className="grid">
              {projects.map(project => (
                <div key={project.id} className="project-card fade-in-up">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View source code"
                        >
                          <Github size={20} />
                        </a>
                        {project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <ExternalLink size={16} />
                          Github
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="projects-cta section">
          <div className="cta-content">
            <h2>Interested in Working Together?</h2>
            <p>
              I'm always open to discussing new opportunities and interesting projects.
              Let's connect and see how we can collaborate.
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
              style={{ backgroundColor: '#2563eb', color: '#fff' }}
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
