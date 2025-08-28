import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { PersonalInfo } from '../../types';
import './Hero.css';


interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'github':
        window.open(`https://github.com/${value}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://linkedin.com/in/${value}`, '_blank');
        break;
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__background">
        <div className="hero__background-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__greeting">
              <span className="hero__greeting-text">Olá, eu sou</span>
            </div>
            
            <h1 className="hero__name">
              {personalInfo.name}
            </h1>
            
            <h2 className="hero__title">
              {personalInfo.title}
            </h2>
            
            <div className="hero__info">
              <div className="hero__info-item">
                <FaMapMarkerAlt className="hero__info-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero__info-item">
                <span>{personalInfo.age} anos</span>
              </div>
            </div>
            
            <p className="hero__summary">
              {personalInfo.summary}
            </p>
            
            <div className="hero__actions">
              <div className="hero__contacts">
                <button
                  className="hero__contact-btn"
                  onClick={() => handleContactClick('email', personalInfo.email)}
                  title="Email"
                >
                  <FaEnvelope />
                </button>
                <button
                  className="hero__contact-btn"
                  onClick={() => handleContactClick('phone', personalInfo.phone)}
                  title="Telefone"
                >
                  <FaPhone />
                </button>
                <button
                  className="hero__contact-btn"
                  onClick={() => handleContactClick('github', personalInfo.github)}
                  title="GitHub"
                >
                  <FaGithub />
                </button>
                <button
                  className="hero__contact-btn"
                  onClick={() => handleContactClick('linkedin', personalInfo.linkedin)}
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </button>
              </div>
              
              
            </div>
          </div>
          
          <div className="hero__visual">
            <div className="hero__avatar">
              <div className="hero__avatar-image">
                <img 
                  src={import.meta.env.BASE_URL + 'ana_perfil.jpg'}
                  alt={personalInfo.name}
                  className="hero__avatar-photo"
                  onError={(e) => {
                    // Fallback para as iniciais se a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hero__avatar-placeholder" style={{ display: 'none' }}>
                  <span>{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
            </div>
            
            <div className="hero__decorations">
              <div className="hero__decoration hero__decoration--1"></div>
              <div className="hero__decoration hero__decoration--2"></div>
              <div className="hero__decoration hero__decoration--3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
