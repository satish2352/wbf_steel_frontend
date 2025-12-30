import "./ContactImage.css";
import ContactImg from "../../assets/about_img/contactD.png";
import ContactImgMobile from "../../assets/about_img/contactM.png";

function ContactImage() {
  return (
    <section className="Contact">
      <picture>
        <source media="(max-width: 678px)" srcSet={ContactImgMobile} />
        <img src={ContactImg} alt="Contact Banner" className="contact-img" />
      </picture>
    </section>
  );
}

export default ContactImage;
