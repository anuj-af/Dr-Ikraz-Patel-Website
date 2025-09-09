import React from "react";
import classes from "./qualification-awards.module.css";
import ExperienceCard from "./experience-card";
import AwardCard from "./award-card";

import award1 from "../../assets/images/award-1.svg";
import award2 from "../../assets/images/award-2.svg";
import award3 from "../../assets/images/award-3.svg";

const QualificationAwards = () => {
  return (
    <div
      className={`${classes["qualification-awards"]} container`}
      id="education"
    >
      <div className={classes["qualification-heading-wrapper"]}>
        <h1 className={classes["qualification-heading"]}>
          My Qualification & Awards
        </h1>
        <div className={classes["divider-heading"]}></div>
        <p className={classes["qualification-desc"]}>
          MBBS, MD, and Fellowship qualified physician with published research in diabetes, thyroid disorders, 
          and pain management, honored as Chairperson at APICON 2025.
        </p>
      </div>

      <div className={classes["qualification-content"]}>
        <div className={classes["education-wrapper"]}>
          <ExperienceCard
            universityName="Sri Aurobindo Institute of Medical Sciences, Indore"
            duration="2012 to 2018"
            degree="MBBS"
            desc="Completed a 5.5-year undergraduate medical degree with internship covering comprehensive medical education and clinical training."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="RD Gardi Medical College, Ujjain"
            duration="2020 to 2023"
            degree="MD Medicine"
            desc="Pursued a 3-year postgraduate course specializing in Internal Medicine with intensive clinical rotations and research."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="Medvarsity, Apollo Hospital Indore"
            duration="2025"
            degree="Fellowship in 2D Echocardiography"
            desc="Completed specialized training in advanced cardiac imaging and diagnostics to enhance clinical expertise."
          />
        </div>

        <div className={classes["award-card-wrapper"]}>
          <div className={classes["award-card-column"]}>
            <AwardCard
              img={award1}
              count="01"
              title="Chairperson Appointment, Central Zone APICON 2025"
              desc="Appointed as Chairperson for the Central Zone at APICON 2025, Bhopal, leading sessions and contributing to expert panels. (March 8, 2025)"
            />
            <AwardCard
              img={award3}
              count="03"
              title="Clinical and Metabolic Study of Thyroid Disorder"
              desc="Research published in Journal of Cardiovascular Disease Research, Jan 2023, exploring thyroid and diabetes link."
            />
          </div>
          <AwardCard
            img={award2}
            count="02"
            title="Paper Presentations at Medical Conferences"
            desc="Presented research at RSSDI M.P. Chapter, Cardiology & Diabetology forums and Indian Society of Critical Care Medicine."
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationAwards;
