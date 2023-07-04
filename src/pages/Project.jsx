import {NavMenu} from "../components/NavMenu";
import insight from "../assets/insight.png";
import assetPoint from "../assets/asset-point.png";
import assetPlay from "../assets/asset-play.png";
import notes from "../assets/notes-app.png";
import finQuiz from "../assets/quiz-app.png";
import liteSpeed from "../assets/component-library.png";
import {ProjectCard} from "../components/ProjectCard";
import {Footer} from "../components/Footer";

const projectData = [
  {
    title: "Insight",
    img: insight,
    text: "Social media app which you can use to share your insight and grow with the community",
    projectUrl: "https://shareinsight.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/social-media-app",
  },
  {
    title: "AssetPoint",
    img: assetPoint,
    text: "Ecommerce website to buy books on Personal Finance",
    projectUrl: "https://assetpointapp.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/assetpoint",
  },
  {
    title: "AssetPlay",
    img: assetPlay,
    text: "Video Library App to help you with Personal Finance",
    projectUrl: "https://assetplay.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/asset-play",
  },
  {
    title: "MyNotes",
    img: notes,
    text: "Note taking app to help you take notes and increase productivity",
    projectUrl: "https://pratiknotes.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/notes-app",
  },
  {
    title: "FinQuiz",
    img: finQuiz,
    text: "Quiz app to test and learn your personal finance knowledge",
    projectUrl: "https://finquizapp.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/react-quiz-app",
  },
  {
    title: "LiteSpeedUI",
    img: liteSpeed,
    text: "A component library made using HTML, CSS and vanilla JS",
    projectUrl: "https://litespeedui.netlify.app/",
    githubUrl: "https://github.com/Pratik1005/component-library",
  },
];

export const Project = () => {
  return (
    <div>
      <NavMenu />
      <h1 className="project-pg-title">Projects</h1>
      <section className="project-ctn">
        {projectData.map((item, index) => (
          <ProjectCard projectData={item} index={index} />
        ))}
      </section>
      <Footer />
    </div>
  );
};
