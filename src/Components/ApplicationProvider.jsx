import { useEffect } from "react";
import { createContext, useState } from "react";
import { loadApplications, saveApplications } from "./localStorage.jsx";
// eslint-disable-next-line react-refresh/only-export-components
export const ApplicationsContext = createContext();

const ApplicationProvider = ({ children }) => {
  const loadedApplications = loadApplications();
  const [applications, setApplications] = useState(loadedApplications);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const load = loadApplications();
    setApplications(load);
  }, [count]);

  const addApplication = (name, surname, email, phoneNumber, position) => {
    // if(applications.filter)
    applications.forEach((element) => {
      element.email===email;
      alert("Email already exists");
      return
    });
    saveApplications([
      ...applications,
      {
        name: name,
        surname: surname,
        email:email,
        phoneNumber: phoneNumber,
        position: position,
      },
    ]);
    setCount((prev) => prev + 1);
    // setApplications((prev) => [
    //   ...prev,
    //   { name, surname, email, phoneNumber, position },
    // ]);
  };

  return (
    <ApplicationsContext.Provider value={{ applications, addApplication }}>
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationProvider;
