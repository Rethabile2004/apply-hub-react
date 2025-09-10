import { Link } from "react-router-dom";

function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "40px 50px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
    marginTop: "20px",
    textDecoration: "none",
    display: "inline-block",
  };

  const imgStyle = {
    width: "180px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <img style={imgStyle} src="/src/assets/welcome.svg" alt="Welcome" />
          <h1>Welcome to ApplyHub</h1>
          <p>
            ApplyHub is your open gateway to submit applications for anything
            you need. No rigid categories. No confusing forms. Just a simple,
            streamlined experience designed to help you express your request
            clearly and confidently.
          </p>
          <Link to="/application-form" style={buttonStyle}>
            Get Started
          </Link>
        </div>
      </div>
      <div style={{ height: "40px" }}></div>
    </div>
  );
}

export default Home;
