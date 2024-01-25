import './Project.css';

const ProjectFooter = ({ name, category }) => {
  return (
    <footer className="project-footer">
      <div className="footer-content">
        <p>{name}</p>
        <p className="footer-credits">{category}</p>
      </div>
    </footer>
  );
};

export default ProjectFooter;