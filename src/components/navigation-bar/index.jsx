import React from "react";
import classes from "./navigation-bar.module.css";
import { useState } from "react"

import Logo from "../logo";
import NavigationLinks from "../navigation-links";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <div className={classes["navigation-container"]}>
      <div className={`${classes["navigation-bar"]} container`}>
        <Logo />

        <button className={classes["mobile-menu-toggle"]} onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span className={classes["hamburger-line"]}></span>
          <span className={classes["hamburger-line"]}></span>
          <span className={classes["hamburger-line"]}></span>
        </button>

        <NavigationLinks isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={() => setIsMobileMenuOpen(false)} />
      </div>
    </div>
  );
};

export default NavigationBar;