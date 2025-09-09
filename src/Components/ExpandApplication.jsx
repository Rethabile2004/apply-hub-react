import { useContext } from "react";
import { ApplicationsContext } from "./ApplicationProvider.jsx";

function ExpandApplication({ index }) {
  // eslint-disable-next-line no-unused-vars
  const { application, addApplication } = useContext(ApplicationsContext);

  return (
    <div>
      <h1>{application[index].name}</h1>
    </div>
  );
}

export default ExpandApplication;
