import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.valueTitlesParent, className].join(" ")}>
      <header className={styles.valueTitles}>
        <h2 className={styles.header}>Our Values</h2>
        <div
          className={styles.header2}
        >{`We are the best custom software development company for custom software development outsourcing. `}</div>
      </header>
      <section className={styles.valueSummary}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.nestedValue}>
            <h2 className={styles.header3}>Integrity</h2>
          </div>
          <div className={styles.header4}>We deliver what we promise.</div>
        </div>
        <div className={styles.valueSummaryInner}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.nestedValue}>
              <h2 className={styles.header3}>Quality</h2>
            </div>
            <div className={styles.header6}>
              We focus on details that make products truly exceptional.
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild} />
          <div className={styles.headerContainer}>
            <h2 className={styles.header3}>Innovation</h2>
          </div>
          <div className={styles.header4}>
            We embrace new ideas and modern technologies.
          </div>
        </div>
        <div className={styles.valueSummaryChild}>
          <div className={styles.frameDiv}>
            <div className={styles.frameItem} />
            <div className={styles.headerFrame}>
              <h2 className={styles.header9}>Responsibility</h2>
            </div>
            <div className={styles.header10}>
              We build solutions that are secure, ethical, and sustainable.
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild} />
          <div className={styles.headerWrapper2}>
            <h1 className={styles.header11}>Customer Success</h1>
          </div>
          <div className={styles.header6}>We deliver what we promise.</div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent4;
