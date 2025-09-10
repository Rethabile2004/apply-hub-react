import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: "15px 0",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  const handleHover = (e, isHovering) => {
    e.target.style.color = isHovering ? "#d4bfff" : "white";
    e.target.style.backgroundColor = isHovering ? "#0056b3" : "transparent";
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        Home
      </Link>
      <Link
        to="/application-form"
        style={linkStyle}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        Submit Application
      </Link>
      <Link
        to="/applications"
        style={linkStyle}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        View All Applications
      </Link>
      <Link
        to="/about"
        style={linkStyle}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        About Us
      </Link><Link
        to="/contact"
        style={linkStyle}
        onMouseOver={(e) => handleHover(e, true)}
        onMouseOut={(e) => handleHover(e, false)}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;