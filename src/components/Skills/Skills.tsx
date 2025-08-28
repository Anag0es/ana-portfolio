import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiKubernetes,
  SiVuedotjs
} from 'react-icons/si';
import { Skill } from '../../types';
import './Skills.css';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const getSkillIcon = (skillName: string) => {
    const skill = skillName.toLowerCase();
    
    if (skill.includes('react')) return <FaReact />;
    if (skill.includes('node')) return <FaNodeJs />;
    if (skill.includes('python')) return <FaPython />;
    if (skill.includes('javascript')) return <FaJs />;
    if (skill.includes('typescript')) return <SiTypescript />;
    if (skill.includes('html')) return <FaHtml5 />;
    if (skill.includes('css')) return <FaCss3Alt />;
    if (skill.includes('next')) return <SiNextdotjs />;
    if (skill.includes('vue')) return <SiVuedotjs />;
    if (skill.includes('tailwind')) return <SiTailwindcss />;
    if (skill.includes('git')) return <FaGitAlt />;
    if (skill.includes('docker')) return <FaDocker />;
    if (skill.includes('aws')) return <FaAws />;
    if (skill.includes('mongodb')) return <SiMongodb />;
    if (skill.includes('postgresql')) return <SiPostgresql />;
    if (skill.includes('redis')) return <SiRedis />;
    if (skill.includes('graphql')) return <SiGraphql />;
    if (skill.includes('kubernetes')) return <SiKubernetes />;
    if (skill.includes('mysql') || skill.includes('banco')) return <FaDatabase />;
    
    return null;
  };

  const getSkillPriority = (skillName: string) => {
    // Definir skills principais para destaque
    const primarySkills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Git'];
    return primarySkills.includes(skillName) ? 'primary' : 'secondary';
  };

  return (
    <section id="habilidades" className="skills section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        
        <div className="skills__content">
          <div className="skills__main">
            {skills.slice(0, 4).map((skillCategory, categoryIndex) => (
              <div key={categoryIndex} className="skills__category">
                <div className="skills__category-header">
                  <h3 className="skills__category-title">{skillCategory.category}</h3>
                  <div className="skills__category-count">{skillCategory.items.length}</div>
                </div>
                
                <div className="skills__list">
                  {skillCategory.items.map((skill, skillIndex) => {
                    const icon = getSkillIcon(skill);
                    const priority = getSkillPriority(skill);
                    
                    return (
                      <div key={skillIndex} className={`skills__tag skills__tag--${priority}`}>
                        {icon && <span className="skills__tag-icon">{icon}</span>}
                        <span className="skills__tag-name">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {/* Soft Skills separadas */}
          {skills.slice(4).map((skillCategory, categoryIndex) => (
            <div key={categoryIndex + 4} className="skills__soft">
              <h3 className="skills__soft-title">{skillCategory.category}</h3>
              <div className="skills__soft-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skills__soft-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills__summary">
          <div className="skills__summary-item">
            <div className="skills__summary-number">20+</div>
            <div className="skills__summary-label">Tecnologias</div>
          </div>
          <div className="skills__summary-item">
            <div className="skills__summary-number">5+</div>
            <div className="skills__summary-label">Linguagens</div>
          </div>
          <div className="skills__summary-item">
            <div className="skills__summary-number">3+</div>
            <div className="skills__summary-label">Anos de Experiência</div>
          </div>
          <div className="skills__summary-item">
            <div className="skills__summary-number">15+</div>
            <div className="skills__summary-label">Projetos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
