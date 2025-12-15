import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./BlogCard.css";

// Function to generate slug from title
const generateSlug = (title) =>
  title.toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog details from API
    axios
      .get("/blogdetails/get-web-blogdetails") // Your API endpoint
      .then((response) => {
        setBlogs(response.data.responseData || []);
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  return (
    <section className="blog-section">
      {blogs.length > 0 ? (
        blogs.map((blog, i) => (
          <div className="blog-card" key={blog.id || i}>
            <div className="blog-card-image">
              <img src={blog.img} alt={blog.title} />
              <span className="blog-card-number">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
            </div>

            <h3 className="blog-card-title">{blog.title}</h3>

            <Link
              className="blog-readmore read"
              to={`/blog/${generateSlug(blog.title)}`}
            >
              Read More <span className="arrow">➜</span>
            </Link>
          </div>
        ))
      ) : (
       <div className="d-flex justify-content-center w-100">
  <p>No blogs available at the moment.</p>
</div>

      )}
    </section>
  );
};

export default BlogCard;
