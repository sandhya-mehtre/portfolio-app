import "./Experience.scss";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "XYZ Tech",
    duration: "2021 - Present",
    description: "Developing and optimizing scalable web applications using React.js, TypeScript, and Redux.",
    techStack: ["React", "TypeScript", "Redux", "SCSS"],
  },
  {
    role: "Frontend Developer",
    company: "ABC Solutions",
    duration: "2019 - 2021",
    description: "Worked on building responsive UI components and enhancing website performance.",
    techStack: ["JavaScript", "React", "CSS", "Webpack"],
  },
  {
    role: "Junior Frontend Developer (Freelance)",
    company: "Freelance",
    duration: "2018 - 2019",
    description: "Built web applications for startups, focusing on UI/UX and performance optimization.",
    techStack: ["Angular", "Bootstrap", "Firebase"],
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
