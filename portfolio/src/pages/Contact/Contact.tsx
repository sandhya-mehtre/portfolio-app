import "./Contact.scss";

const contactDetails = [
  { label: "Email", value: "sandhyamehtre28@gmail.com" },
  { label: "Phone", value: "+91-7420840830" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/sandhya-bobade-6378bb342/" },
  { label: "GitHub", value: "https://github.com/sandhya-mehtre" },
  { label: "Location", value: "Pune, India" },
];

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-container">
        {/* Contact Details Section */}
        <div className="contact-info">
          {contactDetails.map((detail, index) => (
            <div key={index} className="contact-card">
              <strong>{detail.label}:</strong> 
              {detail.label === "LinkedIn" || detail.label === "GitHub" ? (
                <a href={detail.value} target="_blank" rel="noopener noreferrer">{detail.value}</a>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
