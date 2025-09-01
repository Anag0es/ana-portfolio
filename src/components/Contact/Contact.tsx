import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin
} from 'react-icons/fa';
import { PersonalInfo } from '../../types';
import './Contact.css';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {

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
    <section id="contato" className="contact section bg-light">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__header">
              <h3 className="contact__title">Vamos conversar!</h3>
              <p className="contact__description">
                Estou sempre aberto a novas oportunidades e projetos interessantes.
              </p>
            </div>
            
            <div className="contact__details">
              <div className="contact__item">
                <FaEnvelope className="contact__item-icon" />
                <button 
                  className="contact__item-link"
                  onClick={() => handleContactClick('email', personalInfo.email)}
                >
                  {personalInfo.email}
                </button>
              </div>
              
              <div className="contact__item">
                <FaPhone className="contact__item-icon" />
                <button 
                  className="contact__item-link"
                  onClick={() => handleContactClick('phone', personalInfo.phone)}
                >
                  {personalInfo.phone}
                </button>
              </div>
              
              <div className="contact__item">
                <FaMapMarkerAlt className="contact__item-icon" />
                <span className="contact__item-text">{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="contact__social">
              <button
                className="contact__social-btn"
                onClick={() => handleContactClick('github', personalInfo.github)}
                title="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </button>
              <button
                className="contact__social-btn"
                onClick={() => handleContactClick('linkedin', personalInfo.linkedin)}
                title="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
