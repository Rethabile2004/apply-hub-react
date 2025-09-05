import { Link } from "react-router-dom";
function Footer() {

    const footerStyle={
        backgroundColor:"black",
        color:"white",
        textAlign:"center",
        fontSize:"14px",
        padding:"20px 0",
        marginTop:"auto"
    }
  return (
    <>
      <footer style={footerStyle}>
        &copy {new Date().getFullYear()} Application Capture, All Rights Reserved.
      </footer>
    </>
  );
}

export default Footer;
