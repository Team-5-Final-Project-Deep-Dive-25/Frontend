import './userpanal.css'
import React, { useEffect, useState } from "react";
import { getAllUsers, changeUserRole, deleteUser } from "../../../Apis/api";


const UsersPanel = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchUsers = async (page = 1) => {
    setLoading(true);
    try {
      const res = await getAllUsers(token, page);
      setUsers(res.data || []);
      setPagination({
        currentPage: res.currentPage || 1,
        totalPages: res.totalPages || 1,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (id, role) => {
    const newRole = role === "ADMIN" ? "USER" : "ADMIN";
    try {
      const res = await changeUserRole(token, id, newRole);
      alert(res.message || "Role updated");
      fetchUsers(pagination.currentPage);
    } catch (error) {
      console.error(error);
      alert("Failed to change role");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await deleteUser(token, id);
      alert(res.message || "User deleted");
      fetchUsers(pagination.currentPage);
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container userpanal mt-4">
      <h3 className="mb-3">Users Management</h3>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>{u.gender}</td>
                  <td>{u.address}</td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleRoleChange(u._id, u.role)}
                    >
                      Change Role
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: pagination.totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn ${
              pagination.currentPage === i + 1 ? "btn-primary" : "btn-light"
            } me-2`}
            onClick={() => fetchUsers(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersPanel;
