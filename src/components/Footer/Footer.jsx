import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">

        <div className="footer_logo">
          <h2>NextGenOera</h2>
          <p>Innovate The Future with AI driven technology solutions.</p>
        </div>

        <div className="footer_links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>

        <div className="footer_contact">
          <h3>Contact</h3>
          <p>Email: contact@nextgenoera.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer_bottom">
        <p>© 2026 NextGenOera | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;