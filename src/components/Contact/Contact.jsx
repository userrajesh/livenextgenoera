import { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

async function handleSubmit(e) {
  e.preventDefault();

  const data = {
    service_id: "service_561pndq",
    template_id: "template_wjhroib",
    user_id: "y-jQLtKf9CP0nzwiu",

    template_params: {
      from_name: formData.name,
      from_email: formData.email,
      form_contact:formData.phone,
      to_name: "Nextgenoera",
      message: formData.message,
      
    },
  };

  try {
    const res = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res.data);
    setSubmitted(true);

  } catch (error) {
    console.log(error.response?.data);
  }

  setTimeout(() => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }, 3000);
}
  return (
    <section className="contact-section" id="contact">
      <h1>Contact Us</h1>
      <p>
        We appreciate your interest in Nextgenauroa. Please provide the
        following information to route your request appropriately.
      </p>

      <div className="contact-container">
        {/* LEFT FORM */}

        <div className="contact-form">
          <h2>Send us a Message</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Full Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Phone Number</label>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="success-msg">✅ Message Sent Successfully!</div>
          )}
        </div>

        {/* RIGHT SIDE */}

        <div className="contact-info">
          <h2>Contact Us</h2>

          <div className="info-box">
            <div>
              <i class="fa fa-map" aria-hidden="true"></i>
            </div>
            <div>
              <h4>Address</h4>
              <p>Greater Noida, Uttar Pradesh</p>
            </div>
          </div>

          <div className="info-box">
            <div>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91-8888888888</p>
            </div>
          </div>

          <div className="info-box">
            <div>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div>
              <h4>Email</h4>
              <p>xyz@gmail.com</p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=greater%20noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
