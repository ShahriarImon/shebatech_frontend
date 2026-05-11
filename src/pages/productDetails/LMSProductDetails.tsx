import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./LMSProductDetails.module.css";
import DmsTmsBanner from "../../components/ProductDetails/DmsTmsBanner";

const Features = [
  { first_title: "Live Classes", second_title: "" },
  { first_title: "Analytical Dashboard", second_title: "" },
  { first_title: "Tracking Progress", second_title: "" },
  { first_title: "Course Manager", second_title: "" },
  { first_title: "Content Vault", second_title: "" },
  { first_title: "Assessment Test", second_title: "" },
  { first_title: "Certificates", second_title: "" },
  { first_title: "Training Hub", second_title: "" },
];

const LMSProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <DmsTmsBanner
            dashboardIcon="/lmsBanner.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Learning Management System (LMS)"}
        description={"Empowering education through structured digital learning"}
        projectDetails={[
          { label: "Client", value: "Sheba Group" },
          { label: "Industry", value: "EdTech" },
          { label: "Platform", value: "Web, Android & iOS" },
        ]}
        companyImages={[
          "/lmsProd1.jpg",
          "/lmsProd2.jpg",
          "/lmsProd3.jpg",
          "/lmsProd4.jpg",
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed
        className={styles.snapSection}
        usedTechnologies={[
          "React.js",
          "PHP",
          "Node.js",
          "MySQL",
          "MongoDB",
          "Figma",
        ]}
      />

      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default LMSProductDetails;
