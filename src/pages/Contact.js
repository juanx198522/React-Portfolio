import React, { useState, useEffect } from 'react';
import "../styles/Contact.css";

function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({});

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize errors object
    const newErrors = {};

    // Check if name is empty
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Check if email is empty or invalid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Check if message is empty
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    // Update errors state
    setErrors(newErrors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(newErrors).length === 0) {
      // Implement your form submission logic here
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <br></br>
          <br></br>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <br></br>
          <br></br>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <br></br>
          <br></br>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="error-messages">
            <h3>Validation Errors:</h3>
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
