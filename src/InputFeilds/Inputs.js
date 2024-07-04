import React, { useState, useEffect } from "react";
import "./Inputs.css";

export default function Inputs(props) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCnic, setUserCnic] = useState("");
  const [userPhn, setUserPhn] = useState("");

  useEffect(() => {
    if (props.userEdit) {
      setUserName(props.userEdit.name);
      console.log(props.userEdit.name);
      setUserEmail(props.userEdit.email);
      setUserCnic(props.userEdit.cnic);
      setUserPhn(props.userEdit.phn);
    }
  }, [props.userEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: userName,
      email: userEmail,
      cnic: userCnic,
      phn: userPhn,
    };

    if (props.userEdit) {
      props.updateUser(newUser); //Updated User
      console.log(newUser);
    } else {
      props.addUser(newUser);
    }
    setUserName("");
    setUserEmail("");
    setUserCnic("");
    setUserPhn("");
    props.setUserEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-inputs">
        <div>
          <span>Name</span>
          <input
            type="text"
            value={userName}
            autoComplete="off"
            required
            className="form-inputs-inner"
            placeholder="Enter The Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <input
            type="email"
            value={userEmail}
            autoComplete="off"
            required
            className="form-inputs-inner"
            placeholder="Enter The Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <span>CNIC</span>
          <input
            type="text"
            value={userCnic}
            autoComplete="off"
            required
            className="form-inputs-inner"
            placeholder="Enter The CNIC"
            onChange={(e) => setUserCnic(e.target.value)}
          />
        </div>
        <div>
          <span>Phn</span>
          <input
            type="text"
            value={userPhn}
            autoComplete="off"
            required
            className="form-inputs-inner"
            placeholder="Enter The Phn No"
            onChange={(e) => setUserPhn(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-create-new" type="submit">
            {props.userEdit ? "Update User" : "Create New"}
          </button>
        </div>
      </div>
    </form>
  );
}
