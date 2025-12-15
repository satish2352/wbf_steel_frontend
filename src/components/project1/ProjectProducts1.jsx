import "./ProjectProducts1.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProjectProducts1() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  return (
    <>
      {/* PAGE HEADER */}
      <section className="project-products">
        <div className="container text-center">
          <h2 className="product-title text-center">
            Built to Power Your Product
          </h2>

          {/* CATEGORY TABS FROM API */}
          <div class="tabs-scroll-wrapper">
            <div className="product-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  style={{
                    background: activeCategory === cat.id ? "#FFC442" : "#fff",
                    fontWeight: activeCategory === cat.id ? "700" : "500",
                  }}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            {projects
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
                    <img src={p.img} className="img-fluid img_product" alt="" />
                  </div>
                  <p className="product_name mt-3">{p.project_name}</p>
                </div>
              ))}
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
    </>
  );
}

export default ProjectProducts1;
