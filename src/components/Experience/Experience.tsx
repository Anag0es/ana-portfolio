import React from 'react';
import { FaBriefcase, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { Experience as ExperienceType } from '../../types';
import './Experience.css';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <FaBriefcase />;
      case 'academic':
        return <FaGraduationCap />;
      case 'volunteer':
        return <FaHeart />;
      default:
        return <FaBriefcase />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Profissional';
      case 'academic':
        return 'Acadêmica';
      case 'volunteer':
        return 'Voluntária';
      default:
        return 'Profissional';
    }
  };

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const academicExperiences = experiences.filter(exp => exp.type === 'academic');

  return (
    <section id="experiencia" className="experience section">
      <div className="container">
        <h2 className="section-title">Experiência</h2>
        
        <div className="experience__content">
          <div className="experience__section">
            <div className="experience__section-header">
              <FaBriefcase className="experience__section-icon" />
              <h3 className="experience__section-title">Experiência Profissional</h3>
            </div>
            
            <div className="experience__timeline">
              {workExperiences.map((exp) => (
                <div key={exp.id} className="experience__item">
                  <div className="experience__item-marker">
                    <div className="experience__item-icon">
                      {getIcon(exp.type)}
                    </div>
                  </div>
                  
                  <div className="experience__item-content">
                    <div className="experience__item-header">
                      <div className="experience__item-main">
                        <h4 className="experience__item-title">{exp.title}</h4>
                        <div className="experience__item-company">{exp.company}</div>
                      </div>
                      <div className="experience__item-meta">
                        <span className="experience__item-period">{exp.period}</span>
                        <span className="experience__item-type">{getTypeLabel(exp.type)}</span>
                      </div>
                    </div>
                    
                    <p className="experience__item-description">{exp.description}</p>
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="experience__item-technologies">
                        <span className="experience__item-tech-label">Tecnologias:</span>
                        <div className="experience__item-tech-list">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="experience__item-tech">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {academicExperiences.length > 0 && (
            <div className="experience__section">
              <div className="experience__section-header">
                <FaGraduationCap className="experience__section-icon" />
                <h3 className="experience__section-title">Formação Acadêmica</h3>
              </div>
              
              <div className="experience__timeline">
                {academicExperiences.map((exp) => (
                  <div key={exp.id} className="experience__item">
                    <div className="experience__item-marker">
                      <div className="experience__item-icon">
                        {getIcon(exp.type)}
                      </div>
                    </div>
                    
                    <div className="experience__item-content">
                      <div className="experience__item-header">
                        <div className="experience__item-main">
                          <h4 className="experience__item-title">{exp.title}</h4>
                          <div className="experience__item-company">{exp.company}</div>
                        </div>
                        <div className="experience__item-meta">
                          <span className="experience__item-period">{exp.period}</span>
                          <span className="experience__item-type">{getTypeLabel(exp.type)}</span>
                        </div>
                      </div>
                      
                      <p className="experience__item-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
