/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import useFetch from "./FetchUser";
import WithAuth from "../HOC/WithAuth";

function EditUser() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    gender: "",
  });
  const [data, loading, error] = useFetch("http://localhost:3001/users");

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setNewUser({ email: "", password: "", gender: "" });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <>
      <div className="card" style={{ width: "700px" }}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <h5 className="card-header">Pascal Mart</h5>
        <div className="card-body">
          <h5 className="card-title mb-3">Input Users</h5>

          <form onSubmit={handleAddUser} style={{ color: "black" }}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input
                type="text"
                name="password"
                className="form-control"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                name="gender"
                value={newUser.gender}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px", width: "300px", fontSize: "20px" }}
            >
              Submit
            </button>
          </form>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Gender</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      style={{ marginRight: "5px" }}
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WithAuth(EditUser);
