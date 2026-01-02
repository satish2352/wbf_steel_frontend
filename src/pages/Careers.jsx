import React from 'react'
import CareerImage from '../components/careers/CareerImage'
import CareersSections from '../components/careers/CareersSections'
import { Helmet } from "react-helmet-async";

const Careers = () => {
  return (
    <>
    <Helmet>
        <title>Careers | WBF Steel | Join Our Structural Engineering Team</title>
        <meta
          name="description"
          content="Explore career opportunities at WBF Steel. Join our skilled team of structural engineers, BIM specialists, and steel detailing experts to work on global projects and grow your career."
        />
        <meta
          name="keywords"
          content="WBF Steel careers, structural engineering jobs, BIM jobs, steel detailing careers, job openings in Nashik, engineering careers"
        />
        <meta name="author" content="WBF Steel" />
      </Helmet>
    <CareerImage />
    <CareersSections />
    </>
  )
}

export default Careers
