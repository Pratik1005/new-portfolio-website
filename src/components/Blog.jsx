import {Link} from "react-router-dom";
import curryFunction from "../assets/curry-function.png";
import deepShallowCopy from "../assets/deep-shallow-copy.jpg";
import letConst from "../assets/let-const-var.png";

const blogData = [
  {
    title: "Currying in JS",
    image: curryFunction,
    link: "https://pratikdevle.hashnode.dev/currying-in-js",
  },
  {
    title: "Deep copy and Shallow copy",
    image: deepShallowCopy,
    link: "https://pratikdevle.hashnode.dev/shallow-copy-and-deep-copy",
  },
  {
    title: "Var, Let and Const",
    image: letConst,
    link: "https://pratikdevle.hashnode.dev/var-let-and-const",
  },
];

export const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Blogs</h2>
      <div className="blog-ctn">
        {blogData.map((item, index) => (
          <article key={index} className="blog">
            <Link to={item.link} target="_blank" className="blog-link">
              <img src={item.image} alt={item.title} className="blog-img" />
            </Link>
            <h4 className="blog-title">
              <Link to={item.link} target="_blank" className="blog-link">
                {item.title}
              </Link>
            </h4>
          </article>
        ))}
      </div>
      <div className="cta">
        <Link
          to="https://pratikdevle.hashnode.dev/"
          target="_blank"
          className="primary-btn"
        >
          View All
        </Link>
      </div>
    </section>
  );
};
