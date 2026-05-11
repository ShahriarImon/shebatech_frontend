import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  dashboardIcon?: string;
  communityIcon?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  dashboardIcon = "/hrms.jpg",
  communityIcon = "/hr-group-1.svg",
}) => {
  return (
    <div className={[styles.featureItemsParent, className].join(" ")}>
      <div className={styles.heroBackground}>
        <img
          className={styles.dashboardIcon}
          alt="Dashboard Illustration"
          src={dashboardIcon}
        />
        <div className={styles.gradientOverlay1} />
        <div className={styles.gradientOverlay2} />
        <div className={styles.gradientOverlay3} />
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.circleContainer}>
          <div className={styles.circleBackground} />
          <img
            className={styles.communityIcon}
            loading="lazy"
            alt="Community"
            src={communityIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
