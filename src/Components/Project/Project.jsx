import { useRef, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProjectNavbar from './ProjectNavbar'
import ProjectFooter from './ProjectFooter'
import './Project.css'
import { projectsData } from '../Projects/projectsData'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import transition from '../transition'

const Project = transition(() => {
  const navigate = useNavigate()
  const { projectSlug } = useParams()
  const containerRef = useRef(null)
  const [currentProject, setCurrentProject] = useState(null)
  const wrapperImagesRef = useRef(null)
  const isMobile = window.innerWidth < 768; // Soglia per definire un dispositivo come mobile

  const xWrapper = useMotionValue(0);

  // Per dispositivi mobili, usiamo direttamente xWrapper senza molla
  const xWrapperSpring = isMobile ? xWrapper : useSpring(xWrapper, {
    stiffness: 200,
    damping: 120,
    mass: 1,
  });

  // Disabilitiamo lo scroll orizzontale e il resize su dispositivi mobili
  useEffect(() => {
    if (isMobile) {
      return;
    }

    const handleWheel = (e) => {
      if (!wrapperImagesRef.current) return;

      const deltaX = e.deltaY;
      const currentX = xWrapper.get();
      const imagesWidth = wrapperImagesRef.current.getBoundingClientRect().width;
      const rightBoundary = -imagesWidth + window.innerWidth;
      const newX = Math.min(Math.max(currentX - deltaX, rightBoundary), 0);

      xWrapper.set(newX);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile, xWrapper]);

  // Gestione del touch per dispositivi non mobili
  useEffect(() => {
    if (isMobile) {
      return;
    }

    let initialTouchPositionX = null;
    let initialTouchPositionY = null;

    const handleTouchStart = (e) => {
      initialTouchPositionX = e.touches[0].clientX;
      initialTouchPositionY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (initialTouchPositionX === null || initialTouchPositionY === null) return;

      const deltaX = initialTouchPositionX - e.touches[0].clientX;
      const deltaY = initialTouchPositionY - e.touches[0].clientY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();

        const currentX = xWrapper.get();
        const newX = currentX - deltaX;

        xWrapper.set(newX);
      }

      initialTouchPositionX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      initialTouchPositionX = null;
      initialTouchPositionY = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, xWrapper]);

  useEffect(() => {
    const projectIndex = projectsData.findIndex((p) => p.slug === projectSlug);
    if (projectIndex !== -1) {
      setCurrentProject(projectsData[projectIndex]);
    } else {
      console.log('Project not found');
    }
  }, [projectSlug]);

  const handleNextPreviousProject = (direction) => {
    const currentIndex = projectsData.findIndex((p) => p.slug === projectSlug);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= projectsData.length) newIndex = 0;
    if (newIndex < 0) newIndex = projectsData.length - 1;

    navigate(`/project/${projectsData[newIndex].slug}`);
  };


  const getProjectImages = projectId => {
    const project = projectsData.find(p => p.id === projectId)
    return project.imagesPath.map(path => path)
  }

  const renderProjectContent = () => {
    if (currentProject?.videoPath) {
      return (
        <video width="100%" height="auto" controls className='video-wrap'>
          <source src={currentProject.videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    } else {
      const images = getProjectImages(currentProject.id)
      return (
        <div className="current-project-image">
           <motion.div
            ref={wrapperImagesRef}
            style={{
              position: window.innerWidth < 768 ? 'relative' : 'fixed',
              top: window.innerWidth < 768 ? 'auto' : '60px',
              left: 0,
              pointerEvents: 'auto', // Impostato su auto per permettere interazioni su mobile
              display: 'flex',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              width: window.innerWidth < 768 ? '100%' : 'min-content',
              height: window.innerWidth < 768 ? 'auto' : '100%',
              overflowY: window.innerWidth < 768 ? 'auto' : 'hidden', // Permette lo scroll su mobile se necessario
              x: window.innerWidth < 768 ? 0 : xWrapperSpring,
            }}
          >
            {images.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                alt={`Project Image ${index}`}
                className="project-image"
                onError={e => (e.target.style.display = 'none')}
              />
            ))}
          </motion.div>
        </div>
      )
    }
  }

  return (
    <div data-scroll-container ref={containerRef} className="content">
      <ProjectNavbar
        onNext={() => handleNextPreviousProject('next')}
        onPrevious={() => handleNextPreviousProject('prev')}
      />
      {currentProject && renderProjectContent()}
      {currentProject && (
        <ProjectFooter
          name={currentProject.name}
          category={currentProject.category}
        />
      )}
    </div>
  )
})

export default Project
