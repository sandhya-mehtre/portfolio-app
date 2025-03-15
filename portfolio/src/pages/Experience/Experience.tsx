import "./Experience.scss";

const experiences = [
  {
    role: "Junior Frontend Developer (Freelance)",
    company: "Freelance",
    duration: "Oct 2024 - Present",
    description: "Built web applications for coaching classes, focusing on UI/UX and performance optimization.",
    techStack: ["HTML5", "CSS3", "JavaScript","Typescript","Reactjs","Redux toolkit"],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h1 className="experience-title">Work Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2 className="experience-role">{exp.role}</h2>
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="tech-stack">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
