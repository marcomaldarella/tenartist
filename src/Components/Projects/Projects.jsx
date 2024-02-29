import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ProjectItem from './ProjectItem';
import transition from '../transition';
import { projectsData } from './projectsData';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = transition(() => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (containerRef.current && containerRef.current.update) {
      containerRef.current.update();
    }

    const images = document.querySelectorAll('.project-img-full-wrapper img');
    let delay = 800; // Ritardo iniziale di 0.8 secondi in millisecondi

    images.forEach((img) => {
      setTimeout(() => {
        img.classList.add('fade-in');
      }, delay);

      delay += 100; // Incrementiamo il ritardo per l'immagine successiva di 0.1 secondi
    });
  }, [location]);

  let projectElements = [];
  let standardProjects = projectsData.filter(p => !p.isWide);
  let wideProjects = projectsData.filter(p => p.isWide);
  let standardIndex = 0, wideIndex = 0;

  while (standardIndex < standardProjects.length || wideIndex < wideProjects.length) {
    // Inserisci due coppie di progetti standard
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
      standardIndex += 2; // Aggiorna l'indice per la prossima coppia
    }

    // Inserisci un progetto wide se disponibile
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
      wideIndex++; // Passa al prossimo progetto wide
    }
  }

  // Alla fine, se ci sono ancora progetti wide da mostrare, aggiungili tutti
  while (wideIndex < wideProjects.length) {
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
    wideIndex++; // Continua con il prossimo progetto wide
  }

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical',
        },
        tablet: {
          direction: 'vertical',
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div className="projects-container" data-scroll-container ref={containerRef}>
        <section className="projects" data-scroll-section>
          {projectElements}
        </section>
        <section className="footer" data-scroll-section>
          <div className="footer-copy">
            <div className="footer-copy-text">
              <a className="footer-links" href="mailto:info@tenartist.com">
                info@tenartist.com
              </a>
              <a className="footer-links-2" href="https://www.instagram.com/ten_artist">
                Instagram
              </a>
              <span className="footer-links-3">
                @2024
              </span>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
});

export default Projects;
