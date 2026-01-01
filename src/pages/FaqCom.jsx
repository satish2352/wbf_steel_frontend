import React, { useState, useRef } from "react";
import "../css/faq.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReCAPTCHA from "react-google-recaptcha";

function FaqCom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState(0);

  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const captchaRef = useRef();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!value.trim())
      setErrors((prev) => ({ ...prev, name: "Please enter Name" }));
    else if (/\d/.test(value))
      setErrors((prev) => ({ ...prev, name: "Name cannot contain numbers" }));
    else setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.trim())
      setErrors((prev) => ({ ...prev, email: "Please enter email" }));
    else if (!/\S+@\S+\.\S+/.test(value))
      setErrors((prev) => ({
        ...prev,
        email: "Please enter valid email address",
      }));
    else setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);
    setErrors((prev) => ({
      ...prev,
      subject: value.trim() ? "" : "Please enter subject",
    }));
  };

  const handleMessageLive = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setMessage(value);
      setErrors((prev) => ({
        ...prev,
        message: value.trim() ? "" : "Please enter message",
      }));
    }
  };

  const validateForm = () => {
    let err = {};
    let valid = true;
    if (!name.trim()) {
      err.name = "Please enter Name";
      valid = false;
    } else if (/\d/.test(name)) {
      err.name = "Name cannot contain numbers";
      valid = false;
    }

    if (!email.trim()) {
      err.email = "Please enter email";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = "Please enter valid email address";
      valid = false;
    }

    if (!subject.trim()) {
      err.subject = "Please enter subject";
      valid = false;
    }
    if (!message.trim()) {
      err.message = "Message required (<200 chars)";
      valid = false;
    }

    if (!recaptchaValue) {
      err.recaptcha = "Please complete the reCAPTCHA";
      valid = false;
    }

    setErrors(err);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      console.log("✅ Form submitted:", {
        name,
        email,
        subject,
        message,
        recaptchaValue,
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      captchaRef.current.reset();
      setRecaptchaValue(null);

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const faqItems = [
    {
      question: "Is there free parking?",
      answer:
        "No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.",
    },
    {
      question: "Can I bring my cell phone on the trampoline or ropes course?",
      answer:
        "No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.",
    },
    {
      question: "Do you have a nursing station?",
      answer:
        "No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.",
    },
    {
      question: "When should I arrive before my scheduled attraction?",
      answer:
        "Comfortable athletic clothing is recommended and arrive 15 minutes early.",
    },
  ];

  return (
    <section className="faq_section">
      <div className="backimge mt-4">
        <Container>
          <Row>
            <Col
              lg={7}
              md={12}
              sm={12}
              className="md-mt-0 lg-mt-5 left_faq_col"
            >
              <h3 className="title">FAQ of customer</h3>
              <p className="parafaq mb-5 text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quaed.
              </p>

              <div className="d-flex justify-content-center mb-5">
                <div
                  className="progress"
                  style={{ height: "5px", width: "50%" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%", backgroundColor: "#FFC422" }}
                  ></div>
                </div>
              </div>

              <div id="accordionExample">
                {faqItems.map((item, index) => (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <button
                      className={`btn btn_custom ${
                        openIndex === index ? "expanded" : "collapsed"
                      }`}
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      {item.question}
                    </button>
                    <div
                      className={`collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="card card-body card_data text-justify">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={5} md={12} sm={12} className="mt-2 mb-4 faqq">
              <div className="card card_faq custom-triangle">
                <div className="card-body mt-2 mb-2">
                  <h3 className="title_req">Request A Quote</h3>
                  <p className="parafaq mb-4">
                    Fill all information details to consult with us to <br />{" "}
                    get services from us
                  </p>

                  <Container className="Formstart">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter Name"
                          value={name}
                          onChange={handleNameChange}
                        />
                        {errors.name && (
                          <span className="text-danger">{errors.name}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control custom-input"
                          placeholder="Enter Email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {errors.email && (
                          <span className="text-danger">{errors.email}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter Subject"
                          value={subject}
                          onChange={handleSubjectChange}
                        />
                        {errors.subject && (
                          <span className="text-danger">{errors.subject}</span>
                        )}
                      </div>

                      <div className="form-group">
                        <textarea
                          className="form-control custom-input custom-textarea"
                          placeholder="Enter message (max 200 characters)"
                          value={message}
                          onChange={handleMessageLive}
                          rows={4}
                          maxLength={200}
                        />
                      </div>

                      <div className="recaptcha-container">
                        <ReCAPTCHA
                          ref={captchaRef}
                          sitekey="6LcxHCksAAAAADSj9E-lBu29tiaRTaFkhgIzQf9V"
                          onChange={(value) => {
                            setRecaptchaValue(value);
                            setErrors({ ...errors, recaptcha: "" });
                          }}
                        />
                        {errors.recaptcha && (
                          <div className="recaptcha-error">
                            {errors.recaptcha}
                          </div>
                        )}
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="send_btn"
                          disabled={loading || !recaptchaValue}
                        >
                          {loading ? "Submitting..." : "SEND"}
                        </button>
                      </div>

                      {success && (
                        <div className="text-success text-center mb-3">
                          ✅ Thank you! We will contact you shortly.
                        </div>
                      )}
                    </form>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default FaqCom;
