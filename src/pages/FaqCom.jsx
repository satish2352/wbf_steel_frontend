import React, { useState } from "react";
import "../css/faq.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FaqCom() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const value = e.target.value;
    setname(value);
    setErrors((prev) => ({
      ...prev,
      name: value.trim() ? "" : "Please enter Name",
    }));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setemail(value);

    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, email: "Please enter email" }));
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter valid email address",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setsubject(value);
    setErrors((prev) => ({
      ...prev,
      subject: value.trim() ? "" : "Please enter subject",
    }));
  };

  const handleMessageLive = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setmessage(value);
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

    setErrors(err);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ name, email, subject, message });
    }
  };

  return (
    <section className="faq_section">
      <div className="backimge mt-4">
        <Container>
          <Row>
            {/* LEFT SIDE (FAQ) */}
            <Col lg={7} md={12} sm={12} className="mt-5 left_faq_col">
              <h3 className="title">FAQ of customer</h3>

              <p className="parafaq mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quaed.
              </p>

              {/* Yellow line */}
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

              {/* FAQ ACCORDION */}
              <div id="accordionExample">
                <button
                  className="btn btn_custom  "
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >
                  Is there free parking?
                </button>

                <div className="collapse show" id="collapseOne">
                  <div className="card card-body card_data">
                    No, cell phones aren’t permitted on the ropes and trampoline
                    areas due to safety reasons.
                  </div>
                </div>

                <button
                  className="btn btn_custom collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >
                  Can I bring my cell phone on the trampoline or ropes course?
                </button>

                <div className="collapse" id="collapseTwo">
                  <div className="card card-body card_data">
                    No, cell phones aren’t permitted on the ropes and trampoline
                    areas due to safety reasons.
                  </div>
                </div>

                <button
                  className="btn btn_custom collapsed "
                  data-toggle="collapse"
                  data-target="#collapsethree"
                >
                  Do you have a nursing station?
                </button>

                <div className="collapse" id="collapsethree">
                  <div className="card card-body card_data">
                    No, cell phones aren’t permitted...
                  </div>
                </div>

              
                <button
                  className="btn btn_custom collapsed "
                  data-toggle="collapse"
                  data-target="#collapsefour"
                >
                  When should I arrive before my scheduled attraction?
                </button>

                <div className="collapse" id="collapsefour">
                  <div className="card card-body card_data">
                    Comfortable athletic clothing...
                  </div>
                </div>
              </div>
            </Col>

            {/* RIGHT SIDE (FORM CARD) */}
            <Col lg={5} md={12} sm={12} className="mt-2 mb-4">
              <div className="card card_faq custom-triangle">
                <div className="card-body mt-2 mb-2">
                  <h3 className="title_req">Request A Quote</h3>
                  <p className="parafaq mb-5">
                    Fill all information details to consult with us to <br></br>get
                    services from us
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
                          <span className="text-danger ">{errors.name}</span>
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
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter message"
                          value={message}
                          onChange={handleMessageLive}
                        />
                        {errors.message && (
                          <span className="text-danger">{errors.message}</span>
                        )}
                      </div>

                      <div className="text-center">
                        <button type="submit" className="send_btn">
                          SEND
                        </button>
                      </div>
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
