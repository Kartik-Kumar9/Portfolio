import { GraduationCap, BookOpen, MapPin, Mail, Download, Award, ArrowRight, Brain, BarChart, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo, education, stats, certifications } from '../data/portfolio';
import './About.css';

export default function About() {
  const getCompetencyIcon = (title) => {
    if (title.includes('Machine')) return <Brain size={20} />;
    if (title.includes('Data')) return <BarChart size={20} />;
    return <Server size={20} />;
  };
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Header */}
        <h2 className="section-title fade-in">About Me</h2>
        <div className="divider fade-in" />

        <div className="about-grid">
          {/* Left Column — Profile Card */}
          <div className="about-profile-card fade-in">
            <div className="profile-img-wrap">
              {personalInfo.photo ? (
                <img src={personalInfo.photo} alt={personalInfo.name} className="profile-img" />
              ) : (
                <div className="avatar-placeholder">
                  <span className="avatar-initials">KK</span>
                </div>
              )}
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">{personalInfo.name}</h3>
              <p className="profile-tagline">{personalInfo.tagline}</p>
              
              <div className="profile-details">
                <span className="profile-detail-item">
                  <MapPin size={14} /> {personalInfo.location}
                </span>
                <span className="profile-detail-item">
                  <GraduationCap size={14} /> B.Tech CSE @ CGC Landran
                </span>
                <span className="profile-detail-item">
                  <BookOpen size={14} /> Specialization in Data Science
                </span>
                <span className="profile-detail-item">
                  <Mail size={14} /> Contact via Email
                </span>
                <span className="profile-detail-item">
                  <div className="badge-dot" style={{ margin: '0 3px' }} /> Available for hire
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Content */}
          <div className="about-content fade-in">
            <h2 className="about-headline">
              I build intelligent, data-driven solutions.
            </h2>
            
            <p className="about-intro">
              {personalInfo.bio}
            </p>


            {/* What I Do */}
            <div className="about-competencies">
              <h3 className="sub-heading">What I Do</h3>
              <div className="competencies-grid">
                {personalInfo.coreCompetencies.map((comp, i) => (
                  <div key={i} className="competency-card">
                    <div className="competency-icon-wrap">
                      {getCompetencyIcon(comp.title)}
                    </div>
                    <h4 className="competency-title">{comp.title}</h4>
                    <p className="competency-desc">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Certifications */}
            <div className="about-certs">
              <h3 className="sub-heading">Certifications</h3>
              <div className="certs-list">
                {certifications.map((cert, i) => (
                  <div key={i} className="cert-item">
                    <div className="cert-icon-wrap">
                      <Award size={18} className="cert-icon" />
                    </div>
                    <div className="cert-info">
                      <p className="cert-title">{cert.title}</p>
                      <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="about-cta-wrap">
              <a href="#contact" className="about-cta">
                Looking to collaborate? Let's connect <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
