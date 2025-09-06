import { createContext, useState } from "react";

export const ApplicationsContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const addApplication = (name, surname, email, phoneNumber, position) => {
    setApplications((prev) => [
      ...prev,
      { name, surname, email, phoneNumber, position },
    ]);
  };

  return (
    <ApplicationsContext.Provider value={{ applications, addApplication }}>
      {children}
    </ApplicationsContext.Provider>
  );
};

export default ApplicationProvider;