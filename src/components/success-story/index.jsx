import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import ServiceCard from "./service-card";
import consultationImg from "../../assets/images/consultation.jpeg";
import echoImg from "../../assets/images/echo.png";
import sonographyImg from "../../assets/images/sonography.jpeg";
import xrayImg from "../../assets/images/x-ray.jpeg";
import pathologyImg from "../../assets/images/pathology.webp";
import therapyImg from "../../assets/images/therapy.jpg";


import classes from "./success-story.module.css";

const SuccessStory = () => {
  return (
    <>
    <div className={`${classes["success-story"]} container`}>
      <div className={classes["story-content"]}>
        <div className="content-wrapper">
          <h2 className={classes["story-content-heading"]}>
            About Zivanta Health Haus
          </h2>
          <div className={classes["divider"]}></div>
          <p className={classes["story-content-desc"]}>
            At Zivanta Health Haus, we bring together modern medical expertise and advanced 
            diagnostics under one roof. As a multispeciality clinic, we provide care through 
            highly qualified doctors across various specialities, ensuring holistic treatment 
            for patients of all age groups.
          </p>
        </div>
      </div>

      <div className={classes["story-quote"]}>
        <BiSolidQuoteAltRight className={classes["quote"]} />

        <p className={classes["quote-text"]}>
         Zivanta comes from the blend of “Ziv” meaning light, life, and radiance and “Anta” symbolizing 
         strength, completeness, and essence. Together, it reflects vitality, healing, and wholeness. 
         The word “Haus”, derived from German, means house — making Zivanta Health Haus a true “House of 
         Healing”, where life and health are restored with care and compassion.
        </p>
      </div>
    </div>

    <div className={classes["work-his-heading-wrapper"]}>
      <h1 className={classes["history-heading"]}>Our Services Include</h1>
      <div className={classes["divider"]}></div>
    </div>

    <div className="">
      <div className={classes["service-card-wrapper"]}>
          <ServiceCard
            img={consultationImg}
            title="Multispeciality Consultations"
            desc="Experienced doctors in Internal Medicine, Neurology, Gynecology, ENT, and more providing comprehensive outpatient consultations."
          />

          <ServiceCard
            img={echoImg}
            title="Echocardiography"
            desc="Expert management of critically ill patients using advanced 2D Echocardiography for detailed cardiac evaluation."
          />

          <ServiceCard
            img={sonographyImg}
            title="Advanced Sonography & Imaging"
            desc="Offering Abdomen & Pelvis Scans, Color Doppler, Target Scan, and Fetal Scan with precise imaging technology."
          />

          <ServiceCard
            img={xrayImg}
            title="Digital X-Ray Facility"
            desc="Modern digital X-Ray technology ensures accurate diagnosis with reduced radiation exposure."
          />

          <ServiceCard
            img={pathologyImg}
            title="Comprehensive Pathology"
            desc="Complete range of blood and urine tests with accurate, timely reporting for effective diagnosis."
          />

          <ServiceCard
            img={therapyImg}
            title="Therapeutic & Rehabilitation Support"
            desc="Physiotherapy and Speech Therapy services focused on enhancing recovery and improving quality of life."
          />
      </div>
    </div>
    </>
  );
};

export default SuccessStory;
