import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    axios
      .get("/testimonials/get-web-testimonials") // your API endpoint
      .then((res) => {
        const data = res.data?.data || res.data?.responseData || [];
        if (data.length > 0) {
          setTestimonials(data);
        } else {
          setError("No testimonials found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleReadMore = (item) => {
    setSelectedTestimonial(item);
    setShowModal(true);
  };

  const safeText = (text, fallback = "No data") => text || fallback;

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-wrapper">
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-wrapper">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-wrapper">
          {/* LEFT STATIC PART */}
          <div className="testimonials-left">
            <h2 className="testimonials-title">TESTIMONIALS</h2>
            <p className="testimonials-quote">
              “I would like to say big ‘Thank you’ to WBF TEAM for immense
              effort and support. In addition, I have feeling that our future
              projects are going to be great as well, good luck to the Team.”
            </p>
          </div>

          {/* RIGHT DYNAMIC SWIPER */}
          <div className="testimonials-right">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="testimonial-swiper"
              breakpoints={{
                1280: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1.2 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <h3>{safeText(item.name, "No Name")}</h3>
                    <p>
                      {item.review.length > 160
                        ? item.review.slice(0, 160) + "..."
                        : item.review}
                      {item.review.length > 160 && (
                        <span
                          className="text-warning fw-semibold read-more"
                          onClick={() => handleReadMore(item)}
                        >
                          Read more
                        </span>
                      )}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* MODAL */}
        {showModal && selectedTestimonial && (
          <div
            className="modal-backdrop-custom"
            onClick={() => setShowModal(false)}
          >
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              {/* ⭐ DYNAMIC IMAGE ADDED HERE ⭐ */}
              {selectedTestimonial.img && (
                <img
                  src={selectedTestimonial.img}
                  alt={selectedTestimonial.name}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
              )}

              <h5 className="fw-bold mb-3">{selectedTestimonial.name}</h5>
              <p className="mb-4">{selectedTestimonial.review}</p>

              <button
                className="btn btn-warning"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
