import React from "react";
import { useParams } from "react-router-dom";
import styles from "./JobpageDetails.module.css";
import HeroSection from "../../components/JobPageDetails/HeroSection";
import Description from "../../components/JobPageDetails/Description";
import FrameComponent4 from "../../components/JobPageDetails/FrameComponent4";
import FrameComponent7 from "../../components/JobPageDetails/FrameComponent7";

function JobPageDetails() {
  const { jobId } = useParams();

  const job = {
    title: "Full Stack Engineer",
    image: "/jobImage.jpg",
    label: "Job Details",
    salary: "Negotiable",
    jobType: "Full Time",
    location: "Mohakhali",
    experience: "3+ Years",
    postedOn: "3 May, 2026",
    applyBefore: "30 May, 2026",
    description:
      "We are looking for a skilled Full Stack Engineer to design, develop, and maintain scalable web applications. You will work closely with product managers, designers, and other engineers to deliver high-quality, user-centric digital solutions. This role requires strong problem-solving skills and hands-on experience across both front-end and back-end technologies.",
    responsibilities: [
      "Develop and maintain front-end and back-end components of web applications",
      "Build reusable, clean, and efficient code following best practices",
      "Collaborate with UI/UX designers to implement responsive and intuitive interfaces",
      "Design and integrate RESTful APIs and third-party services",
      "Optimize applications for performance, scalability, and security",
      "Troubleshoot, debug, and improve existing systems",
      "Participate in code reviews and technical discussions",
      "Stay updated with emerging technologies and industry trends",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or a related field (or equivalent experience)",
      "Proven experience as a Full Stack Engineer or similar role",
      "Strong knowledge of JavaScript, HTML, CSS, and modern frameworks (React, Vue, or Angular)",
      "Experience with back-end technologies such as Node.js, Python, Java, or PHP",
      "Hands-on experience with databases (MySQL, PostgreSQL, MongoDB, etc.)",
      "Familiarity with version control systems (Git)",
      "Understanding of REST APIs, authentication, and web security best practices",
      "Ability to write clean, maintainable, and well-documented code",
      "Strong problem-solving and communication skills",
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
export default JobPageDetails;
