import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";
function UserList() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const [currentUser, setCurrentUser] = useState(null); // [1

  const createUser = async () => {
    try {
      const status = await client.createUser(user);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  const selectUser = async (user) => {
    try {
      console.log("user:" + user);
      console.log("id:" + user._id);
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      console.log(user);
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };


  const fetchUser = async () => {
    const user = await client.account();
    setCurrentUser(user);
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
    fetchUser();
  }, []);

  return (
    <div>
      {currentUser && currentUser.role === "ADMIN" && (
        <>
          <h2>Users List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
              <tr>
                <td>
                  <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                  <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </td>
                <td>
                  <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                </td>
                <td>
                  <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                </td>
                <td>
                  <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </td>
                <td>
                  <BsFillCheckCircleFill onClick={updateUser}
                    className="me-2 text-success fs-1 text" />
                  <BsPlusCircleFill onClick={createUser}
                    className="text-primary fs-1 text" />
                </td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <Link to={`/project/users/${user._id}`}>{user.username}</Link>
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <button className="btn btn-danger me-2">
                      <BsTrash3Fill onClick={() => deleteUser(user)} />
                    </button>
                    <button className="btn btn-warning me-2">
                      <BsPencil onClick={() => selectUser(user)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {currentUser && currentUser.role !== "ADMIN" && (
        <Navigate to="/project/signin" />
      )}
    </div>
  );
}

export default UserList;
