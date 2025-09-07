import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import ApplicationForm from "./Components/ApplicationForm.jsx";
import ApplicationProvider from "./Components/ApplicationProvider.jsx";
import ListApplications from "./Components/ListApplications.jsx";
import ExpandApplication from "./Components/ExpandApplication.jsx";
function App() {
  return (
    <ApplicationProvider>
      <Router>
        <div>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application-form" element={<ApplicationForm />} />
              <Route path="/applications" element={<ListApplications />} />
                           <Route path="/page" element={<ExpandApplication />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApplicationProvider>
  );
}

export default App;