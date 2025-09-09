import React, { useState } from "react";
import classes from "./header.module.css";
import Button from "../button";
import headerImg from "../../assets/images/header-img1.png";
import placeholder from "../../assets/images/placeholder.svg";

const Header = () => {
  // true: Zivanta info is shown; false: Dr. Ikraz Patel info is shown
  const [showZivanta, setShowZivanta] = useState(true);

  return (
    <div className={classes["header-container"]}>
      <header className={`${classes["header"]} container`}>
        <div className={classes["header-content"]}>
          {showZivanta ? (
            <div>
              <h4 className={classes["header-name"]}>💉 IKRAZ PATEL</h4>
              <h1 className={classes["header-title"]}>
                Zivanta Health Haus, Multispeciality Clinic
              </h1>
              <p className={classes["header-desc"]}>
                At Zivanta Health Haus, we bring together modern medical expertise and advanced diagnostics under one roof. 
                As a multispeciality clinic, we provide care through highly qualified doctors.
              </p>
            </div>
          ) : (
            <div>
              <h4 className={classes["header-name"]}>💉 IKRAZ PATEL</h4>
              <h1 className={classes["header-title"]}>
                5+ Years of Consultant Physician and Critical Care Specialist.
              </h1>
              <p className={classes["header-desc"]}>
                Dr. Ikraz Patel is a Consultant Physician and Critical Care Specialist, specializing in Internal Medicine, 
                Critical Care, and Echocardiography.
              </p>
            </div>
          )}

          <div className={classes["header-button-wrapper"]}>
            <Button
              variant={showZivanta ? "primary" : "secondary"}
              onClick={() => setShowZivanta(true)}
            >
              Learn About Zivanta
            </Button>
            <Button
              variant={!showZivanta ? "primary" : "secondary"}
              onClick={() => setShowZivanta(false)}
            >
              Learn about Dr. Ikraz Patel
            </Button>
          </div>
        </div>
        <div className={classes["header-img-parent"]}>
          <img
            src={headerImg}
            className={classes["header-img"]}
            alt="Header Image"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;