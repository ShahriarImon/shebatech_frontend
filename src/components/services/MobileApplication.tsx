import { FunctionComponent } from "react";
import styles from "./MobileApplication.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const MobileApplication: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.partnerSummaryParent, className].join(" ")}>
      <section className={styles.partnerSummary}>
        <h2 className={styles.header}>Mobile Applications </h2>
        <div className={styles.partnerDescription}>
          <div
            className={styles.header2}
          >{`Modern mobile applications designed for performance, scalability, and seamless user experience. We build intuitive apps that engage users and drive real business growth.`}</div>
        </div>
      </section>
      <div className={styles.highlightGridParent}>
        <section className={styles.highlightGrid}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/mobileApplications.jpg"
            />
          </div>
        </section>

        <section className={styles.highlightHeaderWrapper}>
          <div className={styles.highlightHeader}>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>
                Android (Kotlin) & iOS (Swift) native
              </h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>
                Flutter & React Native cross-platform
              </h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2
                className={styles.header5}
              >{`App Store + Play Store launch support`}</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>User-focused UI/UX</h2>
            </div>
            <div className={styles.flat}>
              <img className={styles.frameItem} alt="" src="/Arrow-1.svg" />
              <h2 className={styles.header3}>
                API, backend & cloud integration
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileApplication;
