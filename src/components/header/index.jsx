import React from "react";
import classes from "./header.module.css";
import Button from "../button";

import headerImg from "../../assets/images/header-img.png";
import placeholder from "../../assets/images/placeholder.svg"

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <header className={`${classes["header"]} container`}>
        <div className={classes["header-content"]}>
          <div>
            <h4 className={classes["header-name"]}>💉 IKRAZ PATEL</h4>

            <h1 className={classes["header-title"]}>
              5+ Years of Consultant Physician and Critical Care Specialist.
            </h1>
          </div>

          <p className={classes["header-desc"]}>
            Dr. Ikraz Patel is a Consultant Physician and Critical Care Specialist, specializing in Internal Medicine, 
            Critical Care, and Echocardiography.
          </p>

          <div className={classes["header-button-wrapper"]}>
            <Button>Learn about me</Button>
            <Button variant="secondary">Patient Success story</Button>
          </div>
        </div>
        <div className={classes["header-img-parent"]}>
          <img
            src={placeholder}
            className={classes["header-img"]}
            alt="Header Image"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
