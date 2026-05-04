import { useEffect, useState } from 'react';
import { MapPin, Mail, ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const TYPING_ROLES = personalInfo.roles;
const CYCLER_IMAGES = personalInfo.heroImages || [];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [deleting, setDeleting]     = useState(false);
  const [cyclerIndex, setCyclerIndex] = useState(0);

  // Cycling image logic
  useEffect(() => {
    if (CYCLER_IMAGES.length === 0) return;
    const timer = setInterval(() => {
      setCyclerIndex((prev) => (prev + 1) % CYCLER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % TYPING_ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* Left column */}
        <div className="hero-content">
          {/* Name */}
          <h1 className="hero-name">
            Hi, I&apos;m <span className="hero-name-accent">{personalInfo.name}</span>
            <span className="hero-subtitle">
              Software Developer and Data Science Engineer
            </span>
          </h1>

          {/* Typing role */}
          <p className="hero-role">
            {displayed}
            <span className="cursor">|</span>
          </p>

          {/* Bio Row with Cycler */}
          <div className="hero-bio-row">
            <p className="hero-bio">{personalInfo.shortBio}</p>
            <div className="hero-cycler">
              {CYCLER_IMAGES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Portfolio highlight"
                  className={`cycler-img ${i === cyclerIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Meta info */}
          <div className="hero-meta">
            <span className="meta-item">
              <MapPin size={14} />
              {personalInfo.location}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <a
              href={personalInfo.resumeFile}
              download
              className="btn btn-primary"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <ArrowRight size={16} />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <span className="socials-label">Follow me:</span>
            <a href={personalInfo.github}  target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-icon" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>


      </div>

    </section>
  );
}
