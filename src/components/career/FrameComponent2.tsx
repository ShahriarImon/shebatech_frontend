import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          Join the team behind <br />
          the future of work
        </div>
      </div>
      <section className={styles.skillRowsParent}>
        <img
          className={styles.skillRowsIcon}
          loading="lazy"
          alt=""
          src="/Skill-Rows1@2x.png"
        />
        <div className={styles.skillRows}>
          <img
            className={styles.skillRowIcon}
            loading="lazy"
            alt=""
            src="/Skill-Row@2x.png"
          />
        </div>
        <img
          className={styles.skillRowsIcon2}
          alt=""
          src="/Skill-Rows@2x.png"
        />
        <div className={styles.skillRows}>
          <img
            className={styles.skillRowsChild}
            loading="lazy"
            alt=""
            src="/Rectangle-268@2x.png"
          />
        </div>
        <img
          className={styles.skillRowsIcon3}
          loading="lazy"
          alt=""
          src="/Skill-Rows2@2x.png"
        />
      </section>
      <img
        className={styles.frameInner}
        loading="lazy"
        alt=""
        src="/Group-71.svg"
      />
    </div>
  );
};

export default FrameComponent2;
