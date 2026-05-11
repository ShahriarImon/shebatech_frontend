import React from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  image: string;
  label?: string;
}

function HeroSection({ title, image, label = "Job Details" }: HeroSectionProps) {
  return (
    <div className="relative">
      <img src={image} alt={title} className="rounded-4xl mt-[16.5px]" />
      <div className={`${styles.gradientOverlay} rounded-4xl`}></div>
      <div className={`${styles.writingContainer}`}>
        {label && (
          <div className={`${styles.button}`}>
            <p className="text-lg font-medium text-white">{label}</p>
          </div>
        )}
        <p className={`${styles.title}`}>{title}</p>
      </div>
    </div>
  );
}

export default HeroSection;
