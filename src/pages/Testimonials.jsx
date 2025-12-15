import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/testmonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = [
          {
            name: "Edward Glenn",
            text: "WBF team did a fantastic project, they were quick, efficient and very professional.",
          },
          {
            name: "Mark Tiner",
            text: "I’ve been working with these guys for a long time and I can say that our projects are in the perfect hands.",
          },
          {
            name: "Sarah Johnson",
            text: "Excellent communication, on-time delivery, and great attention to detail. Highly recommended!",
          },
          {
            name: "David Miller",
            text: "They exceeded expectations. Every detail was taken care of efficiently and professionally.",
          },
        ];

        setTimeout(() => setTestimonials(data), 500);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-wrapper">
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  const handleReadMore = (item) => {
    setSelectedTestimonial(item);
    setShowModal(true);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-wrapper">
        {/* LEFT STATIC PART */}
        <div className="testimonials-left">
          <h2 className="testimonials-title">TESTIMONIALS</h2>
          <p className="testimonials-quote">
            “I would like to say big ‘Thank you’ to WBF TEAM for immense effort
            and support. In addition, I have feeling that our future projects
            are going to be great as well, good luck to the Team.”
          </p>
        </div>

        {/* RIGHT DYNAMIC SWIPER */}
        <div className="testimonials-right">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                  <h3>{item.name}</h3>

                  <p>
                    {item.text.length > 82
                      ? item.text.slice(0, 82) + "..."
                      : item.text}
                    {item.text.length > 82 && (
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
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="fw-bold mb-3">{selectedTestimonial.name}</h5>
            <p className="mb-4">{selectedTestimonial.text}</p>

            <button
              className="btn btn-warning"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
