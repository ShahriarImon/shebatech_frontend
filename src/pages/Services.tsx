import { FunctionComponent } from "react";
import FrameComponent from "../components/services/FrameComponent";
import FrameComponent1 from "../components/services/FrameComponent1";
import FrameComponent2 from "../components/services/FrameComponent2";
import FrameComponent3 from "../components/services/FrameComponent3";
import CustomSoftwareDev from "../components/services/CustomSoftwareDev";
import FrameComponent4 from "../components/services/FrameComponent4";
import FrameComponent5 from "../components/services/FrameComponent5";
import FrameComponent6 from "../components/services/FrameComponent6";
import FrameComponent7 from "../components/services/FrameComponent7";
import styles from "./Services.module.css";
import Footer from "../components/home/Footer";
import MobileApplication from "../components/services/MobileApplication";
import AiMachineLearning from "../components/services/AiMachineLearning";
import DigitalIdenty from "../components/services/DigitalIdenty";

const Services: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      <div className={styles.section1}>
        <FrameComponent />
      </div>
      {/* <div className={styles.section2}>
        <main className={styles.servicesInner}>
          <div>
            <FrameComponent2 />
          </div>
        </main>
      </div>
      */}
      <div className={styles.section4}>
        <main className={styles.servicesInner}>
          <CustomSoftwareDev />
        </main>
      </div>
      <div className={styles.section5}>
        <main className={styles.servicesInner}>
          <MobileApplication />
        </main>
      </div>
      <div className={styles.section6}>
        <main className={styles.servicesInner}>
          <AiMachineLearning />
        </main>
      </div>
      <div className={styles.section6}>
        <main className={styles.servicesInner}>
          <DigitalIdenty />
        </main>
      </div>
      <div className={styles.section5}>
        <main className={styles.servicesInner}>
          <FrameComponent4 />
        </main>
      </div>{" "}
      <div className={styles.section6}>
        <main className={styles.servicesInner}>
          <FrameComponent5 />
        </main>
      </div>
      <div className={styles.section3}>
        <main className={styles.servicesInner}>
          <FrameComponent3 />
        </main>
      </div>
      <div className={styles.section7}>
        <main className={styles.servicesInner}>
          <div className={styles.container}>
            <FrameComponent6 />
          </div>
        </main>
      </div>
      <div className={styles.section8}>
        <FrameComponent7 />
      </div>
    </div>
  );
};

export default Services;
