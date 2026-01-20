import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProjectProducts2.css";
import ExpertiseSection from "./ExpertiseSection";
import ProjectBanner from "../project1/ProjectBanner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function ProjectProducts2() {
  const { slug } = useParams();

  const scrollRef = useRef(null);
  const infoRef = useRef(null);

  const [projectDetails, setProjectDetails] = useState(null);
  const [projectFull, setProjectFull] = useState(null);
  const [mainImage, setMainImage] = useState("");

  /* ----------------------------------
     Load basic project data (localStorage)
  ---------------------------------- */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projectData"));
    if (!stored) return;

    const storedSlug = stored.project_name
      .toLowerCase()
      .replace(/\s+/g, "-");

    if (storedSlug === slug) {
      setProjectDetails(stored);
      setMainImage(stored.img); // default main image
    }
  }, [slug]);

  /* ----------------------------------
     Fetch project images by ID
  ---------------------------------- */
  useEffect(() => {
    if (!projectDetails) return;

    const loadFullProject = async () => {
      try {
        const res = await axios.get(
          `/projectDetailsWithImages/projects/${projectDetails.id}`
        );

        // const formatted = {
        //   ...res.data,
        //   project_images:
        //     typeof res.data.project_images === "string"
        //       ? JSON.parse(res.data.project_images)
        //       : res.data.project_images,
        // };

        // setProjectFull(formatted);

        const activeProject = Array.isArray(res.data)
        ? res.data.find(item => item.isDelete === false)
        : res.data;

      if (!activeProject) return;

      const formatted = {
        ...activeProject,
        project_images:
          typeof activeProject.project_images === "string"
            ? JSON.parse(activeProject.project_images)
            : activeProject.project_images,
      };

      setProjectFull(formatted);

      } catch (error) {
        console.error("Image API Error:", error);
      }
    };

    loadFullProject();
  }, [projectDetails]);

  /* ----------------------------------
     Thumbnail scroll handlers
  ---------------------------------- */
  const handleNextThumb = () => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = container.firstChild?.offsetWidth + 14;

    if (window.innerWidth <= 991) {
      container.scrollBy({ left: amount, behavior: "smooth" });
    } else {
      container.scrollBy({ top: amount, behavior: "smooth" });
    }
  };

  const handlePrevThumb = () => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = container.firstChild?.offsetWidth + 14;

    if (window.innerWidth <= 991) {
      container.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
      container.scrollBy({ top: -amount, behavior: "smooth" });
    }
  };

  if (!projectDetails) {
    return <h2 className="text-center mt-5">Project Not Found</h2>;
  }

  // const images = projectFull?.project_images || [];
  const images =
  projectFull && projectFull.isDelete === false
    ? projectFull.project_images || []
    : [];


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
              {images.length > 3 && (
              <button className="arrow-btn" onClick={handlePrevThumb}>
                <FontAwesomeIcon
                  icon={window.innerWidth <= 991 ? faAngleLeft : faAngleUp}
                />
              </button>
              )}

              <div className="image-thumbnails" ref={scrollRef}>
                {images.map((img, index) => (
                  <img
                    key={img}
                    src={`${axios.defaults.baseURL}${img}`}
                    className={`thumb-image ${
                      mainImage === img ? "active" : ""
                    }`}
                    alt="Project thumbnail"
                    // onClick={() => setMainImage(img)}
                  />
                ))}
              </div>

              {images.length > 3 && (
              <button className="arrow-btn" onClick={handleNextThumb}>
                <FontAwesomeIcon
                  icon={window.innerWidth <= 991 ? faAngleRight : faAngleDown}
                />
              </button>
              )}
            </div>

            {/* CENTER MAIN IMAGE */}
            <div className="center-column">
              <h3 className="project-title">
                {projectDetails.project_name}
              </h3>

              <div className="main-image-holder">
                {mainImage && (
                  <img
                    src={mainImage}
                    className="main-image"
                    alt={projectDetails.project_name}
                  />
                )}
              </div>
            </div>

            {/* RIGHT INFO */}
            <div className="info-box">
              <div className="info-box-content" ref={infoRef}>
                <p className="mob-font-size text-justify">
                  {projectDetails.project_info}
                </p>

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
