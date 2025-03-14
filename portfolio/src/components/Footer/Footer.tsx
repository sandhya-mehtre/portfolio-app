import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
