import { Link } from "react-router-dom";
import { useState } from "react";
function ApplicationForm() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
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
    width: "400px",
  };
  const buttonStyle = {
    padding: "12px 24px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 8px 11px #ccc",
    transition: "background 0.3s ease",
  };
  const buttonHover = {
    color: "blue",
  };
  const imgStyle = {
    width: "140px",
  };
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };
  const inputStyle = {
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 8px 11px #ccc",
  };

  const [next, setNext] = useState(false);
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    course: "",
    file: "",
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNext((prev) => (prev = !prev));
  };
  return (
    <div style={containerStyle}>
      <div style={contStyle}>
        <h3>Please enter Your Personal Information to Continue.</h3>
        {!next ? (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="email"
              placeholder="Email"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              placeholder="Surname"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              placeholder="Phone Number"
            />
            <button
              onMouseOver={(e) => (e.target.style.color = buttonHover.color)}
              onMouseOut={(e) => (e.target.style.color = buttonStyle.color)}
              style={buttonStyle}
            >
              Next
            </button>
          </form>
        ) : (
          <span></span>
        )}
        {next ? (
          <form action="" style={formStyle}>
            <select id="applicationType" name="applicationType">
              <option value="Software Developer as Vodacom">Job Application</option>
              <option value="Software Engineer at Sanlam">Scholarship</option>
              <option value="Project Manager at Berry's Solutions">Event Registration</option>
              <option value="Data Analyst Internship">Custom Request</option>
            </select>

            <label for="fileUpload">Upload your file:</label>
            <input type="file" id="fileUpload" name="fileUpload"/>

            <button
              onMouseOver={(e) => (e.target.style.color = buttonHover.color)}
              onMouseOut={(e) => (e.target.style.color = buttonStyle.color)}
              style={buttonStyle}
            >
              Submit
            </button>
          </form>
        ) : (
          <span></span>
        )}
      </div>
      <div style={contStyle}>
        <img style={imgStyle} src="/src/assets/form.svg" alt="" />
      </div>
    </div>
  );
}

export default ApplicationForm;
