// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending email...");

    const submissionData = {
      ...formData,
      access_key: "7afe7930-8084-4fdd-9fe0-678ee3fdb2db" // Replace with your actual access key
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setResult("Email sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setResult("Sorry, your email couldn't be sent. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit Form</button>
      </form>

      <p id="result">{result}</p>
    </div>
  );
};

export default ContactForm;
