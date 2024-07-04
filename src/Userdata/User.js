import React from "react";
import "./User.css";

export default function User(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Email</th>
            <th>CNIC</th>
            <th>Phn No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {props.users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cnic}</td>
              <td>{user.phn}</td>
              <td>
                <button
                  className="btn-table"
                  onClick={() => props.openModal("edit", user)}
                >
                  Edit
                </button>
                <button
                  className="btn-table-delete"
                  onClick={() => props.openModal("edit", user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
