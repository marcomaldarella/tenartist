import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ProjectNavbar from './ProjectNavbar';
import ProjectFooter from './ProjectFooter';
import "./Project.css";
import projectData from '../Projects/Projects.json';

const Project = () => {
  const navigate = useNavigate();
  const { projectSlug } = useParams();
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const projectIndex = projectData.findIndex(p => p.slug === projectSlug);
    if (projectIndex !== -1) {
      setCurrentProject(projectData[projectIndex]);
    } else {
      console.log('Project not found');
    }
  }, [projectSlug]);

  useEffect(() => {
    const projectScrollHandler = () => {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth - container.offsetWidth;

      if (container.scrollLeft >= totalWidth) {
        // Se si raggiunge la fine, si riparte dall'inizio (con un piccolo offset per evitare un loop immediato)
        container.scrollTo({ left: 1, behavior: 'smooth' });
      } else if (container.scrollLeft <= 0) {
        // Se si raggiunge l'inizio, si va verso la fine (meno un piccolo offset)
        container.scrollTo({ left: totalWidth - 1, behavior: 'smooth' });
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', projectScrollHandler);

    // Aggiungi un listener per ridimensionare la pagina quando la finestra del browser cambia dimensioni
    const resizeHandler = () => {
      if (container) {
        // Calcola la larghezza totale in base alle dimensioni della finestra del browser
        const totalWidth = window.innerWidth * projectData.length;
        container.style.width = `${totalWidth}px`;
      }
    };

    // Esegui il listener di ridimensionamento iniziale
    resizeHandler();

    // Aggiungi il listener di ridimensionamento
    window.addEventListener('resize', resizeHandler);

    return () => {
      container.removeEventListener('scroll', projectScrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [currentProject]);

  const handleNextPreviousProject = (direction) => {
    const currentIndex = projectData.findIndex(p => p.slug === projectSlug);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= projectData.length) newIndex = 0;
    if (newIndex < 0) newIndex = projectData.length - 1;

    navigate(`/project/${projectData[newIndex].slug}`);
  };

  const getProjectImages = (projectId) => {
    const basePath = `/assets/${projectId}/`;
    return Array.from({ length: 8 }, (_, i) => `${basePath}${i + 1}.jpg`);
  };

  const renderProjectContent = () => {
    if (currentProject?.videoPath) {
      return (
        <video width="100%" height="auto" controls>
          <source src={currentProject.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      const images = getProjectImages(currentProject.id);
      return images.map((imagePath, index) => (
        <img 
          key={index} 
          src={imagePath} 
          alt={`Project Image ${index}`} 
          className="project-image"
          onError={(e) => e.target.style.display = 'none'}
        />
      ));
    }
  };

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'horizontal',
        smartphone: {
          direction: 'horizontal',
          smooth: true,
        },
        tablet: {
          direction: 'horizontal',
          smooth: true,
        },
      }}
      watch={[currentProject]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef} className="content">
        <ProjectNavbar 
          onNext={() => handleNextPreviousProject("next")} 
          onPrevious={() => handleNextPreviousProject("prev")} 
        />
        {currentProject && (
          <div data-scroll-section>
            {renderProjectContent()}
          </div>
        )}
        {currentProject && (
          <ProjectFooter 
            name={currentProject.name} 
            category={currentProject.category}
          />
        )}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Project;
