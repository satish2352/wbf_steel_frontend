import React from 'react'
import BlogBanner from '../components/blog/BlogBanner'
import BlogIntro from '../components/blog/BlogIntro'
import BlogCard from '../components/blog/BlogCard'
import BlogDetails from '../components/blog/BlogDetails'
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <> 
    
      <Helmet>
        <title>Blog | WBF Steel | Steel Detailing, BIM & Engineering Insights</title>
        <meta
          name="description"
          content="Read the WBF Steel Blog for insights on steel detailing, BIM modeling, connection design, and structural engineering solutions. Stay updated with industry trends and expert tips."
        />
        <meta
          name="keywords"
          content="WBF Steel Blog, steel detailing tips, BIM modeling blog, connection design insights, structural engineering articles, construction trends"
        />
        <meta name="author" content="WBF Steel" />
      </Helmet>

       <BlogBanner />
       <BlogIntro />
       <BlogCard />
      
    
    </>
  )
}

export default Blog
