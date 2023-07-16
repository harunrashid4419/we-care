import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-section">
        <div className="left">
          <h4>WeCare</h4>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Fasilities</a>
            </li>
            <li>
              <a href="#">Find Doctor</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button>Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
