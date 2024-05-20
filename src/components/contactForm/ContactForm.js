import React from "react";

const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <label>
        Phone:
        <input 
          type="tel" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)} 
          pattern="^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$" 
          title="Enter a valid phone number" 
          required 
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
