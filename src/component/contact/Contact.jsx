import { useState } from "react";
import "./contact.css";
import CreateContact from "../../Apis/Contact";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

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
        const token = localStorage.getItem("token");
        // if (!token) {
        //   setSuccess("You must be logged in to send a message.");
        //   setLoading(false);
        //   return;
        // }

        const response = await CreateContact(
          { userName: name, email, phone, message },
          token
        );

        if (response.success === "success") {
          setSuccess("Message sent successfully!");
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        } else {
          setSuccess(response.message || "Failed to send message.");
        }
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setSuccess("Error connecting to server.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-wrapper">
     
      <div className="breadcrumb">
        <span>Home</span> <span className="divider">/</span>{" "}
        <span className="active">Contact</span>
      </div>

      <div className="contact-container">
   
        <div className="left">
          <div className="card">
            <div className="icon-circle">
              <i className="bi-telephone"></i>
            </div>
            <div className="card-content">
              <h4>Call To Us</h4>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="bi-envelope"></i>
            </div>
            <div className="card-content">
              <h4>Write To Us</h4>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: customer@exclusive.com</p>
              <p>Support: support@exclusive.com</p>
            </div>
          </div>
        </div>

    
        <div className="right">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="field1">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Your Phone *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {errors.name && <p className="error">{errors.name}</p>}
              {errors.email && <p className="error">{errors.email}</p>}
              {errors.phone && <p className="error">{errors.phone}</p>}

              <textarea
                placeholder="Your Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="success">{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
