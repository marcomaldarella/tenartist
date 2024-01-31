import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import transition from "../transition";
import ProjectNavbar from './ProjectNavbar';
import ProjectFooter from './ProjectFooter';
import "./Project.css";
import projectData from '../Projects/Projects.json'; 

const Project = () => {
  const navigate = useNavigate();
  const { projectSlug } = useParams();
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(null);

  const maxImagesPerProject = 8; // Numero massimo di immagini per progetto

  useEffect(() => {
    const projectIndex = projectData.findIndex(p => p.slug === projectSlug);
    if (projectIndex !== -1) {
      setCurrentProject(projectData[projectIndex]);
    } else {
      // Qui puoi gestire il caso in cui il progetto non viene trovato
    }
  }, [projectSlug]);

  const handleNextPreviousProject = (direction) => {
    const currentIndex = projectData.findIndex(p => p.slug === projectSlug);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= projectData.length) newIndex = 0;
    if (newIndex < 0) newIndex = projectData.length - 1;

    navigate(`/project/${projectData[newIndex].slug}`);
  };

  const getProjectImages = (projectId) => {
    const basePath = `/assets/${projectId}/`;
    let images = [];
    for (let i = 1; i <= maxImagesPerProject; i++) {
      images.push(`${basePath}${i}.jpg`);
    }
    return images;
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  const renderProjectContent = () => {
    if (currentProject?.videoPath) {
      return (
        <video width="100%" height="auto" controls>
          <source src={currentProject.videoPath} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      );
    } else {
      return getProjectImages(currentProject.id).map((imagePath, index) => (
        <img 
          key={index} 
          src={imagePath} 
          alt={`Project Image ${index}`} 
          className="project-image"
          onError={handleImageError}
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
          smooth: true
        },
        tablet: {
          direction: 'horizontal',
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <ProjectNavbar 
        onNext={() => handleNextPreviousProject("next")} 
        onPrevious={() => handleNextPreviousProject("prev")} 
      />
      <div data-scroll-container ref={containerRef} className="content">
        {currentProject && (
          <div data-scroll-section>{renderProjectContent()}</div>
        )}
      </div>
      {currentProject && (
        <ProjectFooter 
          name={currentProject.name} 
          category={currentProject.category}
        />
      )}
    </LocomotiveScrollProvider>
  );
};

export default transition(Project);
