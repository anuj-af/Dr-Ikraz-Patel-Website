import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-1.jpg";
import work2 from "../../assets/images/work-2.jpeg";
import work3 from "../../assets/images/work-3.webp";

const WorkHistory = () => {
  return (
    <div className={`${classes["work-history"]} container`}>
      <div className={classes["work-his-heading-wrapper"]}>
        <h1 className={classes["history-heading"]}>My Working History</h1>
        <div className={classes["divider"]}></div>
        <p className={classes["history-desc"]}>
          Over 5 Years of Consultant Physician and Critical Care Specialist.
        </p>
      </div>

      <div className={classes["work-history-card-wrapper"]}>
        <WorkHistoryCard
          isCurrent={true}
          img={work1}
          time="2024 to Present"
          title="Arthros Multispeciality Hospital, Indore"
          desc="Consulting Physician & Critical Care Specialist, providing comprehensive care, advanced cardiac diagnostics, and intensive medical management."
        />
        <WorkHistoryCard
          isCurrent={true}
          img={work3}
          time="2024 to Present"
          title="SAIMS Medical College & Hospital, Indore"
          desc="Senior Resident in General Medicine, focused on patient diagnosis, treatment planning, and mentoring junior staff in acute and chronic medical management."
        />
        <WorkHistoryCard
          img={work2}
          time="2020 to 2023"
          title="RD Gardi Medical College & Hospital, Ujjain"
          desc="Served as Resident Doctor, managing emergency cases, inpatient care, and clinical rounds while collaborating with multidisciplinary teams."
        />
      </div>

      {/* <div className={classes["work-history-arrow-wrapper"]}>
        <button>
          <GoArrowLeft />
        </button>
        <button>
          <GoArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export default WorkHistory;
