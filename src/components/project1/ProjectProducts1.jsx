import "./ProjectProducts1.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import StatsSection from "../../components/home/StatsSection";
import ProjectBanner from "../project1/ProjectBanner";
import { useRef } from "react";
import { Helmet } from "react-helmet-async"; 

function ProjectProducts1() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const tabsRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth > 1024) return; // mobile + tablet only

    const container = tabsRef.current;
    const thumb = document.querySelector(".fake-thumb");
    if (!container || !thumb) return;

    const updateThumb = () => {
      // Calculate thumb width based on visible area
      const visibleRatio = container.clientWidth / container.scrollWidth;
      const thumbWidth = Math.max(visibleRatio * container.clientWidth, 30); // min width 30px
      thumb.style.width = `${thumbWidth}px`;

      // Calculate thumb position
      const ratio =
        container.scrollLeft / (container.scrollWidth - container.clientWidth);
      const maxLeft = container.clientWidth - thumbWidth;
      thumb.style.left = `${ratio * maxLeft}px`;
    };

    updateThumb();
    container.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb); // update on resize

    return () => {
      container.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  // ✅ Fetch categories
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await axios.get("category/get-web-category");
        setCategories(res.data.responseData);

        if (res.data.responseData.length > 0) {
          setActiveCategory(res.data.responseData[0].id);
        }
      } catch (err) {
        console.log("Category Error:", err);
      }
    };

    loadCategories();
  }, []);

  // ✅ Fetch projects when category changes
  useEffect(() => {
    if (!activeCategory) return;

    const loadProjects = async () => {
      try {
        const res = await axios.get(
          `projectDetails/get-projectDetails?project_category_id=${activeCategory}`
        );

        const activeProjects = res.data.responseData.filter(
          (p) => p.project_category_id === activeCategory && p.isActive === true
        );

        setProjects(activeProjects);
      } catch (err) {
        console.log("Projects Error:", err);
      }
    };

    loadProjects();
  }, [activeCategory]);
  useEffect(() => {
    const seen = sessionStorage.getItem("tabsSwipeHint");
    if (seen) return;

    sessionStorage.setItem("tabsSwipeHint", "true");
  }, []);

  return (
    <>

      <Helmet>
        <title>Our Projects | WBF Steel | Structural Engineering & BIM Solutions</title>
        <meta
          name="description"
          content="Browse WBF Steel’s portfolio of projects featuring steel detailing, connection design, BIM modeling, and pre-engineered metal buildings for residential, industrial, and commercial clients."
        />
        <meta
          name="keywords"
          content="WBF Steel projects, structural engineering projects, steel detailing projects, BIM modeling projects, connection design, pre-engineered metal buildings"
        />
        <meta name="author" content="WBF Steel" />
      </Helmet>
      <ProjectBanner />
      {/* PAGE HEADER */}
      <section className="project-products">
        <div className="container pp text-center">
          <h2 className="product-title text-center">
            Built to Power Your Product
          </h2>

          {/* CATEGORY TABS FROM API */}
          <div className="tabs-scroll-wrapper">
            <div className="product-tabs" ref={tabsRef}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={activeCategory === cat.id ? "active" : ""}
                  onClick={(e) => {
                    setActiveCategory(cat.id);

                    const tab = e.currentTarget;
                    const container = tabsRef.current;

                    if (!container) return;

                    const left =
                      tab.offsetLeft -
                      container.offsetWidth / 2 +
                      tab.offsetWidth / 2;

                    container.scrollTo({
                      left,
                      behavior: "smooth",
                    });
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <div className="fake-scrollbar">
              <div className="fake-thumb" />
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="container mt-5">
          <div className="row justify-content-center align-items-start">
            {projects.length === 0 ? (
              <div className="col-12 text-center">
                <p className="no-projects-msg">
                  Projects are not available at the moment.
                </p>
              </div>
            ) : (
              projects
                .slice(0, showAll ? projects.length : 6)
                .map((p, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 text-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const slug = p.project_name
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                      localStorage.setItem("projectData", JSON.stringify(p));
                      navigate(`/projectproducts2/${slug}`);
                    }}
                  >
                    <div className="img_container">
                      <img
                        src={p.img}
                        className="img-fluid img_product"
                        alt=""
                      />
                    </div>
                    <p className="product_name mt-3">{p.project_name}</p>
                  </div>
                ))
            )}
          </div>

          {/* SEE MORE BUTTON */}
          {projects.length > 6 && (
            <div className="text-center mt-4">
              <button
                className={`see-more-projects ${showAll ? "active" : ""}`}
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll ? "See Less" : "See More Projects"}
                <span className="thin-arrow" />
              </button>
            </div>
          )}
        </div>
      </section>

      <StatsSection />
    </>
  );
}

export default ProjectProducts1;
