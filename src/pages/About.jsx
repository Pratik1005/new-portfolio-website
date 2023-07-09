import {NavMenu} from "../components/NavMenu";
import pratik from "../assets/pratik.jpg";
import {Footer} from "../components/Footer";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo-3.jpg";
import photo4 from "../assets/photo-4.jpg";
import photo5 from "../assets/photo-5.jpg";
import photo6 from "../assets/photo-6.jpg";

export const About = () => {
  return (
    <>
      <NavMenu />
      <section className="hero-text">
        <h1>I'm Pratik.</h1>
      </section>
      <section className="bio-data">
        <div>
          <img src={pratik} alt="Pratik" className="bio-img" />
        </div>
        <div className="bio-right">
          <h3 className="bio-title">
            I'm a Frontend Engineer from Mumbai, India.
          </h3>
          <p className="bio-text">
            Coming from non-cs background I started learing web development from
            various sources, built some projects and started my journey as
            Frontend Engineer.
          </p>
          <p>
            Outside work, I like to do photography, explore on personal finance
            and watching thriller movies.
          </p>
        </div>
      </section>
      <section className="photo-ctn">
        {[photo3, photo5, photo6, photo1, photo4, photo2].map((item, index) => (
          <img
            key={index}
            src={item}
            alt="gallery collection"
            className="gallery-img"
          />
        ))}
      </section>
      <Footer />
    </>
  );
};
