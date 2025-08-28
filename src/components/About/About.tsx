import React, { useState } from 'react';
import { FaGraduationCap, FaLanguage, FaCertificate, FaUser } from 'react-icons/fa';
import { Education, Language } from '../../types';
import './About.css';

interface AboutProps {
  education: Education[];
  languages: Language[];
}

const About: React.FC<AboutProps> = ({ education, languages }) => {
  const [activeTab, setActiveTab] = useState<'about' | 'education' | 'languages' | 'certifications'>('about');
  const tabs = [
    { id: 'about', label: 'Sobre', icon: <FaUser /> },
    { id: 'education', label: 'Formação', icon: <FaGraduationCap /> },
    { id: 'languages', label: 'Idiomas', icon: <FaLanguage /> },
    { id: 'certifications', label: 'Certificações', icon: <FaCertificate /> }
  ] as const;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="about__tab-content">
            <div className="about__description">
              <p>
                Futura Cientista da Computação apaixonada por desenvolvimento back-end, inteligência artificial e governança de dados. 
                Com experiência sólida em instituições financeiras como Banco PAN, Safra, BTG Pactual e Cia de Talentos, 
                aplicando tecnologias como Java, Spring, AWS, Python e SQL para criar soluções eficientes e escaláveis.
              </p>
              <p>
                Acredito no poder da tecnologia para transformar negócios e vidas, sempre priorizando qualidade, 
                performance e segurança da informação. Busco constantemente aprender e aplicar novas tecnologias 
                para resolver problemas complexos de forma inovadora.
              </p>
            </div>
            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-number">2+</div>
                <div className="about__highlight-text">Anos de Experiência</div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-number">6+</div>
                <div className="about__highlight-text">Projetos Concluídos</div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-number">10+</div>
                <div className="about__highlight-text">Tecnologias Dominadas</div>
              </div>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="about__tab-content">
            <div className="about__items">
              {education.map((edu) => (
                <div key={edu.id} className="about__item">
                  <div className="about__item-header">
                    <h4 className="about__item-title">{edu.degree}</h4>
                    <span className="about__item-period">{edu.period}</span>
                  </div>
                  <div className="about__item-subtitle">{edu.institution}</div>
                  {edu.description && (
                    <p className="about__item-description">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'languages':
        return (
          <div className="about__tab-content">
            <div className="about__languages">
              {languages.map((lang, index) => (
                <div key={index} className="about__language">
                  <div className="about__language-name">{lang.name}</div>
                  <div className="about__language-level">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certifications':
        return (
          <div className="about__tab-content">
            <div className="about__certifications">
              <div className="about__certification">
                <div className="about__certification-name">Inteligência Artificial - Google Cloud</div>
                <div className="about__certification-issuer">Google Cloud Skills Boost</div>
                <div className="about__certification-date">Nov 2024</div>
              </div>
              <div className="about__certification">
                <div className="about__certification-name">PCAP - Programming Essentials in Python</div>
                <div className="about__certification-issuer">Cisco Networking Academy</div>
                <div className="about__certification-date">Mar 2023</div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="sobre" className="about section bg-light">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="about__content">
          <div className="about__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`about__tab ${activeTab === tab.id ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div className="about__tab-panel">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
