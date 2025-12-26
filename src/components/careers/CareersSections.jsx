import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import "./CareersSections.css";
import Swal from "sweetalert2";
import axios from "axios";

const CareersSections = () => {
  const captchaRef = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [mobile, setMobile] = useState("");
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const [loading, setLoading] = useState(false);

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const indiaMobileRegex = /^\+91\d{10}$/;
  const usMobileRegex = /^\+1\d{10}$/;
  const messageRegex = /^[A-Za-z0-9 .,!?-]{10,}$/;
  const subjectRegex = /^[A-Za-z0-9 .,!?'-]{3,80}$/;

  const truncate = (str, max = 20) => {
    return str.length > max ? str.substring(0, max) + "..." : str;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setErrors((prev) => ({
        ...prev,
        file: "Please upload your CV",
      }));
      return;
    }

    // Allowed file formats
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        file: "Only PDF, DOC, and DOCX files are allowed",
      }));
      setFileName(""); // remove invalid name
      return;
    }

    // Size limit 2MB
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        file: "File must be less than 2MB",
      }));
      setFileName("");
      return;
    }

    // Truncate file name for display
    setFileName(truncate(file.name, 40));

    setErrors((prev) => ({
      ...prev,
      file: "",
    }));
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;

    if (text.length <= 250) {
      setMessage(text);

      if (text.trim().length === 0) {
        setErrors((prev) => ({
          ...prev,
          message: "Please Enter a Message",
        }));
      } else if (text.trim().length < 10) {
        setErrors((prev) => ({
          ...prev,
          message: "Message must be at least 10 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, message: "" }));
      }
    }
  };

  const validateForm = async (e) => {
    e.preventDefault();

    // 🔥 Prevent double click (if already submitting)
    if (loading) return;
    setLoading(true);

    let newErrors = {};

    // ------------------- RECAPTCHA -------------------
    if (!recaptchaValue) {
      newErrors.recaptcha = "Please complete the ReCAPTCHA";
    }

    // ------------------- NAME -------------------
    if (name.trim() === "") {
      newErrors.name = "Please enter name";
    } else if (!nameRegex.test(name.trim())) {
      newErrors.name = "Name must contain only letters";
    }

    // ------------------- EMAIL -------------------
    if (email.trim() === "") {
      newErrors.email = "Please Enter Email";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please Enter a valid Email";
    }

    // ------------------- SUBJECT -------------------
    if (subject.trim().length === 0) {
      newErrors.subject = "Please Enter a Subject";
    }

    // ------------------- MOBILE -------------------
    if (mobile.trim() === "") {
      newErrors.mobile = "Please enter mobile number";
    } else if (
      !indiaMobileRegex.test(mobile.trim()) &&
      !usMobileRegex.test(mobile.trim())
    ) {
      newErrors.mobile = "Enter valid number: +91XXXXXXXXXX or +1XXXXXXXXXX";
    }

    // ------------------- MESSAGE -------------------
    if (message.trim().length === 0) {
      newErrors.message = "Please Enter a Message";
    }

    // ------------------- FILE -------------------
    const fileInput = document.getElementById("fileInput");
    const file = fileInput?.files[0];

    if (!file) {
      newErrors.file = "Please upload CV";
    }

    setErrors(newErrors);

    // ❌ Stop submit & stop loader if errors exist
    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }

    // ------------------- API SUBMISSION -------------------
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", mobile);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("cv", file);

      const res = await axios.post("/uploadcv/create-uploadcv", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        title: "Success!",
        text: "Your CV has been submitted successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      // Reset form
      captchaRef.current.reset();
      setRecaptchaValue(null);
      setMobile("");
      setFileName("");
      setMessage("");
      setName("");
      setEmail("");
      setSubject("");
      setErrors({});
      if (fileInput) fileInput.value = "";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong while submitting your CV.",
      });

      console.error("CV upload failed:", error);
    }

    // 🔥 Turn off loading always
    setLoading(false);
  };

  return (
    <>
      {/* WHY WORK WITH US */}
      <section className="why-work">
        <h2>Why Work With Us?</h2>
        <p className="why-sub">
          With Decades Of Experience In Manufacturing Switchgear, Busbars,{" "}
          <br />
          Laminations, And Transformers, We Are Trusted By Clients Across
          Industries <br /> And Continents.
        </p>

        <div className="why-grid">
          <div className="why-item">
            <h3>Strong Industry Presence</h3>
            <p className="text-justify">
              With Decades Of Experience In Manufacturing Switchgear, Busbars,
              Laminations, And Transformers, We Are Trusted By Clients Across
              Industries And Continents.
            </p>
          </div>

          <div className="why-item">
            <h3>Growth Opportunities</h3>
            <p className="text-justify">
              We Offer A Clear Path For Professional Growth — Whether You're A
              Skilled Technician Or A Young Engineer, Your Journey Here Is Full
              Of Learning And Leadership.
            </p>
          </div>

          <div className="why-item">
            <h3>Global Exposure</h3>
            <p className="text-justify">
              Be A Part Of An Export-Driven Organization With Clients Across
              Asia, Europe, And Beyond — Experience International Standards,
              Audits, And Projects.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="career-section">
        <h2 className="text-center job-title">Currently Job Openings</h2>

        <div className="career-box container">
          <h5 className="text-center join-title">Join Our Team</h5>

          <form className="career-form" onSubmit={validateForm} noValidate>
            <h6 className="form-heading">UPLOAD YOUR CV</h6>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Name :</label>
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    const val = e.target.value;
                    setName(val);

                    if (val.trim() === "") {
                      setErrors((prev) => ({
                        ...prev,
                        name: "Please enter name",
                      }));
                    } else if (!nameRegex.test(val.trim())) {
                      setErrors((prev) => ({
                        ...prev,
                        name: "Name must contain only letters",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, name: "" }));
                    }
                  }}
                  required
                />
                {errors.name && (
                  <small style={{ color: "red", fontSize: "13px" }}>
                    {errors.name}
                  </small>
                )}
              </div>
              <div className="col-md-6">
                <label>Email Id:</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    let val = e.target.value.toLowerCase(); // Auto lowercase

                    // Prevent spaces
                    if (val.includes(" ")) return;

                    setEmail(val);

                    if (val.trim() === "") {
                      setErrors((prev) => ({
                        ...prev,
                        email: "Please Enter Email",
                      }));
                    } else if (!emailRegex.test(val.trim())) {
                      setErrors((prev) => ({
                        ...prev,
                        email: "Please Enter a valid Email",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  required
                />

                {errors.email && (
                  <small style={{ color: "red", fontSize: "13px" }}>
                    {errors.email}
                  </small>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label>Mobile Number With Country Code :</label>

                <input
                  className="form-control"
                  type="text"
                  value={mobile}
                  onChange={(e) => {
                    let val = e.target.value;

                    // Block letters and special chars (except +)
                    val = val.replace(/[^0-9+]/g, "");

                    // Force +91 or +1
                    if (
                      !val.startsWith("+91") &&
                      !val.startsWith("+1") &&
                      val !== ""
                    ) {
                      setMobile(val);
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "Must start with +91 (India) or +1 (USA)",
                      }));
                      return;
                    }

                    // Limit total length
                    if (val.startsWith("+91") && val.length > 13) return; // +91 + 10 digits = 13 chars
                    if (val.startsWith("+1") && val.length > 12) return; // +1 + 10 digits = 12 chars

                    setMobile(val);

                    // Live validation
                    if (val === "") {
                      setErrors((prev) => ({
                        ...prev,
                        mobile: "Please enter mobile number",
                      }));
                    } else if (
                      !indiaMobileRegex.test(val) &&
                      !usMobileRegex.test(val)
                    ) {
                      setErrors((prev) => ({
                        ...prev,
                        mobile:
                          "Enter valid number: +91XXXXXXXXXX or +1XXXXXXXXXX",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, mobile: "" }));
                    }
                  }}
                />

                <small className="example-text">
                  (E.g. +91xxxxxxxxxx For India, +1 XXX XXX-XXXX For US)
                </small>

                {errors.mobile && (
                  <small
                    style={{
                      color: "red",
                      marginLeft: "10px",
                      fontSize: "13px",
                    }}
                  >
                    {errors.mobile}
                  </small>
                )}
              </div>

              <div className="col-md-6">
                <label>Subject:</label>
                <input
                  className="form-control"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    let val = e.target.value;

                    // Remove double spaces
                    val = val.replace(/\s{2,}/g, " ");

                    // Prevent starting with space
                    if (val.startsWith(" ")) return;

                    // Limit to 80 chars
                    if (val.length > 80) return;

                    setSubject(val);

                    if (val.trim() === "") {
                      setErrors((prev) => ({
                        ...prev,
                        subject: "Please Enter a Subject",
                      }));
                    } else if (!subjectRegex.test(val.trim())) {
                      setErrors((prev) => ({
                        ...prev,
                        subject: " ",
                      }));
                    } else {
                      setErrors((prev) => ({ ...prev, subject: "" }));
                    }
                  }}
                  required
                />
                {errors.subject && (
                  <small style={{ color: "red", fontSize: "13px" }}>
                    {errors.subject}
                  </small>
                )}
              </div>
            </div>

            <label>Upload CV</label>

            <div className="d-flex gap-2 mb-2">
              {/* Hidden actual file input */}
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              {/* Visible fake input showing file name */}
              <input
                className="form-control file-area"
                type="text"
                value={fileName}
                readOnly
              />

              <button
                type="button"
                className="choose-btn"
                onClick={() => document.getElementById("fileInput").click()}
              >
                CHOOSE FILE
              </button>
            </div>

            {errors.file && (
              <small
                style={{
                  color: "red",
                  marginLeft: "0px",
                  fontSize: "13px",
                  marginTop: "4px",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                {errors.file}
              </small>
            )}

            <label
              style={{
                marginTop: "20px",
              }}
            >
              Messages
            </label>
            <textarea
              rows="4"
              className="form-control mb-2"
              value={message}
              onChange={handleMessageChange}
              placeholder="Write your message (Max 250 chars)"
            ></textarea>

            <small className="cnt">{message.length}/250</small>

            {errors.message && (
              <p
                style={{
                  color: "red",
                  marginLeft: "3px",
                  fontSize: "13px",
                  marginTop: "-22px",
                }}
              >
                {errors.message}
              </p>
            )}

            {/* ReCAPTCHA */}
            <div className="mb-3">
              <div className="recaptcha-container">
              <ReCAPTCHA
                ref={captchaRef}
                // sitekey="6Lee9gkrAAAAACIG8szun_Hc6Jbn--2D_Cm79cqj"
                sitekey="6LcxHCksAAAAADSj9E-lBu29tiaRTaFkhgIzQf9V"
                onChange={(value) => {
                  setRecaptchaValue(value);
                  setErrors((prev) => ({ ...prev, recaptcha: "" }));
                }}
              /> 
              </div>
              {errors.recaptcha && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.recaptcha}
                </p>
              )}
            </div>

            <button
              className="submit-btn sub"
              type="submit"
              disabled={loading}
              style={{ opacity: loading ? "0.6" : "1" }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CareersSections;
