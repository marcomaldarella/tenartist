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

  const xWrapper = useMotionValue(0)
  const xWrapperSpring = useSpring(xWrapper, {
    stiffness: 200,
    damping: 120,
  })
  

  useEffect(() => {
    const handleWheel = e => {
      if (!wrapperImagesRef.current) return

      const isBeyondLeftBoundary = xWrapper.get() - e.deltaY > 0
      if (isBeyondLeftBoundary) return xWrapper.set(0)

      const imagesWidth = wrapperImagesRef.current.getBoundingClientRect().width
      const rightBoundary = -imagesWidth + window.innerWidth
      const isBeyondRightBoundary = xWrapper.get() - e.deltaY < rightBoundary
      if (isBeyondRightBoundary) {
        return xWrapper.set(rightBoundary)
      }

      xWrapper.set(xWrapper.get() - e.deltaY)
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [xWrapper])

  useEffect(() => {
    let initialTouchPositionX = null;
    let initialTouchPositionY = null;

    const handleTouchStart = e => {
        if (!wrapperImagesRef.current) return;
        initialTouchPositionX = e.touches[0].clientX; // Salva la posizione iniziale del tocco sull'asse X
        initialTouchPositionY = e.touches[0].clientY; // Salva la posizione iniziale del tocco sull'asse Y
    };

    const handleTouchMove = e => {
        if (!wrapperImagesRef.current || initialTouchPositionX === null || initialTouchPositionY === null) return;

        const deltaX = initialTouchPositionX - e.touches[0].clientX;
        const deltaY = initialTouchPositionY - e.touches[0].clientY;

        // Determina se il movimento è più significativo sull'asse X che sull'asse Y
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault(); // Previene lo scroll verticale se il movimento è prevalentemente orizzontale

            const imagesWidth = wrapperImagesRef.current.getBoundingClientRect().width;
            const rightBoundary = -imagesWidth + window.innerWidth;
            const newPosX = xWrapper.get() - deltaX;

            if (newPosX > 0) {
                xWrapper.set(0);
            } else if (newPosX < rightBoundary) {
                xWrapper.set(rightBoundary);
            } else {
                xWrapper.set(newPosX);
            }
        }

        // Aggiorna la posizione iniziale per il prossimo movimento
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
  }, [xWrapper]);

  // useEffect(() => {
  //   let initialTouchPosition = null

  //   const handleTouchStart = e => {
  //     if (!wrapperImagesRef.current) return
  //     initialTouchPosition = e.touches[0].clientX
  //   }

  //   const handleTouchMove = e => {
  //     if (!wrapperImagesRef.current || initialTouchPosition === null) return

  //     const deltaY = initialTouchPosition - e.touches[0].clientX
  //     initialTouchPosition = e.touches[0].clientX

  //     const isBeyondLeftBoundary = xWrapper.get() - deltaY > 0
  //     if (isBeyondLeftBoundary) return xWrapper.set(0)

  //     const imagesWidth = wrapperImagesRef.current.getBoundingClientRect().width
  //     const rightBoundary = -imagesWidth + window.innerWidth
  //     const isBeyondRightBoundary = xWrapper.get() - deltaY < rightBoundary
  //     if (isBeyondRightBoundary) {
  //       return xWrapper.set(rightBoundary)
  //     }

  //     xWrapper.set(xWrapper.get() - deltaY)
  //   }

  //   const handleTouchEnd = () => {
  //     initialTouchPosition = null
  //   }

  //   window.addEventListener('touchstart', handleTouchStart)
  //   window.addEventListener('touchmove', handleTouchMove)
  //   window.addEventListener('touchend', handleTouchEnd)
  //   return () => {
  //     window.removeEventListener('touchstart', handleTouchStart)
  //     window.removeEventListener('touchmove', handleTouchMove)
  //     window.removeEventListener('touchend', handleTouchEnd)
  //   }
  // }, [xWrapper])

  useEffect(() => {
    const handleResize = () => {
      if (!wrapperImagesRef.current) return

      const imagesWidth = wrapperImagesRef.current.getBoundingClientRect().width
      const rightBoundary = -imagesWidth + window.innerWidth
      const isBeyondRightBoundary = xWrapper.get() < rightBoundary

      if (isBeyondRightBoundary) {
        xWrapperSpring.jump(rightBoundary)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [xWrapper, xWrapperSpring])

  useEffect(() => {
    const projectIndex = projectsData.findIndex(p => p.slug === projectSlug)
    if (projectIndex !== -1) {
      setCurrentProject(projectsData[projectIndex])
    } else {
      console.log('Project not found')
    }
  }, [projectSlug])


  const handleNextPreviousProject = direction => {
    const currentIndex = projectsData.findIndex(p => p.slug === projectSlug)
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= projectsData.length) newIndex = 0
    if (newIndex < 0) newIndex = projectsData.length - 1

    navigate(`/project/${projectsData[newIndex].slug}`)
  }

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
              position: 'fixed',
              top: 60,
              left: 0,
              pointerEvents: 'none',
              display: 'flex',
              width: 'min-content',
              height: '100%',
              x: xWrapperSpring,
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
