import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.headersBoxParent}>
        <div className={styles.headersBox}>
          <h1 className={styles.header}>Why Choose Our Products</h1>
          <div className={styles.header2}>
            Explore our portfolio showcasing successful projects with leading
            clients, where innovative solutions meet measurable results, proven
            expertise, and lasting impact across industries.
          </div>
        </div>
        <section className={styles.solutionsArea}>
          <div className={styles.frameParent}>
            <div className={styles.shieldCheck12Wrapper}>
              <img
                className={styles.shieldCheck12}
                loading="lazy"
                alt=""
                src="/shield-check-1-2.svg"
              />
            </div>
            <h3 className={styles.enterpriseGradeSecurity}>
              Enterprise-Grade Security
            </h3>
            <div className={styles.bankLevelSecurityTo}>
              Bank-level security to protect your data and ensure complete
              compliance
            </div>
          </div>
          <div className={styles.solutionsAreaChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.shieldCheck12Wrapper}>
                <img
                  className={styles.intersect1Icon}
                  loading="lazy"
                  alt=""
                  src="/intersect-1@2x.png"
                />
              </div>
              <div className={styles.seamlessIntegrationWrapper}>
                <h3 className={styles.enterpriseGradeSecurity}>
                  Seamless Integration
                </h3>
              </div>
              <div className={styles.bankLevelSecurityTo}>
                Easily integrate with your existing systems and third-party
                applications
              </div>
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.solutionDetails}>
            <div className={styles.serviceDetails}>
              <img
                className={styles.intersect1Icon}
                loading="lazy"
                alt=""
                src="/rocket-1@2x.png"
              />
            </div>
            <div className={styles.scalableSolutions}>
              <h3
                className={styles.enterpriseGradeSecurity}
              >{`Scalable & Flexible`}</h3>
            </div>
            <div className={styles.solutionsThatGrow}>
              Solutions that grow with your business and adopt to your changing
              needs
            </div>
          </div>
          <div className={styles.solutionDetails2}>
            <div className={styles.solutionDetailsChild} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.screen11Wrapper}>
              <img
                className={styles.screen11}
                loading="lazy"
                alt=""
                src="/screen-1-1.svg"
              />
            </div>
            <div className={styles.modernUserFriendlyWrapper}>
              <h3
                className={styles.enterpriseGradeSecurity}
              >{`Modern & User-Friendly`}</h3>
            </div>
            <div className={styles.bankLevelSecurityTo}>
              Intuitive interfaces that improve adoption and enhance
              productivity
            </div>
          </div>
          <div className={styles.solutionDetails3}>
            <div className={styles.solutionDetailsChild} />
          </div>
          <div className={styles.solutionDetails4}>
            <div className={styles.support1Wrapper}>
              <img
                className={styles.support1Icon}
                loading="lazy"
                alt=""
                src="/support-1@2x.png"
              />
            </div>
            <div className={styles.reliableSupportWrapper}>
              <h3 className={styles.enterpriseGradeSecurity}>
                Reliable Support
              </h3>
            </div>
            <div className={styles.solutionsThatGrow}>
              Dedicated support team to help you every step of the way
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrameComponent3;
