import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hqai021@gmail.com" data-cursor="disable">
                hqai021@gmail.com
              </a>
            </p>

          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaGithub /> Github</span> <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/humaqureshi-?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaLinkedinIn /> Linkedin</span> <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaXTwitter /> Twitter</span> <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/scale_secure?igsh=MWtnZWRmNGNnMHl0MA=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaInstagram /> Instagram</span> <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Huma Qureshi</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
