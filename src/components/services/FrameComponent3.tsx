import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";
import VerticalSteps from "./VerticalSteps";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <section className={styles.frameContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h3 className={styles.howWeWorks}>HOW WE WORKS</h3>
          </div>
          <div className={styles.headerParent}>
            <h2 className={styles.header}>Our Simple Process</h2>
            <div className={styles.headerWrapper}>
              <div className={styles.header2}>
                A streamlined approach that turns ideas into impactful
                solutions—ensuring efficiency, clarity, and success at every
                step.
              </div>
            </div>
          </div>
        </section>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/businessProcess.jpg"
          />
          <VerticalSteps />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
