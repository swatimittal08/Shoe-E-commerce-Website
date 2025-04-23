import React, { useState } from "react";
import "../App.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="page-container">
      <div className="contact-section">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you! Please fill out the form below or use
              our contact information.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>123 Shoe Street, Fashion District</p>
                <p>New York, NY 10001</p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p>info@shoesstore.com</p>
                <p>support@shoesstore.com</p>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 765-4321</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
