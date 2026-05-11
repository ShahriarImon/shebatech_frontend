import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerBackgroundWrapper, className].join(" ")}>
      <div className={styles.footerBackground}>
        <div className={styles.logoImage} />
        <div className={styles.footerContent}>
          <div className={styles.footerContentChild} />
          <div className={styles.nounSkyscraper31054541} />
          <section className={styles.companyName}>
            <div className={styles.siteDetails}>
              <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
              <div className={styles.footerLinks}>
                <h3 className={styles.ourServices}>Our Services</h3>
                <h3 className={styles.ourServices}>Career</h3>
                <h3 className={styles.ourServices}>Contact</h3>
                <h3 className={styles.ourServices}>Blog</h3>
              </div>
            </div>
          </section>
          <div className={styles.contactDetails}>
            <div className={styles.addressInfo}>
              <div className={styles.locationDetails}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/Group.svg"
                />
              </div>
              <div className={styles.dhakaAddress}>
                <h3 className={styles.ourServices}>Dhaka</h3>
              </div>
              <div
                className={styles.khawajaTower95}
              >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
            </div>
          </div>
          <div className={styles.footerDivider}>
            <div className={styles.footerDividerChild} />
            <div className={styles.frameParent}>
              <div className={styles.documentDownloadParent}>
                <div className={styles.documentDownload}>
                  <div className={styles.fileIcon} />
                  <img
                    className={styles.download1Icon}
                    loading="lazy"
                    alt=""
                    src="/download-1.svg"
                  />
                </div>
                <div className={styles.documentInfo}>
                  <div className={styles.downloadLink}>
                    <div className={styles.companyDeck}>Company Deck</div>
                    <div className={styles.mbPdf}>3 MB, PDF</div>
                  </div>
                </div>
              </div>
              <div className={styles.copyrightNotice}>
                <div className={styles.copyrightNotice2}>
                  <span>{`© 2026 `}</span>
                  <span className={styles.shebaTechnologiesLimited}>
                    Sheba Technologies Limited
                  </span>
                  <span>. All copyrights are reserved ™</span>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.socialLinksParent}>
                  <img
                    className={styles.socialLinksIcon}
                    loading="lazy"
                    alt=""
                    src="/Social-Links@2x.png"
                  />
                  <div className={styles.cmmi2Wrapper}>
                    <img
                      className={styles.cmmi2Icon}
                      loading="lazy"
                      alt=""
                      src="/cmmi-2@2x.png"
                    />
                  </div>
                  <img
                    className={styles.socialLinksIcon}
                    loading="lazy"
                    alt=""
                    src="/Social-Links1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
