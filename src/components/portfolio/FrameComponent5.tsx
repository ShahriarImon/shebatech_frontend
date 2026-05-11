import { FunctionComponent, useCallback, useState } from "react";
import styles from "./FrameComponent5.module.css";
import FrameComponent from "./FrameComponent";
import Component1 from "./Component1";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const [showMore, setShowMore] = useState(false);
  const [frameComponentItems] = useState([
    {
      rectangle2855: "/postalVoteBD.jpg",
      header: "Postal Vote BD",
      header1: "",
      to: "/portfolio/postalVote",
    },
    {
      rectangle2855: "/attendenceSystem.jpg",
      header: "Attendence System",
      header1: "",
      to: "/products/hrms",
    },

    {
      rectangle2855: "/hrmsPortfolio.jpg",
      header: "HRMS",
      header1: "",
      to: "/products/hrms",
    },
    {
      rectangle2855: "/hsbcCalender.jpg",
      header: "HSBC Calender",
      header1: "",
      to: "",
    },
    {
      rectangle2855: "/bep.jpg",
      header: "Brac Education Program",
      header1: "",
      to: "/portfolio/bep",
    },
    {
      rectangle2855: "/easyReturn.jpg",
      header: "Easy Return",
      header1: "",
      to: "/portfolio/eazyReturn",
    },
    {
      rectangle2855: "/robiBiometric.jpg",
      header: "Robi Biometric Sim Verification System",
      header1: "",
      to: "/portfolio/robi",
    },
  ]);
  const onFooterListImageClick = useCallback(() => {
    // Please sync "single case study" to the project
  }, []);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      {/* <div className={styles.footerListParent}>
        <img
          className={styles.footerListIcon}
          loading="lazy"
          alt=""
          src="/Rectangle253.png"
          onClick={onFooterListImageClick}
        />
        <img
          className={styles.footerListIcon2}
          loading="lazy"
          alt=""
          src="/Rectangle254.png"
        />
        <img
          className={styles.footerListIcon2}
          loading="lazy"
          alt=""
          src="/Rectangle255.png"
        />
      </div> */}

      <div className="grid grid-cols-2 gap-14 w-full">
        {(showMore ? frameComponentItems : frameComponentItems.slice(0, 6)).map(
          (item, index) => (
            <FrameComponent
              key={index}
              rectangle2855={item.rectangle2855}
              header={item.header}
              header1={item.header1}
              to={item.to}
            />
          ),
        )}
      </div>
      <div className={styles.callToActionLink}>
        <Component1
          property1="Frame 4161"
          btnTitle={showMore ? "Less" : "More"}
          // btnIcon="/btnUpArrow.svg"
          onClick={() => {
            setShowMore((prev) => !prev);
          }}
        />
      </div>
      {/* <section className={styles.contactDetails}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>Achievements</h2>
          <div className={styles.header2}>
            Scalable, secure, and fully tailored digital solutions built around
            your business needs.
          </div>
        </div>
        <div className={styles.detailLinks}>
          <div className={styles.detailLinksInner}>
            <div className={styles.headerGroup}>
              <h2 className={styles.header3}>{`120+ `}</h2>
              <div className={styles.headerWrapper}>
                <h1 className={styles.header4}>Projects Delivered</h1>
              </div>
            </div>
          </div>
          <div className={styles.detailLinksChild}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.headerGroup}>
            <h2 className={styles.header5}>{`40+ `}</h2>
            <div className={styles.headerFrame}>
              <h1 className={styles.header6}>Global Clients</h1>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.detailLinksInner2}>
            <div className={styles.headerGroup}>
              <h2 className={styles.header7}>{`7+ `}</h2>
              <div className={styles.headerWrapper2}>
                <h1 className={styles.header8}>Years of Expertise</h1>
              </div>
            </div>
          </div>
          <div className={styles.detailLinksChild}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.headerGroup}>
            <h2 className={styles.header5}>98%</h2>
            <div className={styles.headerWrapper3}>
              <h1 className={styles.header10}>Client Satisfaction</h1>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
};

export default FrameComponent5;
