import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./PostalVoteCaseStudy.module.css";

const Features = [
  { first_title: "Digital Postal", second_title: "Voting Registration" },
  { first_title: "Secure eKYC &", second_title: "NID Verification" },
  { first_title: "Real-Time Application", second_title: "Tracking" },
  { first_title: "Multi-Step Voter", second_title: "Authentication" },
  { first_title: "Centralized Election", second_title: "Management" },
  { first_title: "Notification &", second_title: "Communication System" },
  { first_title: "Scalable & Cloud-", second_title: "Ready Infrastructure" },
];

const PostalVoteCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/postalVoteBanner.jpg"
            communityIcon="/voting.png"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Postal Vote BD"}
        description={"Secure, Transparent & Accessible Postal Voting System"}
        companyImages={["/pVote1.jpg", "/pVote2.jpg", "/pVote3.jpg"]}
        projectDetails={[
          { label: "Client", value: "Bangladesh Election Comission" },
          { label: "Industry", value: "Election Management & Voting Systems" },
          { label: "Platform", value: "Android & iOS" },
        ]}
      />
      <FrameComponent4
        className={styles.snapSection}
        sections={[
          {
            title: "The Challenge",
            items: [
              {
                header: "Limited Access to Voting for Expatriates",
                header1:
                  "Millions of Bangladeshis abroad are excluded from national elections due to the lack of a remote voting system.",
              },
              {
                header: "Complex Manual Registration Process",
                header1:
                  "Traditional postal voting relied on paperwork, manual verification, and slow communication, causing delays and inefficiencies.",
              },
              {
                header: "Lack of Real-Time Tracking & Transparency",
                header1:
                  "Voters had limited visibility into ballot registration, delivery, and submission status throughout the voting journey.",
              },
              {
                header: "Identity Verification & Security Concerns",
                header1:
                  "Ensuring secure voter authentication and preventing fraudulent registrations were major challenges for remote voting systems.",
              },
              {
                header: "Global Scalability & Support",
                header1:
                  "Managing voter registrations, postal delivery, and multilingual support across multiple countries required a scalable digital infrastructure.",
              },
            ],
          },
          {
            title: "Our Solution",
            items: [
              {
                header: "Digital Postal Voting Platform",
                header1:
                  "Built a secure mobile platform allowing Bangladeshi expatriates to register and vote remotely via digital postal voting.",
              },
              {
                header: "Smart eKYC & Facial Verification",
                header1:
                  "Integrated secure identity verification with NID validation, facial recognition, and liveness detection to ensure voter authenticity.",
              },
              {
                header: "End-to-End Registration & Ballot Tracking",
                header1:
                  "Enabled users to complete registration, track ballot status, and receive voting instructions directly from the app in real time.",
              },
              {
                header: "Centralized Election Management System",
                header1:
                  "Built a centralized backend for managing voter applications, ballot processing, monitoring, and reporting efficiently at scale.",
              },
              {
                header: "Secure & Scalable Infrastructure",
                header1:
                  "Designed a scalable, high-security platform supporting hundreds of thousands of overseas Bangladeshi voters across multiple countries.",
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

export default PostalVoteCaseStudy;
