import React, { useState } from "react";
import tibaRoseLogo from '../assets/TRLogo-AEdit.png'; 

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
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative'
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '80px',
    height: '80px',
    zIndex: 10
  };

  const formStyle = {
    background: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'border-color 0.3s',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    background: '#25D366',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background 0.3s'
  };

  return (
    <div style={containerStyle}>
      {/* Logo in top left corner */}
      <div style={logoStyle}>
       
        { <img src={tibaRoseLogo} alt="Tiba Rose Hotels" style={{width: '100%', height: '100%', objectFit: 'contain'}} /> }
        
        {/* Option 2: Temporary placeholder - replace with actual logo */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          fontSize: '10px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333'
        }}>
          Tiba Rose<br/>HOTELS
        </div>
      </div>

      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
          Guest Feedback Survey
        </h1>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        
        <textarea
          name="message"
          placeholder="Your Feedback *"
          required
          rows="4"
          value={formData.message}
          onChange={handleChange}
          style={{...inputStyle, resize: 'vertical', fontFamily: 'inherit'}}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
        />
        
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.background = '#128C7E'}
          onMouseLeave={(e) => e.target.style.background = '#25D366'}
        >
          Send Feedback via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default Survey;