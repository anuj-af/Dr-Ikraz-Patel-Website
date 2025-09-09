import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import classes from "./latest-events.module.css";
import EventCard from "./event-card";

// All event data here
const events = [
  {
    title: "Research Paper: Lignocaine & Dexamethasone for Propofol Pain",
    desc: "Evaluating Intravenous Lignocaine, Dexamethasone, and their combination on effectiveness of Propofol-induced pain. Published in Journal Bioinformation, Aug 2025."
  },
  {
    title: "Paper Presentation: Cardiology, Diabetology, ECG",
    desc: "Presented in Bhopal, January 2022, covering advancements and case studies in Cardiology, Diabetology, and ECG."
  },
  {
    title: "Paper Presentation: Indian Society of Critical Care Medicine",
    desc: "Featured presentation in Indore, January 2023, sharing clinical research and best practices in critical care medicine."
  },
  {
    title: "Research Paper: Diabetes Risk Score Prediction",
    desc: "Prediction of type 2 diabetes mellitus risk using Indian diabetes risk score among individuals aged 30 and above. Published in Journal Bioinformation, June 2025."
  }
];


const ITEMS_PER_PAGE = 2; // Number of cards to show at once

const LatestEventsShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get subset for display
  const visibleEvents = events.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  // Handle navigation
  const goPrev = () => {
    setCurrentIndex(prev =>
      prev - ITEMS_PER_PAGE < 0
        ? events.length - ITEMS_PER_PAGE
        : prev - ITEMS_PER_PAGE
    );
  };

  const goNext = () => {
    setCurrentIndex(prev =>
      prev + ITEMS_PER_PAGE >= events.length
        ? 0
        : prev + ITEMS_PER_PAGE
    );
  };

  // For dots: calculate active index
  const totalSlides = Math.ceil(events.length / ITEMS_PER_PAGE);

  return (
    <div className={classes["latest-show"]} id="article">
      <div className={`${classes["latest-show-container"]} container`}>
        <div className={classes["heading-wrapper"]}>
          <div className={classes["content-wrapper"]}>
            <h2 className={classes["content-heading"]}>Latest Achievements & Blogs</h2>
            <div className={classes["divider"]}></div>
            <p className={classes["content-desc"]}>
              Stay updated with the latest medical insights, health tips, research breakthroughs, 
              and upcoming events to support your well-being.
            </p>
          </div>
          <div className={classes["button-wrapper"]}>
            <button onClick={goPrev}>
              <GoArrowLeft />
            </button>
            <button onClick={goNext}>
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className={classes["event-wrapper"]}>
          {visibleEvents.map((event, idx) => (
            <EventCard key={event.title} title={event.title} desc={event.desc} />
          ))}
        </div>
        <div className={classes["dots-wrapper"]}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={
                `${classes["dot"]} ${
                  i === Math.floor(currentIndex / ITEMS_PER_PAGE)
                    ? classes["dot-active"]
                    : ""
                }`
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestEventsShow;