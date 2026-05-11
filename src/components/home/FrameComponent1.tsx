import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Our Products</h2>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.frameContainer}>
            <div className={styles.headerParent}>
              <h2 className={styles.header2}>Custom Software Development</h2>
              <div className={styles.titleIcon}>
                <img
                  className={styles.arrowSquare2}
                  loading="lazy"
                  alt=""
                  src="/arrow-square-2.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.systemContainer}>
          <div className={styles.systemContainerChild} />
          <div className={styles.taskManagementSystemWrapper}>
            <h2 className={styles.taskManagementSystem}>
              Task Management System
            </h2>
          </div>
          <img
            className={styles.screensIcon}
            loading="lazy"
            alt=""
            src="/Screens@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
