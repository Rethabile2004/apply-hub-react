import { Link } from "react-router-dom";
function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  };
  const contStyle = {
    backgroundColor: "white",
    padding: "40px 50px",
    borderRadius: "12px",
    // boxShadow: "0 4px 12px #ccc",
    textAlign: "center",
    width:"530px"
  };
  const buttonStyle={
    padding:"12px 24px",
    background:"blue",
    color:"white",
    border:"none",
    borderRadius:"8px",
    fontSize:"16px",
    cursor:"pointer",
    transition:"background 0.3s ease"
  }
  const buttonHover={
    color:"blue"
  }
  const imgStyle={
    width:"180px"
  }
  return (
    <div style={containerStyle}>
      <div style={contStyle}>
        <img style={imgStyle} src="/src/assets/welcome.svg" alt="" />
        <h1>Welcome To My Website</h1>
        <p>
          ApplyHub is your open gateway to submit applications for anything you
          need. No rigid categories. No confusing forms. Just a simple,
          streamlined experience designed to help you express your request
          clearly and confidently.
        </p>
        <button onMouseOver={(e)=>e.target.style.color= buttonHover.color} onMouseOut={(e)=>e.target.style.color= buttonStyle.color} style={buttonStyle}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
