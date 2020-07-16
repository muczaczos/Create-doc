import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* That sentence bottom mean: if we have projects then do maping, if
    we don't have projects don't do maping  */}
      {projects &&
        projects.map((project) => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} key={project.id} />;
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
