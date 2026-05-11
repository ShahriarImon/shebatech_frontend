import { FunctionComponent } from "react";
import FrameComponent2 from "../components/aboutUs/FrameComponent2";
import FrameComponent3 from "../components/aboutUs/FrameComponent3";
import FrameComponent4 from "../components/aboutUs/FrameComponent4";
import FrameComponent5 from "../components/aboutUs/FrameComponent5";
import MiddleFooter from "../components/aboutUs/MiddleFooter";
import BottomFooter from "../components/aboutUs/BottomFooter";
import FrameComponent6 from "../components/aboutUs/FrameComponent6";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <main className={styles.topFooterWrapper}>
        <div className={styles.topFooter}>
          <MiddleFooter />
          <BottomFooter />
        </div>
      </main>
      <FrameComponent6 />
    </div>
  );
};

export default AboutUs;
