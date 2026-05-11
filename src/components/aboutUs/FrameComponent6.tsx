import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.ellipseParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.footerDetails}>
        <div className={styles.footerDetailsChild} />
        <div className={styles.nounSkyscraper31054541} />
        <section className={styles.contentArea}>
          <div className={styles.linksList}>
            <h3 className={styles.ourServices}>Our Services</h3>
            <h3 className={styles.ourServices}>Career</h3>
            <h3 className={styles.ourServices}>Contact</h3>
            <h3 className={styles.ourServices}>Blog</h3>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.khawajaTower95BirUttamAkParent}>
              <div
                className={styles.khawajaTower95}
              >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
              <img className={styles.groupIcon} alt="" src="/Group.svg" />
              <h3 className={styles.dhaka}>Dhaka</h3>
            </div>
          </div>
        </section>
        <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameInner} />
                <img
                  className={styles.download1Icon}
                  loading="lazy"
                  alt=""
                  src="/download-1.svg"
                />
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.companyDeckParent}>
                  <div className={styles.companyDeck}>Company Deck</div>
                  <div className={styles.mbPdf}>3 MB, PDF</div>
                </div>
              </div>
            </div>
            <div className={styles.copyrightNoticeWrapper}>
              <div className={styles.copyrightNotice}>
                <span>{`© 2026 `}</span>
                <span className={styles.shebaTechnologiesLimited}>
                  Sheba Technologies Limited
                </span>
                <span>. All copyrights are reserved ™</span>
              </div>
            </div>
            <div className={styles.legalNotice}>
              <div className={styles.spaceDelimiterParent}>
                <img
                  className={styles.spaceDelimiterIcon}
                  alt=""
                  src="/Space-Delimiter@2x.png"
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
                  className={styles.spaceDelimiterIcon}
                  alt=""
                  src="/Space-Delimiter1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
