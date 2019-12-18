import React from "react";

const TeamMember = props => {
  return (
    <div>
      {props.teamMember.map(ele => (
        <div>
          <h1>{ele.Name}</h1>
          <h2>{ele.Email}</h2>
          <h3>{ele.Role}</h3>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
