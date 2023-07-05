import {Link} from "react-router-dom";

export const ProjectCard = ({projectData, index}) => {
  return (
    <article className="project-card" key={index}>
      <img
        src={projectData.img}
        className="project-img"
        alt={projectData.text}
      />

      <h4 className="project-title">{projectData.title}</h4>
      <p className="project-text">{projectData.text}</p>
      <div className="project-cta">
        <Link
          to={projectData.projectUrl}
          target="_blank"
          className="primary-btn"
        >
          Live Project
        </Link>
        <Link
          to={projectData.githubUrl}
          target="_blank"
          className="secondary-btn"
        >
          Source Code
        </Link>
      </div>
    </article>
  );
};
