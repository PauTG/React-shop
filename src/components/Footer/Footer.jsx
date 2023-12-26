import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/alonso-taverna-903266192/"
          target="blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
          <p>LinkedIn</p>
        </a>
      </div>
      <div>
        <a href="https://fakestoreapi.com/" target="blank">
          <i className="fa-solid fa-shop"></i>
          <p>Fake Store API</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
