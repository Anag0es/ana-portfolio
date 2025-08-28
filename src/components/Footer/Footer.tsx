import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { PersonalInfo } from '../../types';
import './Footer.css';

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'github':
        window.open(`https://github.com/${value}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://linkedin.com/in/${value}`, '_blank');
        break;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <span className="footer__logo-text">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
              <div className="footer__brand-info">
                <h3 className="footer__brand-name">{personalInfo.name}</h3>
                <p className="footer__brand-title">{personalInfo.title}</p>
              </div>
            </div>
            
            <div className="footer__social">
              <button
                className="footer__social-link"
                onClick={() => handleContactClick('github', personalInfo.github)}
                title="GitHub"
              >
                <FaGithub />
              </button>
              <button
                className="footer__social-link"
                onClick={() => handleContactClick('linkedin', personalInfo.linkedin)}
                title="LinkedIn"
              >
                <FaLinkedin />
              </button>
              <button
                className="footer__social-link"
                onClick={() => handleContactClick('email', personalInfo.email)}
                title="Email"
              >
                <FaEnvelope />
              </button>
            </div>
            
            <button 
              className="footer__scroll-top"
              onClick={scrollToTop}
              title="Voltar ao topo"
            >
              <FaArrowUp />
            </button>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__copyright">
              © {currentYear} {personalInfo.name} • Feito com <FaHeart className="footer__heart" /> usando React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
