const ProjectItem = ({ name, category, imagePath, videoPath, isWide, isVideo, projectId }) => {
  const renderContent = () => {
    if (isVideo && videoPath) {
      // Controlla se il videoPath è un URL Vimeo
      if (videoPath.includes("vimeo.com")) {
        const vimeoId = videoPath.split("/").pop(); // Estrai l'ID del video da Vimeo URL
        const vimeoEmbedUrl = `https://player.vimeo.com/video/${vimeoId}`;
        return (
          <iframe
            src={vimeoEmbedUrl}
            width="100%"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      } else {
        // Per video self-hosted
        return (
          <div>
            <video width="100%" height="auto" controls>
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }
    } else if (imagePath) {
      // Renderizza un'immagine se 'imagePath' esiste
      return (
        <div
          className="project-img"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      );
    } else {
      // Opzione per gestire l'assenza di un'immagine
      return (
        <div className="project-img-placeholder">Immagine non disponibile</div>
      );
    }
  };

  const projectNameClass = projectId === 4 ? "project-name special-project-name" : "project-name";



  return (
    <div className={`project ${isWide ? 'project-wide' : ''}`}>
      {renderContent()}
      <div className={projectNameClass}> {/* Utilizza qui la variabile projectNameClass */}
        <p>{name}</p>
      </div>
      <div className="project-category">
        <p>{category}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
