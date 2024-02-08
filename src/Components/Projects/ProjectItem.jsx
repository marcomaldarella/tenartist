/* eslint-disable react/prop-types */

const ProjectItem = ({
  name,
  category,
  imagePath,
  videoPath,
  isWide,
  isVideo,
}) => {
  const renderContent = () => {
    if (isVideo && videoPath) {
      // Renderizza un elemento video se 'isVideo' è true e 'videoPath' esiste
      return (
        <video width="100%" height="auto" controls>
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    } else if (imagePath) {
      // Renderizza un'immagine se 'imagePath' esiste
      return (
        <div
          className="project-img"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      )
    } else {
      // Opzione per gestire l'assenza di un'immagine
      // Puoi renderizzare un placeholder o nulla
      return (
        <div className="project-img-placeholder">Immagine non disponibile</div>
      )
    }
  }

  return (
    <div className={`project ${isWide ? 'project-wide' : ''}`}>
      {renderContent()}
      <div className="project-name">
        <p>{name}</p>
      </div>
      <div className="project-category">
        <p>{category}</p>
      </div>
    </div>
  )
}

export default ProjectItem
