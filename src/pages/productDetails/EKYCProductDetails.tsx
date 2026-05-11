import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent4 from "../../components/ProductDetails/FrameComponent4";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import UserForm from "../../components/ProductDetails/UserForm";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./EKYCProductDetails.module.css";
import ProductCTA from "../../components/products/ProductCTA";

const Features = [
  { first_title: "Face & Fingerprint", second_title: "Verification" },
  { first_title: "Optical Character", second_title: "Recognition (OCR)" },
  { first_title: "Sanction & Screening", second_title: "" },
  { first_title: "Risk Grading", second_title: "" },
  { first_title: "Full Digital", second_title: "Onboarding" },
  { first_title: "Automated Document", second_title: "Verification" },
  { first_title: "Identity", second_title: "Authentication" },
];

const EKYCProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/ekycBanner.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"eKYC Solution"}
        description={
          "Secure Digital Identity Verification for Fast, Reliable & Compliant User Onboarding."
        }
        projectDetails={[
          {
            label: "Client",
            value:
              "Client Election Commission, GP, Robi, bKash, UCB Bank & Others",
          },
          {
            label: "Industry",
            value: "Enterprise Software",
          },
          { label: "Platform", value: "Web, Android & iOS" },
        ]}
        companyImages={[
          "/ekycProd1.jpg",
          "/ekycProd2.jpg",
          "/ekycProd3.jpg",
          "/ekycProd4.jpg",
        ]}
      />
      {/* <FrameComponent4 className={styles.snapSection} /> */}

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      {/* <div className={styles.con2}> */}
      {/* <ProductCTA /> */}
      {/* </div> */}
      {/* <UserForm isHrms={true} className={styles.snapSection} /> */}
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default EKYCProductDetails;
