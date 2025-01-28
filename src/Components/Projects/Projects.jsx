import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import transition from '../transition';
import { projectsData } from './projectsData';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = transition(() => {
  const location = useLocation();

  useEffect(() => {
    // Gestione dell'aggiornamento della pagina o azioni specifiche al cambio di location
    // Ad esempio, scrollare verso l'alto quando la location cambia
    window.scrollTo(0, 0);
  }, [location]);

  let projectElements = [];
  let standardProjects = projectsData.filter(p => !p.isWide);
  let wideProjects = projectsData.filter(p => p.isWide);
  let standardIndex = 0, wideIndex = 0;

  while (standardIndex < standardProjects.length || wideIndex < wideProjects.length) {
    if (wideIndex < wideProjects.length) {
      projectElements.push(
        <div key={wideProjects[wideIndex].id} className="projects-list-wide">
          <Link to={`/project/${wideProjects[wideIndex].slug}`}>
            <ProjectItem
              name={wideProjects[wideIndex].name}
              category={wideProjects[wideIndex].category}
              imagePath={wideProjects[wideIndex].imagePath}
              projectId={wideProjects[wideIndex].id}
              isWide={true}
            />
          </Link>
        </div>
      );
      wideIndex++;
    }

    for (let i = 0; i < 2 && standardIndex < standardProjects.length; i++) {
      projectElements.push(
        <div key={`standard-pair-${standardIndex}`} className="projects-list-standard">
          {standardProjects.slice(standardIndex, standardIndex + 2).map(project => (
            <div key={project.id} className="project">
              <Link to={`/project/${project.slug}`}>
                <ProjectItem
                  name={project.name}
                  category={project.category}
                  imagePath={project.imagePath}
                  projectId={project.id}
                  isWide={false}
                />
              </Link>
            </div>
          ))}
        </div>
      );
      standardIndex += 2;
    }
  }

  return (
    <div className="projects-container">
      <section className="projects">
        {projectElements}
      </section>
      <section className="footer">
        <div className="footer-copy">
          <div className="footer-copy-text">
            <a className="footer-links" href="mailto:info@tenartist.com">info@tenartist.com</a>
            <a className="footer-links-2" href="https://www.instagram.com/ten_artist">Instagram</a>
            <span className="footer-links-3">@2024</span>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Projects;
