import "./Projects.scss";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills, experience, and projects using React and TypeScript.",
    techStack: ["React", "TypeScript", "SCSS"],
    link: "https://sandhya-mehtre-portfolio.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce platform with cart, checkout, and payment integration.",
    techStack: ["React", "Redux", "Firebase"],
    link: "https://myecommerce.com",
  },
  {
    title: "Youtube clone app",
    description: "A youtube clone app developed using reactjs and typescript",
    techStack: ["React", "TypeScript", "SCSS"],
    link: "https://myfoodapp.com",
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
