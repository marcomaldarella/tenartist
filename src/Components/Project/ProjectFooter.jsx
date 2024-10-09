import './Project.css';

const ProjectFooter = ({ name, category }) => {
  return (
    <footer className="project-footer">
      <div className="footer-content-1">
        <p className="footer-credits">{name}</p>
      </div>
      <div className="footer-content-2">
      <p className="footer-credits-2">{category}</p>
      </div>
    </footer>
  );
};

export default ProjectFooter;


