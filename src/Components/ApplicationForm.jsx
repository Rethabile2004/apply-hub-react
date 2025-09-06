import { useState, useContext } from "react";
import { ApplicationsContext } from "./ApplicationProvider";

function ApplicationForm() {
  const { addApplication } = useContext(ApplicationsContext);

  const [next, setNext] = useState(false);
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    position: "",
    file: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (input.name.trim()) {
      setNext(true);
    } else {
      alert("Please enter your name to continue.");
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (input.position.trim()) {
      addApplication(input);
      alert("Application Submitted Successfully!");
    } else {
      alert("Please select a position.");
    }
  };

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
    color: "black",
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
  const selectStyle = {
    padding: "8px 16px",
    fontSize: "13px",
    border: "1px solid #ccc",
    borderRadius: "9px",
  };

  return (
    <div style={containerStyle}>
      <div style={contStyle}>
        <h3>Please enter Your Personal Information to Continue.</h3>
        {!next ? (
          <form onSubmit={handleNext} style={formStyle}>
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              name="name"
              required
              placeholder="First Name"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              name="surname"
              required
              placeholder="Surname"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="email"
              name="email"
              required
              placeholder="Email"
            />
            <input
              onChange={handleInput}
              style={inputStyle}
              type="text"
              name="phoneNumber"
              required
              placeholder="Phone Number"
            />
            <button
              onMouseOver={(e) => (e.target.style.color = buttonHover.color)}
              onMouseOut={(e) => (e.target.style.color = buttonStyle.color)}
              style={buttonStyle}
              type="submit"
            >
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleFinalSubmit} style={formStyle}>
            <select
              name="position"
              style={selectStyle}
              onChange={handleInput}
              required
            >
              <option value="">Select an Option</option>
              <option value="Software Developer as Vodacom">
                Software Developer as Vodacom
              </option>
              <option value="Software Engineer at Sanlam">
                Software Engineer at Sanlam
              </option>
              <option value="Project Manager at Berry's Solutions">
                Project Manager at Berry's Solutions
              </option>
              <option value="Data Analyst Internship">
                Data Analyst Internship
              </option>
            </select>

            <label htmlFor="fileUpload">Upload your file:</label>
            <input
              type="file"
              id="fileUpload"
              name="file"
              onChange={handleFileUpload}
            />

            <button
              onMouseOver={(e) => (e.target.style.color = buttonHover.color)}
              onMouseOut={(e) => (e.target.style.color = buttonStyle.color)}
              style={buttonStyle}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div style={contStyle}>
        <h6>{input.name}</h6>
        <img style={imgStyle} src="/src/assets/form.svg" alt="" />
      </div>
    </div>
  );
}

export default ApplicationForm;