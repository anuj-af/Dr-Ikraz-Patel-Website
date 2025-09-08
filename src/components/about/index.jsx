import { BsArrowRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

import classes from "./about.module.css";
import about from "../../assets/images/about2.png";
import placeholder from "../../assets/images/placeholder.svg"

import Button from "../button";

import logo1 from "../../assets/icons/featured-1.svg";
import logo2 from "../../assets/icons/featured-2.svg";
import logo3 from "../../assets/icons/featured-3.svg";

const About = () => {
  return (
    <div className={classes["about-container"]} id="about">
      <div className={`${classes["about"]} container`}>
        <div className={classes["about-content"]}>
          <div className={classes["about-img-parent"]}>
            <img src={about} alt="About" className={classes["about-img"]} />
          </div>

          <div className={classes["about-text-content"]}>
            <h2 className={classes["about-name"]}>Hello, I’m Ikraz Patel.</h2>

            <p className={classes["about-desc"]}>
              I am Dr. Ikraz Patel, Consultant Physician and Critical Care Specialist, with 5+ years’ experience 
              in internal medicine and advanced cardiac imaging. I’ve served at major hospitals in Ujjain and Indore 
              and currently provide comprehensive care at Arthros Multispeciality Hospital, focusing on diagnosis, 
              critical care, and patient-centered management.
            </p>

            <div className={classes["about-btn-wrapper"]}>
              <Button>
                Send Message <BsArrowRight />
              </Button>
              <Button variant="secondary">
                Download cv <FiDownload />
              </Button>
            </div>
          </div>
        </div>

        <div className={classes["featured-container"]}>
          <p className={classes["featured-heading"]}>Featured by:</p>

          <div className={classes["logo-wrapper"]}>
            <img src={placeholder} className={classes["logo"]} />
            <img src={placeholder} className={classes["logo"]} />
            <img src={placeholder} className={classes["logo"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
