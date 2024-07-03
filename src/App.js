import React, { useState } from "react";
import "./App.css";
import Inputs from "./InputFeilds/Inputs";
import User from "./Userdata/User";

function App() {
  const u = [];

  const [users, setUsers] = useState(u);
  const [userEdit, setUserEdit] = useState();
  console.log();
  const addNewUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const updateUser = (updatedUser) => {
    console.log(updatedUser); //Updated Array new
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.phn == updatedUser.phn ? updatedUser : user
      )
    );
  };
  const deleteUser = (phn) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.phn !== phn));
  };

  const editUser = (user) => {
    setUserEdit(user);
    console.log(user);
  };

  return (
    <div className="App">
      <h1>CRUD With React</h1>
      <Inputs
        addUser={addNewUser}
        updateUser={updateUser}
        userEdit={userEdit}
        setUserEdit={setUserEdit}
      />
      <User users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
