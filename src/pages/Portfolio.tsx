import { FunctionComponent } from "react";
import FrameComponent2 from "../components/portfolio/FrameComponent2";
import FrameComponent4 from "../components/portfolio/FrameComponent4";
import FrameComponent5 from "../components/portfolio/FrameComponent5";
import CallToAction from "../components/portfolio/CallToAction";
import Footer from "../components/home/Footer";
import styles from "./Portfolio.module.css";

const Portfolio: FunctionComponent = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.section1}>
        <FrameComponent2 />
        <section className={`${styles.instanceParent}`}>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangle} />
            <div className={styles.instanceChild} />
            <div className={styles.frameChild} />
            <img
              className={styles.screenshot31Icon}
              loading="lazy"
              alt=""
              src="/Frame4163.png"
            />
          </div>
        </section>{" "}
      </div>

      {/* <div className={styles.section3}>
        <FrameComponent4 />
      </div> */}

      <div className={styles.section4} id="projects">
        <FrameComponent5 />
      </div>

      <main className={`${styles.footerArea} ${styles.section5}`}>
        <div className={styles.callToActionParent}>
          <CallToAction />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
