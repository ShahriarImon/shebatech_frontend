import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.logoBackgroundParent}>
        <div className={styles.logoBackground} />
        <div className={styles.footerContainer}>
          <div className={styles.footerContainerChild} />
          <div className={styles.nounSkyscraper31054541} />
          <section className={styles.brandInfoWrapper}>
            <div className={styles.brandInfo}>
              <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
              <div className={styles.companyLinks}>
                <h3 className={styles.ourServices}>Our Services</h3>
                <h3 className={styles.ourServices}>Career</h3>
                <h3 className={styles.ourServices}>Contact</h3>
                <h3 className={styles.ourServices}>Blog</h3>
              </div>
            </div>
          </section>
          <div className={styles.contactInfo}>
            <div className={styles.locationContainer}>
              <div className={styles.mapPin}>
                <img className={styles.groupIcon} alt="" src="/Group.svg" />
              </div>
              <div className={styles.addressDetails}>
                <h3 className={styles.ourServices}>Dhaka</h3>
              </div>
              <div
                className={styles.khawajaTower95}
              >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
            </div>
          </div>
          <div className={styles.footerSeparator}>
            <div className={styles.footerSeparatorChild} />
            <div className={styles.resourceArea}>
              <div className={styles.documentArea}>
                <div className={styles.fileDetails}>
                  <div className={styles.deckIcon} />
                  <img
                    className={styles.download1Icon}
                    loading="lazy"
                    alt=""
                    src="/download-1.svg"
                  />
                </div>
                <div className={styles.fileDescription}>
                  <div className={styles.fileName}>
                    <div className={styles.companyDeck}>Company Deck</div>
                    <div className={styles.mbPdf}>3 MB, PDF</div>
                  </div>
                </div>
              </div>
              <div className={styles.legalNotice}>
                <div className={styles.copyrightNotice}>
                  <span>{`© 2026 `}</span>
                  <span className={styles.shebaTechnologiesLimited}>
                    Sheba Technologies Limited
                  </span>
                  <span>. All copyrights are reserved ™</span>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <div className={styles.iconContainer}>
                  <img
                    className={styles.separatorItemIcon}
                    alt=""
                    src="/Separator-Item1@2x.png"
                  />
                  <div className={styles.certificationMark}>
                    <img
                      className={styles.cmmi2Icon}
                      loading="lazy"
                      alt=""
                      src="/cmmi-2@2x.png"
                    />
                  </div>
                  <img
                    className={styles.separatorItemIcon}
                    alt=""
                    src="/Separator-Item@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
