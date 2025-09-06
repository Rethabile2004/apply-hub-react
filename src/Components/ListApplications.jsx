import { useContext } from "react";
import { ApplicationsContext } from "./ApplicationProvider.jsx";

function ListApplications() {
  const { applications } = useContext(ApplicationsContext);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Applications Submitted: {applications.length}</h1>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <h3>{applications.length}</h3>
        // <ul>
        //   {applications.map((app, index) => (
        //     <li key={index}>
        //       <strong>{app.name} {app.surname}</strong> — {app.position}
        //     </li>
        //   ))}
        // </ul>
      )}
    </div>
  );
}

export default ListApplications;