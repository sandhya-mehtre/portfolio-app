import "./About.scss";

const aboutSections = [
    {
      title: "Educational Background",
      content: "Bachelor's Degree in Computer Science from XYZ University (2018).",
    },
    {
      title: "Work Experience",
      content: "4+ years of experience as a Frontend Developer specializing in React.js & TypeScript.",
    },
    {
      title: "Certifications",
      content: "Certified React Developer | Advanced JavaScript Certification | GitHub Expert Certification.",
    },
    {
      title: "Hobbies",
      content: "Coding, Reading Tech Blogs, Gaming, Playing Guitar, and Traveling.",
    },
    {
      title: "Interests",
      content: "Web Performance Optimization, UI/UX Design, and Open Source Contributions.",
    },
    {
      title: "Contact Details",
      content: "Email: myemail@example.com | Phone: +91 98765 43210",
    },
    {
      title: "Location",
      content: "Mumbai, India",
    },
  ];
  

const About = () => {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-container">
        {aboutSections.map((section, index) => (
          <div key={index} className="about-card">
            <h2 className="about-card-title">{section.title}</h2>
            <p className="about-card-content">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
