import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./TMSProductDetails.module.css";
import DmsTmsBanner from "../../components/ProductDetails/DmsTmsBanner";

const Features = [
  { first_title: "Task / Sub Task", second_title: "Management" },
  { first_title: "Task Priority", second_title: "Control" },
  { first_title: "Reassign", second_title: "Task Control" },
  { first_title: "Performance Log", second_title: "" },
  { first_title: "Custom Team", second_title: "Management" },
  { first_title: "Analytical Dashboard", second_title: "" },
  { first_title: "Communication Channel", second_title: "" },
  { first_title: "Management", second_title: "Dashboard" },
];

const TMSProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <DmsTmsBanner
            dashboardIcon="/taskManagement.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Task Management System (TMS)"}
        description={
          "Streamline task assignment, tracking, collaboration, and workflow management through a centralized digital platform."
        }
        projectDetails={[
          { label: "Client", value: "Sheba Group" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web, Android & iOS" },
        ]}
        companyImages={[
          "/tmsProd1.jpg",
          "/tmsProd2.jpg",
          "/tmsProd3.jpg",
          "/tmsProd4.jpg",
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />

      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default TMSProductDetails;
