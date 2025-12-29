import "./ProjectImage.css";
import ProjectImg from "../../assets/images/Group 1000005619.png";

function ProjectImage() {
  return (
    <section className="Project">
      {/* Mobile Image */}
      <img
        src={ProjectImg}
        alt="Project"
        className="project-mobile-img"
      />
    </section>
  );
}

export default ProjectImage;
