import React, { useState } from "react";
import "./App.css";
import Form from "./form";
import TeamMembers from "./TeamMembers";

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      Name: "Jess",
      Email: "Jess@JessWolfs.com",
      Role: "Head Of Creation"
    },
    {
      id: 2,
      Name: "DorDor",
      Email: "Dor@SnekBois.com",
      Role: "noodle KAboodle"
    }
  ]);
  const addNewMember = ele => {
    const newMember = {
      id: Date.now(),
      Name: ele.Name,
      Email: ele.Email,
      Role: ele.Role
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <Form newPeep={addNewMember} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
