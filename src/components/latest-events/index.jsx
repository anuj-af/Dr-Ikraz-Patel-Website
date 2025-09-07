import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./latest-events.module.css";
import EventCard from "./event-card";

const LatestEventsShow = () => {
  return (
    <div className={classes["latest-show"]}>
      <div className={`${classes["latest-show-container"]} container`}>
        <div className={classes["heading-wrapper"]}>
          <div className={classes["content-wrapper"]}>
            <h2 className={classes["content-heading"]}>Latest Event & Show</h2>
            <div className={classes["divider"]}></div>
            <p className={classes["content-desc"]}>
              Stay updated with the latest medical insights, health tips, research breakthroughs, 
              and upcoming events to support your well-being.
            </p>
          </div>

          <div className={classes["button-wrapper"]}>
            <button>
              <GoArrowLeft />
            </button>
            <button>
              <GoArrowRight />
            </button>
          </div>
        </div>

        <div className={classes["event-wrapper"]}>
          <EventCard
            date="8 Mar 2025"
            comments={45}
            title="Chairperson Appointment at APICON 2025, Bhopal"
            desc="Honored to be appointed as Chairperson of the Central Zone for APICON 2025, leading key sessions and expert panels."
          />
          <EventCard
            date="1 Apr 2025"
            comments={30}
            title="Latest Blog: Managing Cardiac Risks in Critical Care"
            desc="Explore essential strategies for assessing and managing cardiac risks in critically ill patients with expert insights."
          />
        </div>

        <div className={classes["dots-wrapper"]}>
          <div className={classes["dot"]}></div>
          <div className={`${classes["dot"]} ${classes["dot-active"]}`}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
        </div>
      </div>
    </div>
  );
};

export default LatestEventsShow;
