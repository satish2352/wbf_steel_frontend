import "./ProjectBanner.css";
import ProjectImg from "../../assets/about_img/PD.png";
import ProjectImgMobile from "../../assets/about_img/PM.png";

function ContactImage() {
  return (
    <section className="Projectt">
      <picture>
        <source media="(max-width: 678px)" srcSet={ProjectImgMobile} />
        <img src={ProjectImg} alt="Project Banner" className="project-img" />
      </picture>
    </section>
  );
}

export default ContactImage;
