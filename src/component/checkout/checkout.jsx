import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    payment: "",
    coupon: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.street) newErrors.street = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Enter a valid phone number (10-15 digits)";
      }
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!formData.payment) newErrors.payment = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };





const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token"); // لو فيه authentication
      const response = await fetch("https://backend-gules-six-47.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // لو الباك إند محتاج توكن
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Order placed successfully ✅");
        console.log("Server Response:", data);

        // إعادة تعيين الفورم بعد النجاح
        setFormData({
          firstName: "",
          company: "",
          street: "",
          apartment: "",
          city: "",
          phone: "",
          email: "",
          payment: "",
          coupon: ""
        });
        setErrors({});
      } else {
        alert("Failed to place order ❌");
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Something went wrong while placing the order ❌");
    }
  };

  const handleApplyCoupon = () => {
    if (formData.coupon.trim() !== "") {
      alert(`Coupon "${formData.coupon}" applied! 🎉`);
      setFormData({ ...formData, coupon: "" });
    }
  };



  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   console.log("Form submitted ✅:", formData);
  //   alert("Order placed successfully!");

  //   // Reset all fields
  //   setFormData({
  //     firstName: "",
  //     company: "",
  //     street: "",
  //     apartment: "",
  //     city: "",
  //     phone: "",
  //     email: "",
  //     payment: "",
  //     coupon: ""
  //   });

  //   setErrors({});
  // };

  // const handleApplyCoupon = () => {
  //   if (formData.coupon.trim() !== "") {
  //     alert(`Coupon "${formData.coupon}" applied! 🎉`);

  //     // 🟢 Reset coupon field only
  //     setFormData({ ...formData, coupon: "" });
  //   }
  // };

  return (
    <div className="checkout">
      <div className="billing">
        <h2>Billing Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name*
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </label>

          <label>
            Company Name
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>

          <label>
            Street Address*
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </label>

          <label>
            Apartment, floor, etc. (optional)
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
            />
          </label>

          <label>
            Town/City*
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </label>

          <label>
            Phone Number*
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </label>

          <label>
            Email Address*
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>

          <div className="save-info">
            <input type="checkbox" id="save" />
            <label htmlFor="save">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      <div className="summary">
        <h2>Your Order</h2>
        <div className="product">
          <img src="/public/Screenshot 2025-01-26 161002.png" alt="LCD Monitor" />
          <span>LCD Monitor</span>
          <span>$650</span>
        </div>
        <div className="product">
          <img src="/public/img.png" alt="Gamepad"  />
          <span>H1 Gamepad</span>
          <span>$1100</span>
        </div>

        <div className="price-row">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="price-row">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="price-row total">
          <span>Total:</span>
          <span>$1750</span>
        </div>

        <div className="payment">
          <label className={formData.payment === "bank" ? "active" : ""}>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={formData.payment === "bank"}
              onChange={handleChange}
            />
            Bank
            {formData.payment === "bank" && (
              <span className="checkmark">✔</span>
            )}
          </label>

          <label className={formData.payment === "cash" ? "active" : ""}>
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={formData.payment === "cash"}
              onChange={handleChange}
            />
            Cash on delivery
            {formData.payment === "cash" && (
              <span className="checkmark">✔</span>
            )}
          </label>

          {errors.payment && <p className="error">{errors.payment}</p>}
        </div>

        <div className="coupon">
          <input
            type="text"
            name="coupon"
            placeholder="Coupon Code"
            value={formData.coupon}
            onChange={handleChange}
          />
          <button type="button" onClick={handleApplyCoupon}>
            Apply Coupon
          </button>
        </div>

        <button className="place-order" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
}
