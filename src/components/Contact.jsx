import { Mail, Send, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name    = form.name.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const mailto  = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Kartik,\n\nMy name is ${name}.\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <p className="section-subtitle fade-in">Let&apos;s build something great together</p>
        <div className="divider fade-in" />

        <div className="contact-grid">
          {/* Info column */}
          <div className="contact-info fade-in">
            <p className="contact-intro">
              Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
            </p>

            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link-item">
                <div className="clink-icon"><Mail size={18} /></div>
                <div>
                  <p className="clink-label">Email</p>
                  <p className="clink-value">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
                target="_blank"
                rel="noreferrer"
                className="contact-link-item"
              >
                <div className="clink-icon"><MapPin size={18} /></div>
                <div>
                  <p className="clink-label">Location</p>
                  <p className="clink-value">{personalInfo.location}</p>
                </div>
              </a>
            </div>

            <div className="contact-socials">
              <a href={personalInfo.github}   target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Form column */}
          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" name="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="subject" type="text" placeholder="Project Collaboration" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project or idea..." required />
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
