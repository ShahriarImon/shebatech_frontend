import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./VideoAnalyticProductDetails.module.css";
import DmsTmsBanner from "../../components/ProductDetails/DmsTmsBanner";

const Features = [
  { first_title: "People Count", second_title: "" },
  { first_title: "Object Detection", second_title: "" },
  { first_title: "Intrusion Detection", second_title: "" },
  { first_title: "Red Zone", second_title: "Monitoring" },
  { first_title: "License Plate", second_title: "Detection" },
  { first_title: "Number Plate", second_title: "Recognition" },
  { first_title: "Optical Character", second_title: "Recognition" },
];

const VideoAnalyticProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <DmsTmsBanner
            dashboardIcon="/videoAnalyticsBanner.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Video Analytics"}
        description={"Smarter decisions through video-driven analytics"}
        projectDetails={[
          { label: "Client", value: "Sheba Group" },
          { label: "Industry", value: "Security & Surveillance" },
          { label: "Platform", value: "Web" },
        ]}
        companyImages={[
          "/videoAnalyticsProd1.jpg",
          "/videoAnalyticsProd2.jpg",
          "/videoAnalyticsProd3.jpg",
          "/videoAnalyticsProd4.jpg",
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />

      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default VideoAnalyticProductDetails;
