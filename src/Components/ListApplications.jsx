import { useContext, useState } from "react";
import { ApplicationsContext } from "./ApplicationProvider.jsx";
import "/src/Components/ListAppications.css"

function ListApplications() {
  const { applications } = useContext(ApplicationsContext);
  const [selectedApp, setSelectedApp] = useState(null);

  if (selectedApp === null) {
    return (
      <div className="container">
        <h1>Applications Submitted: {applications.length}</h1>
        {applications.length === 0 ? (
          <p className="empty-message">No applications submitted yet.</p>
        ) : (
          <table className="applications-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name & Surname</th>
                <th>Email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{app.name} {app.surname}</td>
                  <td>{app.email}</td>
                  <td>{app.position}</td>
                  <td>
                    <button
                      className="expand-button"
                      onClick={() => setSelectedApp(app)}
                    >
                      Expand
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  return (
    <div className="details-container">
      <h2>{selectedApp.name}</h2>
      <p><strong>Position:</strong> {selectedApp.position}</p>
      {/* Add more fields if needed */}
      <button className="back-button" onClick={() => setSelectedApp(null)}>
        ← Back to List
      </button>
    </div>
  );
}

export default ListApplications;