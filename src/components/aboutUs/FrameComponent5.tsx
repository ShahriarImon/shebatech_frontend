import { FunctionComponent, useState } from "react";
import Team from "./Team";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const [isHide, setIsHide] = useState(false);
  const [teamItems] = useState([
    {
      property1: "Default" as const,
      rectangle295: "/Rectangle295.png",
      frameDivWidth: "12.688rem" as const,
      frameDivWidth1: "10rem" as const,
      patrikFilder: "Farhan Islam",
      // patrikFilderWidth: "7.688rem" as const,
      chiefOperationsOfficer: "Chief Operating Officer",
      chiefOperationsOfficerWidth: "10rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/reazBhai.jpg",
      frameDivWidth: "13.438rem" as const,
      frameDivWidth1: "10.75rem" as const,
      patrikFilder: "Md Rejwanul Reaz",
      chiefOperationsOfficer: "Development Team Leader",
      chiefOperationsOfficerWidth: "10.75rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/mujahidulIslam.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Mujahidul Islam",
      chiefOperationsOfficer: "Project Manager",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/lipuBhai.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "G M Fazlul Kadir",
      chiefOperationsOfficer: "Software Engineer (.Net)",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/mahfuzBhai.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Mahfuzhur Rahman",
      chiefOperationsOfficer: "Software Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/fahimaApu.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Fahima Chowdhury",
      chiefOperationsOfficer: "Software Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/rakibBhai.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Rokibul Hasan",
      chiefOperationsOfficer: "Software Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },

    {
      property1: "Default" as const,
      rectangle295: "/placeholder.png",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Md. Abdur Rahim Sabuj",
      chiefOperationsOfficer: "UI/UX Designer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/utsho.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Md. Iftekaar Alam Utsa",
      chiefOperationsOfficer: "Software Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/fakeImon.jpg",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Shahriar Imon",
      chiefOperationsOfficer: "Software Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
    {
      property1: "Default" as const,
      rectangle295: "/placeholder.png",
      frameDivWidth: "12.313rem" as const,
      frameDivWidth1: "9.625rem" as const,
      patrikFilder: "Abdullah Al Asif",
      chiefOperationsOfficer: "Junior ML & Data Engineer",
      chiefOperationsOfficerWidth: "9.625rem" as const,
    },
  ]);
  return (
    <section className={[styles.headerParent, className].join(" ")} id="team">
      <h2 className={styles.header}>Meet The Team</h2>

      <div
        className={`grid grid-cols-3 gap-4`}
        // className={`grid grid-cols-3 gap-4 ${isHide ? styles?.container : ""}`}
      >
        {(!isHide ? teamItems.slice(0, 3) : teamItems).map((item, index) => (
          <div>
            <Team
              key={index}
              property1={item.property1}
              rectangle295={item.rectangle295}
              frameDivWidth={item.frameDivWidth}
              frameDivWidth1={item.frameDivWidth1}
              patrikFilder={item.patrikFilder}
              chiefOperationsOfficer={item.chiefOperationsOfficer}
              chiefOperationsOfficerWidth={item.chiefOperationsOfficerWidth}
            />
          </div>
        ))}
      </div>

      <button className={styles.footerColumn}>
        <button
          className={styles.innerColumn}
          onClick={() => setIsHide((prev) => !prev)}
        >
          <button className={styles.buttonText}>View Full Team</button>
          <img
            className={styles.arrowSmallRight1Icon}
            alt=""
            src="/arrow-small-right-1.svg"
          />
        </button>
      </button>
    </section>
  );
};

export default FrameComponent5;
