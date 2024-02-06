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
      // Puoi lasciare vuoto questo gestore se non desideri che lo scroll riparta dall'inizio alla fine.
    };

    const container = containerRef.current;
    container.addEventListener('scroll', projectScrollHandler);

    return () => container.removeEventListener('scroll', projectScrollHandler);
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
