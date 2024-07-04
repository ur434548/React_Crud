import React, { useState } from "react";
import "./App.css";
import Inputs from "./InputFeilds/Inputs";
import User from "./Userdata/User";
import Errormodal from "./Errormodal";

function App() {
  const u = [
    
  ];

  const [users, setUsers] = useState(u);
  const [userEdit, setUserEdit] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState();
  const [selectUser, setSelectUser] = useState();
  console.log()
  const addNewUser = (user) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  const updateUser = (updatedUser) => {
    console.log(updatedUser);//Updated Array new
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.phn==updatedUser.phn ? updatedUser : user
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
  const openModal = (action, user) => {
    setModalAction(action);
    setSelectUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalAction(null);
    setSelectUser(null);
  };

  const confirmAction = () => {
    if (modalAction === "delete") {
      deleteUser(selectUser.phn);
    } else if (modalAction === "edit") {
      editUser(selectUser);
    }
    closeModal();
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
      <User users={users} deleteUser={deleteUser} editUser={editUser}  openModal={openModal}/>
      <Errormodal
        isOpen={modalOpen}
        closeModal={closeModal}
        confirmAction={confirmAction}
      >
        Are you sure you want to {modalAction} this user?
      </Errormodal>
    </div>
  );
}

export default App;
