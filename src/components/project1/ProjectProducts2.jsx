import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProjectProducts2.css";
import ExpertiseSection from "./ExpertiseSection";
import ProjectBanner from "../project1/ProjectBanner";

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

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  // start from middle for infinite illusion
  if (window.innerWidth <= 991) {
    container.scrollLeft = container.scrollWidth / 4;
  } else {
    container.scrollTop = container.scrollHeight / 4;
  }
}, [projectFull]);


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

  const handleNextThumb = () => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollAmount = container.firstChild?.offsetWidth + 14;

  if (window.innerWidth <= 991) {
    container.scrollLeft += scrollAmount;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = container.scrollWidth / 4;
    }
  } else {
    container.scrollTop += scrollAmount;

    if (container.scrollTop >= container.scrollHeight / 2) {
      container.scrollTop = container.scrollHeight / 4;
    }
  }
};


const handlePrevThumb = () => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollAmount = container.firstChild?.offsetWidth + 14;

  if (window.innerWidth <= 991) {
    container.scrollLeft -= scrollAmount;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 4;
    }
  } else {
    container.scrollTop -= scrollAmount;

    if (container.scrollTop <= 0) {
      container.scrollTop = container.scrollHeight / 4;
    }
  }
};



  return (
    <>
     <ProjectBanner />
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
<button className="arrow-btn" onClick={handlePrevThumb}>
  <FontAwesomeIcon icon={window.innerWidth <= 991 ? faAngleLeft : faAngleUp} />
</button>


<div className="image-thumbnails" ref={scrollRef}>
  {[...(projectFull?.project_images || []),
    ...(projectFull?.project_images || [])].map((img, i) => (
    <img
      key={i}
      src={`${axios.defaults.baseURL}${img}`}
      className={mainImage === img ? "active" : ""}
      onClick={() => setMainImage(img)}   // ✅ only click affects main image
    />
  ))}
</div>


<button className="arrow-btn" onClick={handleNextThumb}>
  <FontAwesomeIcon icon={window.innerWidth <= 991 ? faAngleRight : faAngleDown} />
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
                <p className="mob-font-size text-justify">{projectDetails.project_info}</p>

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
