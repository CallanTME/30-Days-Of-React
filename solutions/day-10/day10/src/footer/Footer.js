const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Copyright {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
