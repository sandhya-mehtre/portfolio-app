import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h1>Hi, I'm Sandhya 👋</h1>
        <h2>A Passionate Frontend Developer</h2>
        <p>
          I specialize in building responsive and user-friendly web applications using React.js, TypeScript, and SCSS.
          With a keen eye for design and performance optimization, I create seamless digital experiences.
        </p>

        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
