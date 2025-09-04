import React, {useState } from "react";
import "./account.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name must contain only letters";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name must contain only letters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    // Current Password
    if (!formData.currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    // New Password
    if (formData.newPassword.trim() && formData.newPassword.length < 6) {
      newErrors.newPassword = "New password must be at least 6 characters";
    }

    // Confirm New Password
    if (formData.newPassword !== formData.confirmNewPassword) {
      newErrors.confirmNewPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    alert("Changes canceled");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    });
    setErrors({});
  };

  const handleSaveChanges = () => {
    if (!validateForm()) return;

    alert("Changes saved successfully!");
    console.log("Form Data ✅", formData);

    // Reset form after saving
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    });
    setErrors({});
  };

  return (
    <div className="account-container">
      {/* Sidebar Links */}
      <aside className="sidebar">
        <h4 className="sidebar-title">Manage My Account</h4>
        <ul>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Address Book</a></li>
          <li><a href="#">My Payment Options</a></li>
        </ul>

        <h4 className="sidebar-title">My Orders</h4>
        <ul>
          <li><a href="#">My Returns</a></li>
          <li><a href="#">My Cancellations</a></li>
        </ul>

        <h4 className="sidebar-title">My Wishlist</h4>
      </aside>

      {/* Profile Form */}
      <div className="edit-profile-container">
        <h3>Edit Your Profile</h3>
        <form>
          <div className="input-row">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <h4>Password Changes</h4>

          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          {errors.currentPassword && <p className="error">{errors.currentPassword}</p>}

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}

          <input
            type="password"
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            value={formData.confirmNewPassword}
            onChange={handleChange}
          />
          {errors.confirmNewPassword && <p className="error">{errors.confirmNewPassword}</p>}

          <div className="btn-group">
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
            <button type="button" onClick={handleSaveChanges} className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
