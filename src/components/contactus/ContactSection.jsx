import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactSection.css";

import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import linkedinIcon from "../../assets/icons/Group.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import mailIcon from "../../assets/icons/mail.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    recaptcha: "",
  });

  const [contacts, setContacts] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const captchaRef = useRef();

  // Fetch data
  useEffect(() => {
    axios
      .get("/header-contact/getheaderContacts")
      .then((res) => setContacts(res.data.responseData || []))
      .catch((err) => console.error("Failed to fetch contacts:", err));

    axios
      .get("/social-contact/get-socialcontacts")
      .then((res) => setSocialLinks(res.data.responseData[0] || {}))
      .catch((err) => console.error("Failed to fetch social links:", err));
  }, []);

  // VALID PHONE (India +91 or USA +1)
  const validatePhone = (phone) => {
    if (phone.startsWith("+91")) {
      return /^[6-9]\d{9}$/.test(phone.slice(3));
    }
    if (phone.startsWith("+1")) {
      return /^\d{10}$/.test(phone.slice(2));
    }
    return false;
  };

  // Handle Change with your live validations EXACT
  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(val)) return;

    if (name === "mobile") {
      val = val.replace(/[^0-9+]/g, "");
      if (val.includes("+") && val.indexOf("+") !== 0) return;
    }

    setFormData({ ...formData, [name]: val });

    // YOUR EXACT VALIDATIONS (AS-IT-IS)
    setErrors((prev) => {
      const updated = { ...prev };

      if (name === "name") {
        updated.name = val.trim() ? "" : "Name is required.";
      }

      if (name === "email") {
        if (!val.trim()) updated.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
          updated.email = "Enter a valid email address.";
        else updated.email = "";
      }

      if (name === "mobile") {
        const raw = val.replace(/^\+91|\+1/, "");
        if (!val.trim()) updated.mobile = "Mobile number is required.";
        else if (!/^[0-9]{10}$/.test(raw))
          updated.mobile = "Mobile number must be 10 digits.";
        else updated.mobile = "";
      }

      if (name === "subject") {
        updated.subject = val.trim() ? "" : "Subject is required.";
      }

      if (name === "message") {
        if (!val.trim()) updated.message = "Message is required.";
        else if (val.length > 250)
          updated.message = "Message cannot exceed 250 characters.";
        else updated.message = "";
      }

      return updated;
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter Name.";
    if (!formData.email.trim()) newErrors.email = "Please enter Email.";
    if (!formData.mobile.trim()) newErrors.mobile = "Please enter Mobile No.";
    if (!formData.subject.trim()) newErrors.subject = "Please enter Subject.";
    if (!formData.message.trim()) newErrors.message = "Please enter Message.";
    if (formData.message.length > 250)
      newErrors.message = "Message cannot exceed 250 characters.";

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    // Final strict phone validation
    if (formData.mobile && !validatePhone(formData.mobile)) {
      newErrors.mobile =
        "Enter valid number: +91XXXXXXXXXX (India) or +1XXXXXXXXXX (USA)";
    }

    // Recaptcha check
    if (!recaptchaValue) newErrors.recaptcha = "Please complete the ReCAPTCHA";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      await axios.post("/carousal-form/addcarousalform", formData); 

      Swal.fire({
        title: "Success!",
        text: "Thank you! We will contact you soon.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });

      captchaRef.current.reset();
      setRecaptchaValue(null);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.message ||
          "Failed to submit form. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper row">
          {/* LEFT FORM */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="contact-form-box">
              <h2 className="contact-form-title">GET IN TOUCH</h2>
              <p className="contact-form-subtitle">
                Your Product Goals, Our Proven Solutions. Let’s Build Together.
              </p>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <div className="half-inputs">
                  <div style={{ width: "100%" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>

                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <p className="error-message">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className="error-message">{errors.subject}</p>
                )}

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <p
                  className={`char-count ${
                    formData.message.length > 250 ? "exceeded" : ""
                  }`}
                >
                  {formData.message.length}/250
                </p>
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}

                {/* ReCAPTCHA (added WITHOUT changing layout) */}
                <div className="mb-3 recap">
                  <div className="recaptcha-container">
                  <ReCAPTCHA
                    ref={captchaRef}
                    // sitekey="6Lee9gkrAAAAACIG8szun_Hc6Jbn--2D_Cm79cqj"
                    sitekey="6LcxHCksAAAAADSj9E-lBu29tiaRTaFkhgIzQf9V"
                    onChange={(value) => {
                      setRecaptchaValue(value);
                      setErrors({ ...errors, recaptcha: "" });
                    }}
                  />
                  </div>
                  {errors.recaptcha && (
                    <p className="error-message">{errors.recaptcha}</p>
                  )}
                </div>

                {/* Submit Button with Loader */}
                <button type="submit" className="submit-btn sbmit" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT INFO (unchanged) */}
          <div className="col-lg-6 col-md-12">
            {contacts.length > 0 ? (
              <div className="contact-info">
                <h3>
                  Your Connection to Quality
                  <br /> Manufacturing Starts
                  <br /> Here.
                </h3>
                <p className="text-justify">
                  With decades of experience in manufacturing switchgear,
                  busbars, laminations, and transformers, we are trusted by
                  clients across industries and continents.
                  <br />
                  Have questions about our products or services? Reach out to us
                  and we’ll get back to you with the right solution.
                </p>

                <div className="info-row d-flex flex-wrap justify-content-between">
                  <div className="info-block mb-3">
                    <h5>Our Address</h5>
                    <p className="mb-0">
                      423/17; Talegaon Industrial Area, Igatpuri, Nashik 422403
                    </p>
                  </div>

                  <div className="info-block mb-3">
                    <h5>Email</h5>
                    {socialLinks.email && (
                      <p>
                        <a href={`mailto:${socialLinks.email}`}>
                          {socialLinks.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                <div className="info-row justify-content-between align-items-start">
                  <div className="info-block">
                    <h5>Social Network</h5>
                    <div className="social-icons">
                      {socialLinks.facebook && (
                        <a href={socialLinks.facebook} target="_blank">
                          <img src={facebookIcon} alt="Facebook" />
                        </a>
                      )}
                      {socialLinks.instagram && (
                        <a href={socialLinks.instagram} target="_blank">
                          <img src={instaIcon} alt="Instagram" />
                        </a>
                      )}
                      {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank">
                          <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                      )}
                      {socialLinks.whatsapp && (
                        <a
                          href={`https://wa.me/${socialLinks.whatsapp}`}
                          target="_blank"
                        >
                          <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                      )}
                      {socialLinks.email && (
                        <a href={`mailto:${socialLinks.email}`} target="_blank">
                          <img src={mailIcon} alt="Mail" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="info-block">
                    <h5>Contact</h5>
                    {contacts[0]?.phone1 && (
                      <p>
                        <a href={`tel:${contacts[0].phone1}`}>
                          {contacts[0].phone1}
                        </a>
                      </p>
                    )}
                    {contacts[0]?.phone2 && (
                      <p>
                        <a href={`tel:${contacts[0].phone2}`}>
                          {contacts[0].phone2}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading contact info...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
