import React from "react";
import styles from "./Description.module.css";
import { GoDotFill } from "react-icons/go";

export interface DescriptionProps {
  salary: string;
  jobType: string;
  location: string;
  experience: string;
  postedOn: string;
  applyBefore: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

function Description({
  salary,
  jobType,
  location,
  experience,
  postedOn,
  applyBefore,
  description,
  responsibilities,
  requirements,
}: DescriptionProps) {
  return (
    <div className="relative mt-[5rem] text-white">
      {/* Job Summary Card */}
      <div className={styles.cardContainer}>
        <img
          src="/STL-Logo-high-resolution-02-1@2x.png"
          alt="Company Logo"
          className={styles.cardLogo}
        />
        <div className={styles.divider}></div>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Salary</span>
            <span className={styles.infoValue}>{salary}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Job Type</span>
            <span className={styles.infoValue}>{jobType}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Location</span>
            <span className={styles.infoValue}>{location}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Experience</span>
            <span className={styles.infoValue}>{experience}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Job Posted On</span>
            <span className={styles.infoValue}>{postedOn}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Apply Before</span>
            <span className={styles.infoValue}>{applyBefore}</span>
          </div>
        </div>
        <button className={styles.applyButton}>Apply Now</button>
      </div>
      <div className={`${styles.descriptionCon}`}>
        <p className={`${styles.title}`}>Description</p>
        <p className={`${styles.subTitle}`}>{description}</p>
      </div>
      <div className={`mt-[4rem] ${styles.descriptionCon}`}>
        <p className={`${styles.title}`}>Responsibilities</p>
        <div className={`${styles.listCon}`}>
          {responsibilities.map((resp, index) => (
            <div key={index} className={`${styles.list}`}>
              <GoDotFill style={{ width: "5px" }} />
              <p className={`${styles.subTitle}`}>{resp}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className={`mt-[4rem] ${styles.descriptionCon}`}>
        <p className={`${styles.title}`}>Requirements</p>
        <div className={`${styles.listCon}`}>
          {requirements.map((req, index) => (
            <div key={index} className={`${styles.list}`}>
              <GoDotFill style={{ width: "5px" }} />
              <p className={`${styles.subTitle}`}>{req}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
