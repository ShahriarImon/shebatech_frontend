import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./RobiCaseStudy.module.css";

const Features = [
  { first_title: "NID Verification ", second_title: "Integration" },
  { first_title: "MSISDN Verification", second_title: "with BTRC" },
  { first_title: "Retailer Mobile", second_title: "Application" },
  { first_title: "Back-Office", second_title: "Management Portal" },
  { first_title: "Real-Time Analytics", second_title: "Dashboard" },
  { first_title: "Nationwide Retailer", second_title: "Support" },
  { first_title: "Field Visit", second_title: "Report" },
  { first_title: "Secure & Compliant", second_title: "Infrastructure" },
];

const RobiCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/robiBanner.jpg"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"ROBI Subscriber Verification System"}
        description={
          "Automated Verification Platform for ROBI Customer Authentication"
        }
        companyImages={["/robiPort1.jpg", "/robiPort2.jpg", "/robiPort3.jpg"]}
        projectDetails={[
          { label: "Client", value: "Robi Axiata Limited" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web & Mobile" },
        ]}
      />
      <FrameComponent4
        className={styles.snapSection}
        sections={[
          {
            title: "The Challenge",
            items: [
              {
                header: "Manual Subscriber Verification Process",
                header1:
                  "Retailers faced delays and operational inefficiencies due to manual SIM registration and customer verification workflows.",
              },
              {
                header: "Identity Verification Complexity",
                header1:
                  "Ensuring accurate verification against National ID databases and telecom regulations was difficult and time-consuming.",
              },
              {
                header: "ack of Real-Time Transaction Monitoring",
                header1:
                  "Limited visibility into verification activities made it challenging to monitor operations and detect issues instantly.",
              },
              {
                header: "Regulatory Compliance Pressure",
                header1:
                  "Maintaining compliance with BTRC regulations and biometric SIM verification requirements demanded a secure and reliable system.",
              },
              {
                header: "Distributed Retail Network Management",
                header1:
                  "Managing thousands of retailers and service points across the country required a scalable and centralized platform.",
              },
            ],
          },
          {
            title: "Our Solution",
            items: [
              {
                header: "Centralized Subscriber Verification Platform",
                header1:
                  "Developed a robust end-to-end Subscriber Verification System (SVS) for seamless SIM registration and customer onboarding.",
              },
              {
                header: "NID & BTRC Integration",
                header1:
                  "Integrated directly with EC for NID verification and BTRC (CBVMP) for MSISDN validation against customer identity data.",
              },
              {
                header: "Real-Time Analytical Dashboard",
                header1:
                  "Implemented interactive dashboards with near real-time graphical insights for transaction monitoring and operational visibility.",
              },
              {
                header: "Mobile & Web-Based Ecosystem",
                header1:
                  "Built Android mobile applications for retailers alongside a powerful web-based back-office management portal.",
              },
              {
                header: "Scalable & Secure Infrastructure",
                header1:
                  "Designed a highly scalable and secure system capable of supporting nationwide retailer operations and high transaction volumes.",
              },
            ],
          },
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      {/* <UserForm
        isHrms={true}
        className={styles.snapSection}
        title={"Get the TMS Solution"}
        subtitlePart1={
          "Streamline your HR operations with our all-in-one HRMS."
        }
        subtitlePart2={
          "Fill out the form below and our team will contact you shortly."
        }
      /> */}
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default RobiCaseStudy;
