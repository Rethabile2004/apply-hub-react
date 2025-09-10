import React from "react";
import contactImg from "../assets/contact.svg"; 

const Contact = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "400px",
  };

  const imageStyle = {
    width: "120px",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={contactImg} alt="Contact QuizMaster" style={imageStyle} />
        <h1 style={titleStyle}>Contact Us</h1>
        <p style={textStyle}>Have questions or feedback? Send us a message!</p>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea
          placeholder="Your Message"
          rows="4"
          style={{ ...inputStyle, resize: "none" }}
        />
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "blue")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "blue")}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
