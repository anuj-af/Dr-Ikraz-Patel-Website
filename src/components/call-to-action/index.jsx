import React from "react";
import { GoArrowRight } from "react-icons/go";

import classes from "./call-to-action.module.css";
import Button from "../button";

const CallToAction = () => {
  return (
    <div className={classes["call-to-action"]}>
      <div className={`${classes["call-to-action-container"]} container`}>
        <h1 className={classes["title"]}>
          Looking for a Consultant Physician and Critical Care Specialist? Get in touch and let's chat!
        </h1>

        <div className={classes["content"]}>
          <p className={classes["content-desc"]}>
            At Zivanta Health Haus, we bring together modern medical expertise and advanced diagnostics 
            under one roof. We provide care through highly qualified doctors across various specialities, 
            for patients of all age groups.
          </p>
          <Button>
            Get in touch <GoArrowRight size={"2.4rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
