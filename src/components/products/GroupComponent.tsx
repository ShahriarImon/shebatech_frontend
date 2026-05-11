import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";
import { useNavigate } from "react-router-dom";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/Rectangle-2847@2x.png" />
      <div className={styles.frameWrapper}>
        <div className={styles.featuredSoluionParent}>
          <b className={styles.featuredSoluion}>FEATURED SOLUION</b>
          <div className={styles.ekycVerifyValidateTrustWrapper}>
            <h2 className={styles.ekycVerifyValidateTrust}>
              eKYC-Verify. Validate. Trust
            </h2>
          </div>
          <div className={styles.onboardCustomersInstantlyWiWrapper}>
            <div className={styles.onboardCustomersInstantly}>
              Onboard customers instantly with our secure and AI-powered eKYC
              solution built for speed and accuracy
            </div>
          </div>
          <button
            className={styles.exploreEkycParent}
            onClick={() => navigate("/products/ekyc")}
          >
            <div className={styles.exploreEkyc}>Explore eKYC</div>
            <img className={styles.vectorIcon} alt="" src="/Vector.svg" />
          </button>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/Rectangle-2849@2x.png"
          />
          <img
            className={styles.appleIphone17ProMax2025MIcon}
            alt=""
            src="/apple-iphone-17-pro-max-2025-medium-1@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.idVerifiedWrapper}>
                <div className={styles.idVerified}>ID Verified</div>
              </div>
              <img
                className={styles.checkMark1Icon}
                alt=""
                src="/check-mark-2@2x.png"
              />
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.idVerifiedWrapper}>
                <div className={styles.idVerified}>Face Matched</div>
              </div>
              <img
                className={styles.checkMark1Icon}
                alt=""
                src="/check-mark-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameInner} />
              <div className={styles.idVerifiedWrapper}>
                <div className={styles.livenessDetected}>Liveness Detected</div>
              </div>
              <img
                className={styles.checkMark1Icon}
                alt=""
                src="/check-mark-2@2x.png"
              />
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameInner} />
              <div className={styles.idVerifiedWrapper}>
                <div className={styles.idVerified}>Document Verified</div>
              </div>
              <img
                className={styles.checkMark1Icon}
                alt=""
                src="/check-mark-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
