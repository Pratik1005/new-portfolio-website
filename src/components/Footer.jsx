import {Link} from "react-router-dom";

export const Footer = () => {
  const getDay = () => new Date().toLocaleString("en-us", {weekday: "long"});
  return (
    <footer className="footer-ctn">
      <h3 id="contact" className="footer-text">
        Stay positive and have a great {getDay()}!
      </h3>
      <div className="footer-links">
        <Link
          to="https://www.linkedin.com/in/pratik-devle-296184160"
          target="_blank"
          className="footer-link"
        >
          Linkedin
        </Link>
        <Link
          to="https://github.com/Pratik1005"
          className="footer-link"
          target="_blank"
        >
          Github
        </Link>
        <Link
          to="https://twitter.com/DevlePratik"
          className="footer-link"
          target="_blank"
        >
          Twitter
        </Link>
      </div>
    </footer>
  );
};
