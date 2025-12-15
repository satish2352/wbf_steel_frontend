import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProjectProducts2.css";
import ExpertiseSection from "./ExpertiseSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ProjectProducts2() {
  const { slug } = useParams();

  const scrollRef = useRef(null);
  const infoRef = useRef(null);

  const [projectDetails, setProjectDetails] = useState(null);
  const [projectFull, setProjectFull] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // Load basic localStorage info
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projectData"));
    if (!stored) return;

    const storedSlug = stored.project_name.toLowerCase().replace(/\s+/g, "-");
    if (storedSlug === slug) {
      setProjectDetails(stored);
    }
  }, [slug]);

  // Fetch project images using ID
  useEffect(() => {
    if (!projectDetails) return;

    const loadFullProject = async () => {
      try {
        const res = await axios.get(
          `/projectDetailsWithImages/projects/${projectDetails.id}`
        );

        const formatted = {
          ...res.data,
          project_images:
            typeof res.data.project_images === "string"
              ? JSON.parse(res.data.project_images)
              : res.data.project_images,
        };

        setProjectFull(formatted);
        setMainImage(formatted.project_images[0]);
      } catch (err) {
        console.log("Image API Error:", err);
      }
    };

    loadFullProject();
  }, [projectDetails]);

  if (!projectDetails) {
    return <h2 className="text-center mt-5">Project Not Found</h2>;
  }

  return (
    <>
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title mt-3">Built to Power Your Product</h2>
        </div>
      </section>

      <section className="project-details">
        <div className="white-box">
          <div className="project-container">

            {/* LEFT THUMBNAILS */}
            <div className="image-list">
              {/* TOP / LEFT ARROW */}
<button
  className="arrow-btn"
  onClick={() => {
    const scrollAmount = scrollRef.current.firstChild?.offsetWidth + 10;
    scrollRef.current.scrollBy({
      left: window.innerWidth <= 767 ? -scrollAmount : 0,
      top: window.innerWidth > 767 ? -150 : 0,
      behavior: "smooth",
    });
  }}
>
  <FontAwesomeIcon icon={window.innerWidth <= 767 ? faAngleLeft : faAngleUp} />
</button>

{/* THUMBNAIL LIST */}
<div className="image-thumbnails" ref={scrollRef}>
  {projectFull?.project_images?.map((img, i) => (
    <img
      key={i}
      src={`${axios.defaults.baseURL}${img}`}
      className={mainImage === img ? "active" : ""}
      onClick={() => setMainImage(img)}
    />
  ))}
</div>

{/* BOTTOM / RIGHT ARROW */}
<button
  className="arrow-btn"
  onClick={() => {
    const scrollAmount = scrollRef.current.firstChild?.offsetWidth + 10;
    scrollRef.current.scrollBy({
      left: window.innerWidth <= 767 ? scrollAmount : 0,
      top: window.innerWidth > 767 ? 150 : 0,
      behavior: "smooth",
    });
  }}
>
  <FontAwesomeIcon 
    icon={window.innerWidth <= 767 ? faAngleRight : faAngleDown} 
  />
</button>

              {/* <button className="arrow-btn" 
                onClick={() => scrollRef.current.scrollBy({ top: -120, behavior: "smooth" })}
              >
                <FontAwesomeIcon icon={faAngleUp} />
              </button>

              <div className="image-thumbnails" ref={scrollRef}>
                {projectFull?.project_images?.map((img, i) => (
                  <img
                    key={i}
                    src={`${axios.defaults.baseURL}${img}`}
                    className={mainImage === img ? "active" : ""}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>

              <button className="arrow-btn" 
                onClick={() => scrollRef.current.scrollBy({ top: 120, behavior: "smooth" })}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </button> */}
            </div>

            {/* CENTER MAIN IMAGE */}
            <div className="center-column">
              <h3 className="project-title">{projectDetails.project_name}</h3>

              <div className="main-image-holder">
                {mainImage && (
                  <img
                    src={`${axios.defaults.baseURL}${mainImage}`}
                    className="main-image"
                  />
                )}
              </div>
            </div>

            {/* RIGHT INFO BOX */}
            <div className="info-box">
              <div className="info-box-content" ref={infoRef}>
                <p className="mob-font-size">{projectDetails.project_info}</p>

                <h5><strong>Location:</strong> {projectDetails.project_location}</h5>
                <h5><strong>Total Tonnage:</strong> {projectDetails.project_total_tonnage}</h5>
                <h5><strong>Completion Year:</strong> {projectDetails.project_year_of_completion}</h5>
                <h5><strong>Status:</strong> {projectDetails.project_status}</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ExpertiseSection />
    </>
  );
}

export default ProjectProducts2;
