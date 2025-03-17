import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (!formData[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted! (Backend to be added later)");
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
