import { useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import transition from '../transition';
import ProjectItem from './ProjectItem';
import { projectsData } from './projectsData';
import './Projects.css';

const Projects = transition(() => {
  const location = useLocation();

  useEffect(() => {
    // Quando cambia pagina, scrolla in alto
    window.scrollTo(0, 0);
  }, [location]);

  // Separiamo standard e wide
  let standardProjects = projectsData.filter(p => !p.isWide);
  let wideProjects = projectsData.filter(p => p.isWide);

  // (FACOLTATIVO) Se vuoi Montblanc come SECONDO wide,
  // e nell'array c'è un'altra wide prima di lui,
  // allora sposta Montblanc in posizione 1.
  const montblancIndex = wideProjects.findIndex(p => p.slug === 'montblanc');
  if (montblancIndex > -1) {
    const [montblanc] = wideProjects.splice(montblancIndex, 1);
    wideProjects.splice(1, 0, montblanc);
  }

  let projectElements = [];

  // Indici per scorrere i progetti
  let wideIndex = 0;
  let standardIndex = 0;

  //
  // 1) Finché abbiamo abbastanza progetti per formare un "blocco" di 3 (1 wide + 2 standard),
  //    creiamo un blocco: wide + standard + standard
  //
  while (
    wideIndex < wideProjects.length && // Ci serve 1 wide
    standardIndex + 1 < standardProjects.length // Ci servono 2 standard
  ) {
    // A) Un wide
    const wide = wideProjects[wideIndex];
    projectElements.push(
      <div key={`wide-${wide.id}`} className="projects-list-wide">
        <Link to={`/project/${wide.slug}`}>
          <ProjectItem
            name={wide.name}
            category={wide.category}
            imagePath={wide.imagePath}
            projectId={wide.id}
            isWide={true}
          />
        </Link>
      </div>
    );
    wideIndex++;

    // B) Due standard
    const standardPair = standardProjects.slice(standardIndex, standardIndex + 2);
    projectElements.push(
      <div key={`standard-pair-${standardIndex}`} className="projects-list-standard">
        {standardPair.map((proj) => (
          <div key={proj.id} className="project">
            <Link to={`/project/${proj.slug}`}>
              <ProjectItem
                name={proj.name}
                category={proj.category}
                imagePath={proj.imagePath}
                projectId={proj.id}
                isWide={false}
              />
            </Link>
          </div>
        ))}
      </div>
    );
    standardIndex += 2;
  }

  //
  // 2) Se rimangono Wide non ancora usati (non formano più un blocco di 3),
  //    li appendiamo tutti in fondo, OGNUNO nella sua riga wide
  //
  while (wideIndex < wideProjects.length) {
    const leftoverWide = wideProjects[wideIndex];
    projectElements.push(
      <div key={`leftover-wide-${leftoverWide.id}`} className="projects-list-wide leftover">
        <Link to={`/project/${leftoverWide.slug}`}>
          <ProjectItem
            name={leftoverWide.name}
            category={leftoverWide.category}
            imagePath={leftoverWide.imagePath}
            projectId={leftoverWide.id}
            isWide={true}
          />
        </Link>
      </div>
    );
    wideIndex++;
  }

  //
  // 3) Se rimangono Standard non ancora usati,
  //    li appendiamo in fondo, due a due
  //
  while (standardIndex < standardProjects.length) {
    const standardPair = standardProjects.slice(standardIndex, standardIndex + 2);
    projectElements.push(
      <div key={`leftover-standard-${standardIndex}`} className="projects-list-standard leftover">
        {standardPair.map((proj) => (
          <div key={proj.id} className="project">
            <Link to={`/project/${proj.slug}`}>
              <ProjectItem
                name={proj.name}
                category={proj.category}
                imagePath={proj.imagePath}
                projectId={proj.id}
                isWide={false}
              />
            </Link>
          </div>
        ))}
      </div>
    );
    standardIndex += 2;
  }

  // Ritorna la UI
  return (
    <div className="projects-container">
      <section className="projects">{projectElements}</section>
      <section className="footer">
        <div className="footer-copy">
          <div className="footer-copy-text">
            <a className="footer-links" href="mailto:info@tenartist.com">
              info@tenartist.com
            </a>
            <a className="footer-links-2" href="https://www.instagram.com/ten_artist">
              Instagram
            </a>
            <span className="footer-links-3">@2024</span>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Projects;
