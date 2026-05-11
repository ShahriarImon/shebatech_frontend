import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export interface Perk {
  icon: string;
  title: string;
  isCustomBg?: boolean;
}

export type FrameComponent4Type = {
  className?: string;
  header: string;
  subHeader: string;
  perks: Perk[];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  header,
  subHeader,
  perks,
}) => {
  return (
    <section className={[styles.careerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>{header}</h2>
          <div className={styles.header2}>{subHeader}</div>
        </div>
        <section className={styles.salaryPerks}>
          <div className={styles.wellnessPerks} style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 4rem' }}>
            {perks.map((perk, index) => (
              <div key={index} className={styles.frameParent11}>
                <div className={styles.ellipseParent}>
                  <div className={perk.isCustomBg ? styles.ellipseDiv : styles.frameChild} />
                  <img
                    className={styles.calendar2Icon}
                    alt=""
                    src={perk.icon}
                  />
                </div>
                <div className={styles.wellnessDetails}>
                  <h3 className={styles.annualLeave}>{perk.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent4;
