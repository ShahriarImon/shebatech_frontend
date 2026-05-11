import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.footerContentWrapper, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.logoBackground} />
        <div className={styles.footerColumn}>
          <div className={styles.footerColumnChild} />
          <div className={styles.nounSkyscraper31054541} />
          <section className={styles.companyInfo}>
            <div className={styles.shebaTech}>
              <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
              <div className={styles.footerMenu}>
                <h3 className={styles.ourServices}>Our Services</h3>
                <h3 className={styles.ourServices}>Career</h3>
                <h3 className={styles.ourServices}>Contact</h3>
                <h3 className={styles.ourServices}>Blog</h3>
              </div>
            </div>
          </section>
          <div className={styles.locationDetailsWrapper}>
            <div className={styles.locationDetails}>
              <div className={styles.locationRow}>
                <img className={styles.groupIcon} alt="" src="/Group.svg" />
              </div>
              <div className={styles.cityLabel}>
                <h3 className={styles.ourServices}>Dhaka</h3>
              </div>
              <div
                className={styles.khawajaTower95}
              >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
            </div>
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.documentLinksParent}>
              <div className={styles.documentLinks}>
                <div className={styles.companyDeck}>
                  <div className={styles.deckIcon} />
                  <img
                    className={styles.download1Icon}
                    loading="lazy"
                    alt=""
                    src="/download-1.svg"
                  />
                </div>
                <div className={styles.deckLink}>
                  <div className={styles.deckLabel}>
                    <div className={styles.companyDeck2}>Company Deck</div>
                    <div className={styles.mbPdf}>3 MB, PDF</div>
                  </div>
                </div>
              </div>
              <div className={styles.copyrightNoticeWrapper}>
                <div className={styles.copyrightNotice}>
                  <span>{`© 2025 `}</span>
                  <span className={styles.shebaTechnologiesLimited}>
                    Sheba Technologies Limited
                  </span>
                  <span>. All copyrights are reserved ™</span>
                </div>
              </div>
              <div className={styles.policyLinksWrapper}>
                <div className={styles.policyLinks}>
                  <img
                    className={styles.separatorItemIcon}
                    alt=""
                    src="/Separator-Item@2x.png"
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
                    className={styles.separatorItemIcon}
                    alt=""
                    src="/Separator-Item1@2x.png"
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

export default FrameComponent7;
