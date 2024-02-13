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

  const standardProjects = projectsData.filter(p => !p.isWide);
  const wideProjects = projectsData.filter(p => p.isWide);

  useEffect(() => {
    // Assicura che l'animazione venga applicata dopo il caricamento e l'aggiornamento del componente
    if (containerRef.current && containerRef.current.update) {
      containerRef.current.update();
    }

    // Applica l'effetto fade-in alle immagini
    const images = document.querySelectorAll('.project-img-full-wrapper img');
    let delay = 800; // Ritardo iniziale di 0.8 secondi in millisecondi

    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add('fade-in');
      }, delay);

      delay += 100; // Incrementiamo il ritardo per l'immagine successiva di 0.1 secondi
    });
  }, [location]);

  // Logica per la creazione dei progetti
  let projectElements = [];
  let standardIndex = 0,
      wideIndex = 0;

  // Inizia prima con il progetto wide
  if (wideProjects.length > 0) {
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

  // Poi procedi con le coppie di progetti standard e il resto dei progetti wide
  while (
    standardIndex < standardProjects.length ||
    wideIndex < wideProjects.length
  ) {
    if (standardIndex < standardProjects.length) {
      projectElements.push(
        <div
          key={`standard-pair-${standardIndex}`}
          className="projects-list-standard"
        >
          {[
            standardProjects[standardIndex],
            standardProjects[standardIndex + 1],
          ].map(
            project =>
              project && (
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
              )
          )}
        </div>
      );
      standardIndex += 2;
    }

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
      <div
        className="projects-container"
        data-scroll-container
        ref={containerRef}
      >
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
