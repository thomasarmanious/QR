import React, { useState } from "react";
import tibaRoseLogo from "../assets/TRLogo-AEdit.png";
import "./Survey.css"; // ✅ Import external CSS

function Survey() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || "1234567890";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `New Survey:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="survey-container">
      {/* Logo */}
      <img src={tibaRoseLogo} alt="Tiba Rose Hotels" className="survey-logo" />

      {/* Form */}
      <form className="survey-form" onSubmit={handleSubmit}>
        <h1 className="survey-title">Guest Feedback Survey</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Feedback *"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Feedback via WhatsApp</button>
      </form>
    </div>
  );
}

export default Survey;
