import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Notes ni kit. </p>
      <div className="footer-link">
        <a href="https://www.youtube.com/watch?v=zO3nTu4rCKQ">
         Click This! Not Clickbait :0 
         </a>
      </div>
    </footer>
  );
};

export default Footer;
