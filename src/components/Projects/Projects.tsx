import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { Project } from '../../types';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projetos" className="projects section bg-light">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__card-header">
                <div className="projects__card-icon">
                  <FaCode />
                </div>
                <div className="projects__card-links">
                  {project.githubUrl && (
                    <button
                      className="projects__card-link"
                      onClick={() => handleLinkClick(project.githubUrl!)}
                      title="Ver no GitHub"
                    >
                      <FaGithub />
                    </button>
                  )}
                  {project.liveUrl && (
                    <button
                      className="projects__card-link"
                      onClick={() => handleLinkClick(project.liveUrl!)}
                      title="Ver projeto ao vivo"
                    >
                      <FaExternalLinkAlt />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.name}</h3>
                <p className="projects__card-description">{project.description}</p>
                
                {project.highlights && project.highlights.length > 0 && (
                  <div className="projects__card-highlights">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="projects__card-highlight">
                        <FaStar className="projects__card-highlight-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="projects__card-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__card-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="projects__card-footer">
                <div className="projects__card-actions">
                  {project.githubUrl && (
                    <button
                      className="projects__card-btn projects__card-btn--secondary"
                      onClick={() => handleLinkClick(project.githubUrl!)}
                    >
                      <FaGithub />
                      <span>Código</span>
                    </button>
                  )}
                  {project.liveUrl && (
                    <button
                      className="projects__card-btn projects__card-btn--primary"
                      onClick={() => handleLinkClick(project.liveUrl!)}
                    >
                      <FaExternalLinkAlt />
                      <span>Ver Demo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects__cta">
          <p className="projects__cta-text">
            Quer ver mais projetos? Confira meu perfil no GitHub!
          </p>
          <button
            className="projects__cta-btn"
            onClick={() => handleLinkClick('https://github.com/Anag0es')}
          >
            <FaGithub />
            <span>Ver mais no GitHub</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
