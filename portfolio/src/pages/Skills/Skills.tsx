import "./Skills.scss";

const skills = [
  { name: "React.js", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "JavaScript (ES6+)", level: "Intermediate" },
  { name: "HTML5 & CSS3", level: "Intermediate" },
  { name: "SCSS & Responsive Design", level: "Intermediate" },
  { name: "Redux Toolkit", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" }
];

const Skills = () => {
  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
