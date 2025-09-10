import { useState, useContext } from "react";
import { ApplicationsContext } from "./ApplicationProvider";
import { useNavigate } from "react-router-dom";

function ApplicationForm() {
  const navigate = useNavigate();
  const { addApplication } = useContext(ApplicationsContext);

  const [next, setNext] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      addApplication(
        input.name,
        input.surname,
        input.email,
        input.phoneNumber,
        input.position
      );
      alert("Application Submitted Successfully!");
      setSubmitted(true);
    } else {
      alert("Please select a position.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection:"row",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "40px",
      padding: "40px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px 14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    select: {
      padding: "10px 14px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    image: {
      width: "140px",
      marginTop: "20px",
    },
    successCard: {
      margin: "60px auto",
      padding: "40px",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
      borderRadius: "20px",
      boxShadow: "0 4px 12px #ccc",
    },
  };

  if (submitted) {
    return (
      <div style={styles.successCard}>
        <h3>Application Submitted Successfully!</h3>
        <img style={styles.image} src="/src/assets/happy.svg" alt="Success" />
        <button
          style={styles.button}
          onClick={() => navigate("/applications")}
        >
          Track Application
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Enter Your Personal Information</h3>
        {!next ? (
          <form onSubmit={handleNext} style={styles.form}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="First Name"
              value={input.name}
              onChange={handleInput}
              required
            />
            <input
              style={styles.input}
              type="text"
              name="surname"
              placeholder="Surname"
              value={input.surname}
              onChange={handleInput}
              required
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={handleInput}
              required
            />
            <input
              style={styles.input}
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={input.phoneNumber}
              onChange={handleInput}
              required
            />
            <button style={styles.button} type="submit">
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleFinalSubmit} style={styles.form}>
            <select
              name="position"
              style={styles.select}
              value={input.position}
              onChange={handleInput}
              required
            >
              <option value="">Select a Position</option>
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

            <button style={styles.button} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ApplicationForm;