import { Link } from "react-router-dom";
function NavBar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    backgroundColor: "blue",
    color: "white",
    padding: "15px",
  };
  const linkStyle = {
    textDecoration: "white",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const hoverStyle = {
    color: "purple",
  };
  return (
    <>
      <nav style={navStyle}>
        <Link
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          style={linkStyle}
          to="/"
        >
          Home
        </Link>
        <Link
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          style={linkStyle}
          to="/application-form"
        >
          Submit Application
        </Link>
        <Link
          onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          style={linkStyle}
          to="/applications"
        >
          View All Applications
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
