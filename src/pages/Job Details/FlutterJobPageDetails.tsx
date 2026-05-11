import React from "react";
import { useParams } from "react-router-dom";
import styles from "./JobpageDetails.module.css";
import HeroSection from "../../components/JobPageDetails/HeroSection";
import Description from "../../components/JobPageDetails/Description";
import FrameComponent4 from "../../components/JobPageDetails/FrameComponent4";
import FrameComponent7 from "../../components/JobPageDetails/FrameComponent7";

function FlutterJobPageDetails() {
  const { jobId } = useParams();

  const job = {
    title: "Flutter Developer",
    image: "/jobImage.jpg",
    label: "Job Details",
    salary: "Negotiable",
    jobType: "Full Time",
    location: "Mohakhali",
    experience: "2+ Years",
    postedOn: "3 May, 2026",
    applyBefore: "30 May, 2026",
    description:
      "We are looking for a passionate Flutter Developer to create multi-platform applications for iOS and Android using Google's Flutter framework. You will collaborate closely with UI/UX designers and backend engineers to deliver smooth, visually appealing, and highly functional mobile experiences. The ideal candidate has a deep understanding of Dart and modern state management techniques.",
    responsibilities: [
      "Design and build sophisticated and highly scalable cross-platform mobile apps using Flutter",
      "Translate Figma or Adobe XD designs into high-quality, responsive UI code",
      "Integrate REST APIs and third-party SDKs to connect the app with backend services",
      "Implement robust state management (e.g., Provider, Riverpod, or BLoC)",
      "Write automated tests (unit, widget, and integration) to ensure app stability",
      "Diagnose performance issues and optimize the application for both iOS and Android",
      "Handle app deployments to the Apple App Store and Google Play Store",
      "Stay up-to-date with the latest Flutter and Dart developments",
    ],
    requirements: [
      "Proven experience building and publishing mobile apps using Flutter and Dart",
      "Strong understanding of the Flutter lifecycle and reactive programming",
      "Experience with modern state management solutions (BLoC, Riverpod, Provider)",
      "Familiarity with native Android (Kotlin/Java) or iOS (Swift/Objective-C) development is a strong plus",
      "Experience integrating RESTful APIs and real-time databases (like Firebase)",
      "Solid understanding of mobile app design guidelines (Material Design, Cupertino)",
      "Familiarity with version control (Git) and CI/CD tools for mobile",
      "Ability to write clean, readable, and testable code",
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
export default FlutterJobPageDetails;
