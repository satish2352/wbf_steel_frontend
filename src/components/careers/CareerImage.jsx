import "./CareerImage.css";
import careerImg from "../../assets/images/Blog/Group 1000005670.webp"; 
import careerImgMobile from "../../assets/images/Mobile Banner/Group 1000005670.webp";

function CareerImage() {
  return (
    <section className="career-image">
      <picture>
        <source media="(max-width: 576px)" srcSet={careerImgMobile} />
        <img src={careerImg} alt="Career Banner" className="career-img" />
      </picture>
    </section>
  );
}


export default CareerImage;
