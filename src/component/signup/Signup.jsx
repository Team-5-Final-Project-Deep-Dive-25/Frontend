import { useState } from "react";
import "./signup.css";
import signup_img from './../../assets//images/register.jpg';
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!gender) newErrors.gender = "Gender is required";
    if (!address) newErrors.address = "Address is required";
    if (!email.includes("@")) newErrors.email = "Email is invalid";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, gender, address, email, password });
      alert("Registered successfully!");
      setName("");
      setGender("");
      setAddress("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="register-container">
      <div className="img-box">
        <img src={signup_img} alt="register" />
      </div>

      <div className="form-box">
        <div className="form-card">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="error">{errors.gender}</p>}

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="error">{errors.address}</p>}

            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit" className="createAccount">
              Create Account
            </button>
            <button type="button" className="google_register">
              Sign up with Google
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
