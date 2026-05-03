import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title fade-in">Projects</h2>
        <p className="section-subtitle fade-in">Things I&apos;ve built &amp; shipped</p>
        <div className="divider fade-in" />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card fade-in">

              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="project-link" aria-label="GitHub">
                        <GithubIcon size={17} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer"
                        className="project-link" aria-label="Live demo">
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-cover">
                {(project.image || project.imageCover) ? (
                  <>
                    {project.imageCover && (
                      <img
                        src={project.imageCover}
                        alt={project.imageAlt}
                        className="project-cover-img project-cover-idle"
                      />
                    )}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="project-cover-img project-cover-hover"
                      />
                    )}
                  </>
                ) : (
                  <div className="project-cover-placeholder">
                    <span className="project-cover-initials">
                      {project.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
