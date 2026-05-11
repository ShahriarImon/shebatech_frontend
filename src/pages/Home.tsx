import { FunctionComponent } from "react";
import Navigation from "../components/home/Navigation1";
import StatsView from "../components/home/StatsView";
import IdentityZone from "../components/home/IdentityZone";
import FrameComponent3 from "../components/home/FrameComponent3";
import FrameComponent4 from "../components/home/FrameComponent4";
import FrameComponent5 from "../components/home/FrameComponent5";
import FrameComponent from "../components/home/FrameComponent";
import styles from "./Home.module.css";
import Footer from "../components/home/Footer";
import ServiceList from "../components/home/ServiceList";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <div style={{ width: "100%" }} className={styles.section1}>
        <Navigation />
      </div>
      <div className={styles.section2}>
        <section className={styles.frameWrapper}>
          <header className={styles.headerParent}>
            <h2 className={styles.header}>Solutions We Deliver</h2>
            <div className={styles.header2}>
              We deliver smart, scalable digital solutions tailored for your
              business. Our technology simplifies operations and drives
              sustainable growth.
            </div>
          </header>
        </section>

        {/* <DetailSegments /> */}
        <ServiceList />
      </div>
      <div className={styles.section3}>
        <StatsView />
      </div>
      <div className={styles.section4}>
        <IdentityZone />
      </div>
      <div className={styles.section5}>
        <div style={{ width: "100%" }}>
          <FrameComponent3 />
        </div>
      </div>
      <div className={styles.section6}>
        <FrameComponent4 />
      </div>
      <div className={styles.section7}>
        <FrameComponent5 />
      </div>
      <section className={`${styles.frameGroup} ${styles.section8}`}>
        <FrameComponent />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
