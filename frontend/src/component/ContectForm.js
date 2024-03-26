import React, { useState } from "react";
import "./ContectForm.css";

const ContectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/contect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Message submitted successfully");
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to submit form");
    }
  };

  return (
    <form className="body" onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center", padding: "2rem 0rem" }}>
        <b>Fill This Form For More Inquiry</b>
      </h1>
      <div className="input-box">
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Name </label>
      </div>
      <div className="input-box">
        <input
          type="text"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Email</label>
      </div>
      <div className="input-box">
        <input
          type="text"
          required
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label>Subject</label>
      </div>
      <div className="input-box">
        <textarea
          type="text"
          required
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <label>Send Your Massage </label>
      </div>
      <button type="submit" className="btn1">
        Submit
      </button>
    </form>
  );
};

export default ContectForm;
