import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">SolHydra</h2>
          <p>Pure hydration for the modern world.</p>
        </div>
        
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">solhydra@gmail.com</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 SolHydra Water. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
