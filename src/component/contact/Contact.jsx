import { useState } from "react";
import "./contact.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const dummyData = [
    { icon: "bi-envelope", title: "Send us a detailed message", subtitle: "Our team will respond quickly." },
    { icon: "bi-telephone", title: "Call our support line", subtitle: "Available 24/7 for all inquiries." },
  ];

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Email is invalid";
    if (!phone) newErrors.phone = "Phone is required";
    if (!message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        });
        if (response.ok) {
          setSuccess("Message sent successfully!");
          setName(""); setEmail(""); setPhone(""); setMessage("");
        } else setSuccess("Failed to send message.");
      } catch {
        setSuccess("Error connecting to server.");
      } finally { setLoading(false); }
    }
  };

  return (
    <div className="contact-container">
      <div className="left">
        {dummyData.map((item, index) => (
          <div key={index} className="card">
            <div className="icon-circle"><i className={`bi ${item.icon}`}></i></div>
            <div className="card-content">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="right">
        <div className="form-card">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="field1">
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            {errors.name && <p className="error">{errors.name}</p>}
            {errors.email && <p className="error">{errors.email}</p>}
            {errors.phone && <p className="error">{errors.phone}</p>}

            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
            {success && <p className="success">{success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
