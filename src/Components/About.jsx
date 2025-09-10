import React from "react";
import aboutImg from "../assets/about.svg";

const About = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "450px",
  };

  const imageStyle = {
    width: "140px",
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
    lineHeight: "1.6",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={aboutImg} alt="About QuizMaster" style={imageStyle} />
        <h1 style={titleStyle}>About QuizMaster</h1>
        <p style={textStyle}>
          QuizMaster is a fun and interactive quiz platform designed to help you
          learn, test your knowledge, and challenge your friends. Our goal is to
          make learning engaging and rewarding, while giving you instant feedback
          on your performance.
        </p>
      </div>
    </div>
  );
};

export default About;
