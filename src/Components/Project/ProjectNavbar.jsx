import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';


const ProjectNavBar = ({ onNext, onPrevious }) => {
  const navigate = useNavigate();

  return (
    <nav className="project-nav">
      <button onClick={onPrevious}>Left</button>
      <div className="project-nav-center">
        <button onClick={() => navigate('/projects')}>Close</button>
      </div>
      <button onClick={onNext}>Right</button>
    </nav>
  );
};

export default ProjectNavBar;