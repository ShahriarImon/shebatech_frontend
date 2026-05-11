import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./DMSProductDetails.module.css";
import DmsTmsBanner from "../../components/ProductDetails/DmsTmsBanner";

const Features = [
  { first_title: "Document", second_title: "Scanning" },
  { first_title: "Document Storage", second_title: "and Organization" },
  { first_title: "OCR API", second_title: "Integration" },
  { first_title: "System Log", second_title: "" },
  { first_title: "Access Privilege", second_title: "Settings" },
  { first_title: "Version Control", second_title: "" },
  { first_title: "Dynamic Search", second_title: "" },
];

const DMSProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <DmsTmsBanner
            dashboardIcon="/documentManagement.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Document Management System (DMS)"}
        description={
          "Centralized digital platform for securely storing, organizing, managing, and accessing documents with streamlined workflows and improved collaboration."
          // "Cut through paperwork chaos. DMS brings structure to your documents, approvals, and compliance workflows in one place."
        }
        companyImages={[
          "/dmsProd1.jpg",
          "/dmsProd2.jpg",
          "/dmsProd3.jpg",
          "/dmsProd4.jpg",
        ]}
        projectDetails={[
          { label: "Client", value: "Fast Finance, Sheba Group" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web" },
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />

      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default DMSProductDetails;
