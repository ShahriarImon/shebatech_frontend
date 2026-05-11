import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.footerBackgroundParent, className].join(" ")}>
      <div className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <div className={styles.footerContentChild} />
        <div className={styles.nounSkyscraper31054541} />
        <section className={styles.footerSummary}>
          <div className={styles.siteInformation}>
            <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
            <div className={styles.servicesLink}>
              <h3 className={styles.ourServices}>Our Services</h3>
              <h3 className={styles.ourServices}>Career</h3>
              <h3 className={styles.ourServices}>Contact</h3>
              <h3 className={styles.ourServices}>Blog</h3>
            </div>
          </div>
        </section>
        <div className={styles.contactInformation}>
          <div className={styles.contactContainer}>
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon} alt="" src="/Group.svg" />
            </div>
            <div className={styles.locationLabel}>
              <h3 className={styles.ourServices}>Dhaka</h3>
            </div>
            <div
              className={styles.khawajaTower95}
            >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.resourceContainer}>
            <div className={styles.resourceHeader}>
              <div className={styles.deckImage}>
                <div className={styles.deckImageChild} />
                <img
                  className={styles.download1Icon}
                  loading="lazy"
                  alt=""
                  src="/download-1.svg"
                />
              </div>
              <div className={styles.deckDetails}>
                <div className={styles.titleAndSubtitle}>
                  <div className={styles.companyDeck}>Company Deck</div>
                  <div className={styles.mbPdf}>3 MB, PDF</div>
                </div>
              </div>
            </div>
            <div className={styles.copyrightArea}>
              <div className={styles.copyrightNotice}>
                <span>{`© 2026 `}</span>
                <span className={styles.shebaTechnologiesLimited}>
                  Sheba Technologies Limited
                </span>
                <span>. All copyrights are reserved ™</span>
              </div>
            </div>
            <div className={styles.partnersInfo}>
              <div className={styles.brandingAndCMMI}>
                <img
                  className={styles.whitespaceDelimiterIcon}
                  alt=""
                  src="/Whitespace-Delimiter1@2x.png"
                />
                <div className={styles.cMMILogoContainer}>
                  <img
                    className={styles.cmmi2Icon}
                    loading="lazy"
                    alt=""
                    src="/cmmi-2@2x.png"
                  />
                </div>
                <img
                  className={styles.whitespaceDelimiterIcon}
                  alt=""
                  src="/Whitespace-Delimiter@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
