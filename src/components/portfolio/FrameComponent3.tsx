import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.ellipseParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.nounSkyscraper31054541} />
        <section className={styles.frameWrapper}>
          <div className={styles.shebaTechnologiesParent}>
            <h1 className={styles.shebaTechnologies}>SHEBA TECHNOLOGIES</h1>
            <div className={styles.serviceDetails}>
              <h3 className={styles.ourServices}>Our Services</h3>
              <h3 className={styles.ourServices}>Career</h3>
              <h3 className={styles.ourServices}>Contact</h3>
              <h3 className={styles.ourServices}>Blog</h3>
            </div>
          </div>
        </section>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon} alt="" src="/Group.svg" />
            </div>
            <div className={styles.dhakaWrapper}>
              <h3 className={styles.ourServices}>Dhaka</h3>
            </div>
            <div
              className={styles.khawajaTower95}
            >{`Khawaja Tower, 95 Bir Uttam AK Khandakar Rd, Mohakhali C/A, Dhaka 1212 `}</div>
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.dividerChild} />
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <button className={styles.downloadIconParent}>
                <button className={styles.downloadIcon} />
                <img
                  className={styles.download1Icon}
                  loading="lazy"
                  alt=""
                  src="/download-1.svg"
                />
              </button>
              <div className={styles.documentDetailsWrapper}>
                <div className={styles.documentDetails}>
                  <div className={styles.companyDeck}>Company Deck</div>
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
            <div className={styles.frameWrapper2}>
              <div className={styles.whitespaceParent}>
                <img
                  className={styles.whitespaceIcon}
                  alt=""
                  src="/Whitespace1@2x.png"
                />
                <div className={styles.certification}>
                  <img
                    className={styles.cmmi2Icon}
                    loading="lazy"
                    alt=""
                    src="/cmmi-2@2x.png"
                  />
                </div>
                <img
                  className={styles.whitespaceIcon}
                  alt=""
                  src="/Whitespace@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
