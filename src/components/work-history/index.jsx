import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-5.png";
import work2 from "../../assets/images/work-6.png";
import work3 from "../../assets/images/work-4.png";

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
          img={work3}
          time="CURRENTLY WORKING"
          title="Arthros Multispeciality Hospital, Indore"
          desc="Consulting Physician & Critical Care Specialist, providing comprehensive care, advanced cardiac diagnostics, and intensive medical management."
        />
        <WorkHistoryCard
          img={work1}
          time="Mar,2017 to Dec,2018"
          title="RD Gardi Medical College & Hospital, Ujjain"
          desc="Served as Resident Doctor, managing emergency cases, inpatient care, and clinical rounds while collaborating with multidisciplinary teams."
        />
        <WorkHistoryCard
          img={work2}
          time="Jan,2019 to March,2021"
          title="SAIMS Medical College & Hospital, Indore"
          desc="Senior Resident in General Medicine, focused on patient diagnosis, treatment planning, and mentoring junior staff in acute and chronic medical management."
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
