import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

// Static Featured main image
import img1 from "../../assets/images/1.png";

const Projects = () => {
  const navigate = useNavigate();

  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/projectDetails/get-project-details-home-page")
      .then((res) => {
        const data = res.data?.responseData || [];

        // ❤ IMPORTANT CHANGE HERE
        const formatted = {
          featured: {
            title: "WBF Steel",
            subtitle: "Featured Projects",
            image: img1,
          },

          // store whole backend object ⬇
          projects: data.map((item) => ({
            ...item, // add full object
            title: item.project_name,
            image: item.img,
          })),
        };

        setProjectsData(formatted);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="loading">{error}</div>;
  }

  if (!projectsData) return null;

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-grid">
          
          {/* --------------------------------- */}
          {/* LEFT FEATURED PROJECT (STATIC) */}
          {/* --------------------------------- */}
          <div className="project-main">
            <img
              src={projectsData.featured.image}
              alt={projectsData.featured.title}
            />
            <div className="project-overlay center">
              <div className="overlay-content">
                <h2>{projectsData.featured.title}</h2>
                <p>{projectsData.featured.subtitle}</p>
                <button
                  className="btn-yellow"
                  onClick={() => navigate("/projectproducts1")}
                >
                  VIEW ALL PROJECTS
                </button>             
              </div>
            </div>
          </div>

          {/* --------------------------------- */}
          {/* RIGHT LAST 4 CATEGORY PROJECTS */}
          {/* --------------------------------- */}
          <div className="project-side">
            {projectsData.projects.map((item, index) => (
              <div
                key={index}
                className="project-card"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const slug = item.title?.toLowerCase()?.replace(/\s+/g, "-");

                  localStorage.setItem("projectData", JSON.stringify(item));

                  navigate(`/projectproducts2/${slug}`);
                }}
              >
                <img src={item.image} alt={item.title} />
                <p className="card-title">{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
