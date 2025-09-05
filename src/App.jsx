import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import ApplicationForm from "./Components/ApplicationForm.jsx";
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="application-form" element={<ApplicationForm/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
