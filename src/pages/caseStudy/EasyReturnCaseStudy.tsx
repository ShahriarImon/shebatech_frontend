import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./EasyReturnCaseStudy.module.css";

const Features = [
  { first_title: "Doorstep Pickup Service", second_title: "" },
  { first_title: "Easy Online Scheduling", second_title: "" },
  { first_title: "Instant or Fast", second_title: "Refund Processing" },
  { first_title: "No Sorting Required", second_title: "" },
  { first_title: "Transparent", second_title: "Earnings System" },
  { first_title: "Real-Time Notifications", second_title: "" },
  { first_title: "Eco-Friendly", second_title: "Recycling Support" },
  { first_title: "Flexible Multi-", second_title: "Location Support" },
];

const EasyReturnCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/eazyReturn.jpg"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Eazy Pickup"}
        description={
          "Making recycling simple, convenient, and eco-friendly for everyone."
        }
        companyImages={["/eazy1.jpg", "/eazy2.jpg", "/eazy3.jpg"]}
        projectDetails={[
          { label: "Client", value: "Eazy Pickup" },
          { label: "Industry", value: "Sustainability Tech" },
          { label: "Platform", value: "Web, Android & iOS" },
        ]}
      />
      <FrameComponent4
        className={styles.snapSection}
        sections={[
          {
            title: "The Challenge",
            items: [
              {
                header: "Manual Return Processing",
                header1:
                  "Return requests were handled manually through emails and spreadsheets, causing delays, errors, and poor tracking of returned items.",
              },
              {
                header: "Lack of System Transparency",
                header1:
                  "Customers and internal teams had limited visibility into return status, approval flow, and refund progress.",
              },
              {
                header: "Inefficient Coordination",
                header1:
                  "Communication gaps between customers, warehouse, and admin teams led to slow turnaround times and repeated follow-ups.",
              },
              {
                header: "No Centralized Data System",
                header1:
                  "Return records were scattered across multiple channels, making reporting and analysis difficult.",
              },
              {
                header: "Customer Experience Issues",
                header1:
                  "The return process was time-consuming and confusing, reducing overall customer satisfaction and trust",
              },
            ],
          },
          {
            title: "Our Solution",
            items: [
              {
                header: "Centralized Return Management System",
                header1:
                  "A unified platform to manage all return requests, tracking, approvals, and processing in one place.",
              },
              {
                header: "Automated Workflow Engine",
                header1:
                  "Smart rule-based workflows to automatically route return requests for approval, inspection, and refund processing",
              },
              {
                header: "Real-Time Tracking & Notifications",
                header1:
                  "Customers and internal teams receive live updates on return status through automated notifications.",
              },
              {
                header: "Warehouse & Admin Integration",
                header1:
                  "Seamless coordination between warehouse operations, inventory system, and admin dashboard for faster processing.",
              },
              {
                header: "Analytics & Reporting Dashboard",
                header1:
                  "Insights on return trends, product issues, and operational performance to improve decision-making.",
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

export default EasyReturnCaseStudy;
