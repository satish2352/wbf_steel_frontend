import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogDetails.css";

// Function to generate slug from title
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/blogdetails/get-blogdetails") // Fetch all blogs
      .then((response) => {
        const blogs = response.data.responseData || [];
        // Find blog matching the slug
        const matchedBlog = blogs.find((b) => generateSlug(b.title) === slug);
        setBlog(matchedBlog || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog details:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <section className="blog-details">
      <div className="container">
        <h1 className="blog-details-title">{blog.title}</h1>

        {blog.img && (
          <div className="blog-details-image">
            <img
              src={blog.img}
              alt={blog.title}
              className="img-fluid blog-image"
            />
          </div>
        )}

        <div
          className="blog-details-content"
          dangerouslySetInnerHTML={{ __html: blog.longDesc }}
        />
      </div>
    </section>
  );
};

export default BlogDetails;
