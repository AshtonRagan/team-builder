import React, { useState } from "react";

function Form(props) {
  const [Member, setMember] = useState({
    Name: "",
    Email: "",
    Role: ""
  });

  const handelChanges = ele => {
    setMember({ ...Member, [ele.target.id]: ele.target.value });
  };

  const submitForm = ele => {
    ele.preventDefault();
    props.newPeep(Member);
    setMember({ Name: "", Email: "", Role: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Name">Name: </label>

      <input
        type="text"
        placeholder="Enter Name"
        id="Name"
        value={Member.Name}
        onChange={handelChanges}
      />

      <label htmlFor="Email">Email: </label>

      <input
        type="text"
        placeholder="Enter Email"
        id="Email"
        value={Member.Email}
        onChange={handelChanges}
      />

      <label htmlFor="Role">Role: </label>

      <input
        type="text"
        placeholder="Enter Role"
        id="Role"
        value={Member.Role}
        onChange={handelChanges}
      />
      <button type="submit">Add Person</button>
    </form>
  );
}

export default Form;
