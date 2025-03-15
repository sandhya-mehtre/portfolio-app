import "./About.scss";

const aboutSections = [
    {
      title: "Educational Background",
      content: "B.Sc, B.Ed with CGPA of 8.26",
    },
    {
      title: "Work Experience",
      content: "6 months of experience as a Frontend Developer specializing in React.js & TypeScript.",
    },
    {
      title: "Certifications",
      content: "HTML & CSS - Certification course for beginners | JavaScript - The Complete Guide 2024 | React - The Complete Guide 2024 (Including Redux)",
    },
    {
      title: "Hobbies",
      content: "Coding, Reading Tech Blogs, Painting",
    },
    {
      title: "Interests",
      content: "Web Performance Optimization, UI/UX Design",
    },
    {
      title: "Contact Details",
      content: "Email: sandhyamehtre28@gmail.com | Phone: +91-7420840830",
    },
    {
      title: "Location",
      content: "Pune, India",
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
