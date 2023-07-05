import assetPoint from "../assets/asset-point.png";
import assetPlay from "../assets/asset-play.png";
import insight from "../assets/insight.png";
import myNotes from "../assets/notes-app.png";
import finQuiz from "../assets/quiz-app.png";
import liteSpeed from "../assets/component-library.png";
import {NavLink} from "react-router-dom";

export const ProjectSection = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-slide">
        {[assetPlay, insight, assetPoint, myNotes, finQuiz, liteSpeed].map(
          (item, index) => (
            <img key={index} src={item} alt={item} className="project-img" />
          )
        )}
      </div>
      <div className="cta">
        <NavLink to="/projects" className="primary-btn">
          View All
        </NavLink>
      </div>
    </section>
  );
};
