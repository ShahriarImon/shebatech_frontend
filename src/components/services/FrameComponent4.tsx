import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.partnerSummaryParent, className].join(" ")}>
      <section className={styles.partnerSummary}>
        <h2 className={styles.header}>Business Process Outsourcing</h2>
        <div className={styles.partnerDescription}>
          <div
            className={styles.header2}
          >{`Reliable BPO solutions that streamline operations, reduce costs, and help your business stay focused on what matters most.`}</div>
        </div>
      </section>
      <div className={styles.highlightGridParent}>
        <section className={styles.highlightGrid}>
          <div className={styles.rectangleParent}>
            <img className={styles.frameChild} alt="" src="/bpo.jpg" />
          </div>
        </section>

        <section className={styles.highlightHeaderWrapper}>
          <div className={styles.highlightHeader}>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>Back Office Operations</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>Process Design and Automation</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header5}>{`Data Digitization`}</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>SLA-Driven Delivery</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>24/7 support service</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrameComponent4;
