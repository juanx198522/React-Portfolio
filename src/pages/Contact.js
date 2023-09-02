import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

// Component for displaying a contact form
function Contact() {
  // State variables for form inputs, error states, and messageSent state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // Event handler for name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  // Event handler for message input change
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate name
    if (name.length <= 1) {
      setNameError(true);
      valid = false;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }

    // Validate message length
    if (message.length < 150) {
      setMessageError(true);
      valid = false;
    }

    // If all validation passes, log the message, reset form, and set messageSent state
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  };

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="contact-header">Contact</h1>

            {messageSent && (
              // Display a success message when the message is sent
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}

            {/* Contact Form */}
            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control
                  type="text"
                  className={nameError ? "is-invalid" : ""}
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">
                    Name must be more than 1 character
                  </div>
                )}
                <br></br>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={emailError ? "is-invalid" : ""}
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">
                    A valid email is required
                  </div>
                )}
                <br></br>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={messageError ? "is-invalid" : ""}
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={handleMsgChange}
                />
                {messageError && (
                  <div className="invalid-feedback">
                    Message must be at least 150 characters
                  </div>
                )}
                <br></br>
              </Form.Group>

              <Button type="submit" className="custom-send-message-button">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;