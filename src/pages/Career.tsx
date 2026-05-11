import { FunctionComponent } from "react";
import FrameComponent2 from "../components/career/FrameComponent2";
import FrameComponent3 from "../components/career/FrameComponent3";
import FrameComponent4 from "../components/career/FrameComponent4";
import FrameComponent5 from "../components/career/FrameComponent5";
import FrameComponent6 from "../components/career/FrameComponent6";
import FrameComponent7 from "../components/career/FrameComponent7";
import styles from "./Career.module.css";

const Career: FunctionComponent = () => {
  return (
    <div className={styles.career}>
      <section className={styles.careerInner}>
        <div className={styles.frameParent}>
          {/* <FrameComponent1 /> */}
          {/* <NonFloatingNavbar /> */}
          <FrameComponent2 />
        </div>
      </section>
      <div className={styles.rectangle} />
      <FrameComponent3 className={styles.snapSection} />
      <FrameComponent4 className={styles.snapSection} />
      <FrameComponent5 className={styles.snapSection} />
      <FrameComponent6 className={styles.snapSection} />
      <FrameComponent7 className={styles.snapSection} />
    </div>
  );
};

export default Career;
