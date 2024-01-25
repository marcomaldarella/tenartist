import React, { useRef } from "react";
import ProjectItem from "./ProjectItem";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import transition from "../transition";
import projectData from './projects.json';
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const containerRef = useRef(null);

  const standardProjects = projectData.filter(p => !p.isWide);
  const wideProjects = projectData.filter(p => p.isWide);

  let projectElements = [];
  let standardIndex = 0, wideIndex = 0;

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
  while (standardIndex < standardProjects.length || wideIndex < wideProjects.length) {
    // Aggiungi coppie di progetti standard
    if (standardIndex < standardProjects.length) {
      projectElements.push(
        <div key={`standard-pair-${standardIndex}`} className="projects-list-standard">
          {[standardProjects[standardIndex], standardProjects[standardIndex + 1]].map(project => project && (
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

    // Continua con i progetti wide rimanenti
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
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      containerRef={containerRef}
    >
      <div className="projects-container" data-scroll-container ref={containerRef}>
        <section className="projects" data-scroll-section>
          {projectElements}
        </section>
        <section className="footer" data-scroll-section>
          <div className="footer-copy">
            <div className="footer-copy-text">
              <a className="footer-links" href="#">info@tenartist.com</a>
              <a className="footer-links-2" href="#">Instagram</a>
            </div>
            <p className="footer-year">@2023</p>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default transition(Projects);
