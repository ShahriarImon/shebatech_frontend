import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const Footer: FunctionComponent<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.nounSkyscraper31054541} />
      <section className={styles.frameWrapper}>
        <div className={styles.shebaTechnologiesParent}>
          <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
          <div className={styles.footerLinks}>
            <h3 className={styles.ourServices}>Our Services</h3>
            <h3 className={styles.ourServices}>Career</h3>
            <h3 className={styles.ourServices}>Contact</h3>
            <h3 className={styles.ourServices}>Blog</h3>
          </div>
        </div>
      </section>
      <div className={styles.contactLocation}>
        <div className={styles.mapContainerParent}>
          <div className={styles.mapContainer}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/Group.svg"
            />
          </div>
          <div className={styles.addressDetails}>
            <div className={styles.cityContainer}>
              <h3 className={styles.ourServices}>Dhaka</h3>
            </div>
            <div
              className={styles.khawajaTower95}
            >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
          </div>
        </div>
      </div>
      <div className={styles.footerDivider}>
        <div className={styles.footerDividerChild} />
        <div className={styles.footerActions}>
          <div className={styles.downloadButton}>
            <div className={styles.socialIcons}>
              <div className={styles.socialIconsChild} />
              <img
                className={styles.download1Icon}
                loading="lazy"
                alt=""
                src="/download-1.svg"
              />
            </div>
            <div className={styles.downloadFile}>
              <div className={styles.fileDetails}>
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
          <div className={styles.footerTerms}>
            <div className={styles.legalDisclaimerParent}>
              <img
                className={styles.legalDisclaimerIcon}
                loading="lazy"
                alt=""
                src="/Legal-Disclaimer@2x.png"
              />
              <div className={styles.complianceLogo}>
                <img
                  className={styles.cmmi2Icon}
                  loading="lazy"
                  alt=""
                  src="/cmmi-2@2x.png"
                />
              </div>
              <img
                className={styles.legalDisclaimerIcon}
                loading="lazy"
                alt=""
                src="/Legal-Disclaimer1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
