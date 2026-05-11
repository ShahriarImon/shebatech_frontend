import { FunctionComponent } from "react";
import DevelopmentSoftwarePair from "./DevelopmentSoftwarePair";
import styles from "./DigitalIdenty.module.css";
import DigitalIdentityCard from "./DigitalIdentityCard";

export type FrameComponent5Type = {
  className?: string;
};
const digitalIdentityList = [
  {
    icon: "/biomet.svg",
    header: "Biometric Verification",
    features: [
      "Face recognition",
      "Liveness detection",
      "Face matching against ID database",
    ],
  },
  {
    icon: "/ekyc.svg",
    header: "eKYC",
    features: [
      "Full Digital Onboarding",
      "Automated Document Verification",
      "Identity Authentication",
    ],
  },
  {
    icon: "/security.svg",
    header: "Identity Data & Verification Platforms",
    features: [
      "Centralized identity validation systems",
      "Secure storage and management of user identity data",
      "Audit trails and compliance tracking",
    ],
  },
  {
    icon: "/notify.svg",
    header: "Fraud Detection & Risk Scoring",
    features: [
      "Duplicate Identity Detection",
      "Behavioral Monitoring",
      "AI Prevention Mechanisms",
    ],
  },
];
const DigitalIdenty: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialSummaryParent, className].join(" ")}>
      <section className={styles.testimonialSummary}>
        <h2 className={styles.header}>Digital Identy</h2>
        <div className={styles.testimonialSubtitle}>
          <div
            className={styles.header2}
          >{`Leveraging advanced biometrics and real-time risk scoring to protect your digital ecosystem while ensuring every user interaction is authenticated with the highest level of precision.`}</div>
        </div>
      </section>

      <div className={styles.expertContainerInner}>
        <div className={`grid grid-cols-2 gap-6 w-full `}>
          {digitalIdentityList?.map((ele) => (
            <DigitalIdentityCard
              header={ele?.header}
              features={ele?.features}
              icon={ele?.icon}
            />
          ))}

          {/* <DigitalIdentityCard
            developmentSoftwarePairBackgroundColor="#41444f"
            rectangleDivBackgroundColor="#41444f"
            header="OCR & document intelligence"
          />{" "}
          <DigitalIdentityCard
            developmentSoftwarePairBackgroundColor="#41444f"
            rectangleDivBackgroundColor="#41444f"
            header="Predictive analytics and forecasting"
          />
          <DigitalIdentityCard
            developmentSoftwarePairBackgroundColor="#34373f"
            rectangleDivBackgroundColor="#34373f"
            header={`Compliance & Audit Tracking`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DigitalIdenty;
