import React from "react";
import { useParams } from "react-router-dom";
import styles from "./JobpageDetails.module.css";
import HeroSection from "../../components/JobPageDetails/HeroSection";
import Description from "../../components/JobPageDetails/Description";
import FrameComponent4 from "../../components/JobPageDetails/FrameComponent4";
import FrameComponent7 from "../../components/JobPageDetails/FrameComponent7";

function DataAnalystJobPageDetails() {
  const { jobId } = useParams();

  const job = {
    title: "Data Analyst",
    image: "/jobImage.jpg",
    label: "Job Details",
    salary: "Negotiable",
    jobType: "Full Time",
    location: "Mohakhali",
    experience: "3+ Years",
    postedOn: "3 May, 2026",
    applyBefore: "30 May, 2026",
    description:
      "We are seeking a detail-oriented Data Analyst to turn raw data into actionable insights that drive business decisions. You will be responsible for collecting, processing, and analyzing large datasets, as well as creating intuitive dashboards for business stakeholders. The ideal candidate possesses a strong analytical mindset and the technical ability to extract stories from complex data.",
    responsibilities: [
      "Extract, clean, and analyze data from multiple sources to identify trends and patterns",
      "Design, build, and maintain interactive business intelligence dashboards and reports",
      "Collaborate with cross-functional teams (marketing, product, sales) to understand their data needs",
      "Write complex SQL queries to extract data efficiently from relational databases",
      "Perform ad-hoc analyses to answer specific business questions and support strategic initiatives",
      "Develop and track key performance indicators (KPIs) for various business units",
      "Communicate complex analytical findings to non-technical stakeholders clearly and concisely",
      "Help establish and enforce data quality and governance standards",
    ],
    requirements: [
      "Bachelor’s degree in Mathematics, Statistics, Economics, Computer Science, or a related field",
      "Proven working experience as a Data Analyst or Business Data Analyst",
      "Advanced proficiency in SQL for data querying and manipulation",
      "Experience with BI and data visualization tools (e.g., Tableau, Power BI, or Looker)",
      "Familiarity with statistical programming languages like Python (Pandas, NumPy) or R",
      "Strong analytical skills with the ability to collect, organize, analyze, and disseminate significant amounts of information",
      "Excellent communication and presentation skills",
      "Keen attention to detail and a high commitment to data accuracy",
    ],
    perksHeader: "Perks & Benefits",
    perksSubHeader:
      "We are the best custom software development company for custom software development outsourcing.",
    perks: [
      { icon: "/sack-dollar-2-1.svg", title: "Competitive Salary" },
      { icon: "/calendar-2.svg", title: "Carry Forward Leave" },
      { icon: "/desk-1.svg", title: "Friendly Environment" },
      { icon: "/bonus-1.svg", title: "Festival Bonus", isCustomBg: true },
      {
        icon: "/bench-tree-1.svg",
        title: "Quarterly Team Outings",
        isCustomBg: true,
      },
      { icon: "/calendar-2.svg", title: "Annual Leave", isCustomBg: true },
      { icon: "/employee-performance-1.svg", title: "Performance Bonus" },
      { icon: "/plate-utensils-1.svg", title: "Lunch Facilities" },
      { icon: "/refer-7.svg", title: "Knowledge Sharing Session" },
      {
        icon: "/plane-globe-1.svg",
        title: "Annual Retreat & Family Tour",
        isCustomBg: true,
      },
      {
        icon: "/mug-tea-1.svg",
        title: "Unlimited Tea, Coffee.",
        isCustomBg: true,
      },
      {
        icon: "/patient-1.svg",
        title: "Casual & Sick Leave",
        isCustomBg: true,
      },
      { icon: "/calendar-1.svg", title: "Bereavement Leave" },
      {
        icon: "/improve-user-6.svg",
        title: "Training and Learning Materials to Improve Skills",
      },
      { icon: "/baby-1.svg", title: "Maternal and Parental Leave" },
    ],
  };

  return (
    <div id="job-page-details-container" className={styles.container}>
      <div className={styles.section}>
        <div className="pl-[4.875rem] pr-[5.125rem] pt-[5.5rem]">
          <HeroSection title={job.title} image={job.image} label={job.label} />
        </div>
      </div>
      <div className={styles.section}>
        <div className="pl-[4.875rem] pr-[5.125rem]">
          <Description
            salary={job.salary}
            jobType={job.jobType}
            location={job.location}
            experience={job.experience}
            postedOn={job.postedOn}
            applyBefore={job.applyBefore}
            description={job.description}
            responsibilities={job.responsibilities}
            requirements={job.requirements}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className="pl-[4.875rem] pr-[5.125rem]">
          <FrameComponent4
            header={job.perksHeader}
            subHeader={job.perksSubHeader}
            perks={job.perks}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className="pl-[4.875rem] pr-[5.125rem] pb-[4rem]">
          <FrameComponent7 />
        </div>
      </div>
    </div>
  );
}
// 0 5.125rem 0 4.875rem;
export default DataAnalystJobPageDetails;
