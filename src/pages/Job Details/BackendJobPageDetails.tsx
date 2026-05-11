import React from "react";
import { useParams } from "react-router-dom";
import styles from "./JobpageDetails.module.css";
import HeroSection from "../../components/JobPageDetails/HeroSection";
import Description from "../../components/JobPageDetails/Description";
import FrameComponent4 from "../../components/JobPageDetails/FrameComponent4";
import FrameComponent7 from "../../components/JobPageDetails/FrameComponent7";

function BackendJobPageDetails() {
  const { jobId } = useParams();

  const job = {
    title: "Senior Backend Developer",
    image: "/jobImage.jpg",
    label: "Job Details",
    salary: "Negotiable",
    jobType: "Full Time",
    location: "Mohakhali",
    experience: "5+ Years",
    postedOn: "3 May, 2026",
    applyBefore: "30 May, 2026",
    description:
      "We are seeking a highly experienced Senior Backend Developer to lead the architecture, development, and scaling of our core server-side applications. You will be responsible for designing robust APIs, managing databases, and ensuring high performance and responsiveness to requests from the front-end. This role also involves mentoring junior developers and driving technical best practices across the team.",
    responsibilities: [
      "Design, build, and maintain high-performance, reusable, and reliable server-side code",
      "Architect and implement highly scalable cloud-based microservices",
      "Design and manage complex database schemas and optimize query performance",
      "Develop and maintain secure, RESTful APIs for web and mobile clients",
      "Implement robust security and data protection measures",
      "Identify bottlenecks, troubleshoot bugs, and devise solutions to mitigate technical debt",
      "Mentor junior and mid-level engineers through code reviews and pair programming",
      "Collaborate with DevOps to ensure seamless CI/CD pipelines and deployment",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or equivalent practical experience",
      "5+ years of proven experience in backend development",
      "Deep expertise in server-side languages such as Node.js, Python, Go, or Java",
      "Extensive hands-on experience with relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases",
      "Strong understanding of cloud platforms (AWS, Google Cloud, or Azure)",
      "Experience with microservices architecture and containerization (Docker, Kubernetes)",
      "Proficient understanding of code versioning tools (Git)",
      "Excellent problem-solving, communication, and leadership skills",
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
export default BackendJobPageDetails;
