import { FunctionComponent } from "react";
import Component1 from "./Component1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.letsStartSomethingGreatToParent}>
        <h1 className={styles.letsStartSomethingContainer}>
          <span>{`Have A `}</span>
          <span className={styles.great}>Project</span>
          <span>, AN IDEA,</span>
          <br />
          <span>{`OR A TEAM TO `}</span>
          <span className={styles.great}>BUILD</span>
          <span>?</span>
          <br />
          <span className={styles.subTitle}>
            Let's talk — discovery calls are free and usually surface
          </span>
          <br />
          <span className={styles.subTitle2}>things you didn't expect.</span>
        </h1>

        <div className={styles.component2Wrapper}>
          <Component1 property1="Frame 4161" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
