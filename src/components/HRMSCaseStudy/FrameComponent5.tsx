import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  Features: { first_title: string; second_title: string }[];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  Features,
}) => {
  return (
    <section className={[styles.hrmsCaseStudyInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>Features</h2>
          <div className={styles.header2}>
            Discover the powerful features that drive efficiency, simplify
            operations, and empower businesses to achieve growth, innovation,
            and seamless performance.
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full">
          {Features?.map((item) => (
            <div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.nestedValue}>
                  <h2 className={styles.header3}>{item?.first_title}</h2>
                  <h2 className={styles.header3}>{item?.second_title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
