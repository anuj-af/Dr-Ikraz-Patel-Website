import React from "react";
import classes from "./service-card.module.css";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className={classes["service-card"]}>
      <img src={img} alt="Service" />
      <div className={classes["service-card-content"]}>
        <h2 className={classes["service-card-title"]}>{title}</h2>
        <p className={classes["service-card-desc"]}>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
