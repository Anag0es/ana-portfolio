import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaPaperPlane,
  FaUser,
  FaComment
} from 'react-icons/fa';
import { PersonalInfo } from '../../types';
import './Contact.css';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar link mailto com os dados do formulário
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
          
          <div className="contact__form-container">
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Envie uma mensagem</h3>
              
              <div className="contact__form-grid">
                <div className="contact__form-group">
                  <label className="contact__form-label">
                    <FaUser className="contact__form-icon" />
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact__form-input"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div className="contact__form-group">
                  <label className="contact__form-label">
                    <FaEnvelope className="contact__form-icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact__form-input"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
              </div>
              
              <div className="contact__form-group">
                <label className="contact__form-label">
                  <FaComment className="contact__form-icon" />
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="contact__form-input"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div className="contact__form-group">
                <label className="contact__form-label">
                  <FaComment className="contact__form-icon" />
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact__form-textarea"
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="contact__form-submit">
                <FaPaperPlane />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
