import { FunctionComponent, useState } from "react";
import Hover from "./Hover";
import styles from "./FrameComponent4.module.css";
import FeedbackCarousel from "../common/FeedbackCarousel";
import { useNavigate } from "react-router-dom";

export type FrameComponent4Type = {
  className?: string;
};
const feedbacks = [
  {
    title:
      "We are the best custom software development company for custom software development outsourcing. We are the best custom software development company.",
    feedback1:
      "Our experience working with STL has been highly satisfactory. Their team demonstrated strong professionalism, technical expertise, and a clear understanding of project requirements from the outset. Throughout the engagement, they maintained excellent coordination, ensured timely delivery, and adapted efficiently to evolving needs.",

    feedback2:
      "The quality of their work, particularly in system design and operational execution, has contributed significantly to the success of our initiatives. STL’s commitment to innovation and reliability makes them a dependable technology partner for large-scale and mission-critical projects.",
    author: "Md. Rajib Chowdhury",
    authorImage: "/reviewer1.png",
    authorDesignation1: "Consultant – Project Management & Operation",
    authorDesignation2: "OCV-SDI Project",
    authorDesignation3: "Election Commission Secretariat",
    authorDesignation4: "Bangladesh Election Commission",
  },
  {
    title:
      "We are the best custom software development company for custom software development outsourcing. We are the best custom software development company.",
    feedback1:
      "Our experience working with STL has been highly satisfactory. Their team demonstrated strong professionalism, technical expertise, and a clear understanding of project requirements from the outset. Throughout the engagement, they maintained excellent coordination, ensured timely delivery, and adapted efficiently to evolving needs.",

    feedback2:
      "The quality of their work, particularly in system design and operational execution, has contributed significantly to the success of our initiatives. STL’s commitment to innovation and reliability makes them a dependable technology partner for large-scale and mission-critical projects.",
    author: "Md. Rajib Chowdhury",
    authorImage: "/reviewer1.png",
    authorDesignation1: "Consultant – Project Management & Operation",
    authorDesignation2: "OCV-SDI Project",
    authorDesignation3: "Election Commission Secretariat",
    authorDesignation4: "Bangladesh Election Commission",
  },
];

const imageGroup: Record<
  number,
  { image: string; title: string; subtitle: string; to: string }[]
> = {
  0: [
    {
      image: "/bepPort1.jpg",
      title: "BEP",
      subtitle: "Web",
      to: "/portfolio/bep",
    },
    {
      image: "/robiBiometric.jpg",
      title: "Robi Biometric",
      subtitle: "Web & Mobile",
      to: "/portfolio/robi",
    },
    {
      image: "/eazyPickup.jpg",
      title: "Eazy Return",
      subtitle: "Web, Android & iOS",
      to: "/portfolio/eazyReturn",
    },

    {
      image: "/hsbc.jpg",
      title: "HSBC Calender",
      subtitle: "Android & iOS",
      to: "",
    },
    {
      image: "/postalVote.jpg",
      title: "Postal Vote BD",
      subtitle: "Android & iOS",
      to: "/portfolio/postalVote",
    },
  ],
  1: [
    {
      image: "/ekyc.jpg",
      title: "E-KYC",
      subtitle: "Web & Mobile",
      to: "/products/ekyc",
    },
    { image: "/lms.jpg", title: "LMS", subtitle: "Web", to: "/products/lms" },
    { image: "/dms.jpg", title: "DMS", subtitle: "Web", to: "/products/dms" },
    {
      image: "/Rectangle188.png",
      title: "TMS",
      subtitle: "Web & Mobile",
      to: "/products/tms",
    },
    {
      image: "/hrms2.jpg",
      title: "HRMS",
      subtitle: "Web & Mobile",
      to: "/products/hrms",
    },
    {
      image: "/videoAnalytics.jpg",
      title: "Video Analytics",
      subtitle: "Web & Mobile",
      to: "/products/videoAnalytics",
    },
  ],
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <section className={styles.frameContainer}>
            <div className={styles.portfolioParent}>
              <h2 className={styles.portfolio}>Portfolio</h2>
              <div className={styles.headerWrapper}>
                <div className={styles.header}>
                  Explore our portfolio showcasing successful projects with
                  leading clients, where innovative solutions meet measurable
                  results, proven expertise, and lasting impact across
                  industries.
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent2}>
                    <div
                      className={
                        selected === 0
                          ? styles.headerGroup
                          : styles.headerParent
                      }
                      onClick={() => setSelected(0)}
                    >
                      <div className={styles.header2}>Projects</div>
                      <div className={styles.frameChild} />
                    </div>
                    <div
                      className={
                        selected === 1
                          ? styles.headerGroup
                          : styles.headerParent
                      }
                      onClick={() => setSelected(1)}
                    >
                      <div className={styles.header2}>Products</div>
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className={`grid grid-cols-3 gap-8 w-full ${styles.rectangleParent}`}
          >
            {imageGroup[selected]?.map((ele, index) => (
              <div
                key={index}
                className={`${styles.imageCard} ${index === 1 && styles.roundedCorners}`}
              >
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src={ele?.image}
                />
                <div className={styles.overlay} />
                <div className={styles.textContainer}>
                  <div className={styles.text1}>{ele?.subtitle}</div>
                  <p className={styles.text2}>{ele?.title}</p>
                </div>
                <div
                  className={styles.circleBtn}
                  onClick={() => ele?.to && navigate(ele?.to)}
                >
                  <img
                    className={styles.cardBtnIcon}
                    loading="lazy"
                    alt=""
                    src="/cardBtnArrow.svg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div style={{ margin: "0px 77px" }}> */}
        <div className={styles.conParent}>
          <div className={`${styles.clientWordsSection} ${styles.container}`}>
            <div className={styles.quotationCon}>
              <img
                src="/quotation.png"
                alt=""
                className={styles.quotationImg}
              />
            </div>
            <div className={styles.clientWordsTitleCol}>
              <h2 className={styles.clientWords}>Client Words</h2>
            </div>
            <div className={`${styles.feedbackCol} feedback`}>
              <FeedbackCarousel>
                {feedbacks?.map((items) => (
                  <div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.clientWordsParent}>
                        <div className={styles.headerFrame}>
                          <div className={styles.header5}>{items?.title}</div>
                        </div>
                      </div>
                      <section className={styles.frameSection}>
                        <div className={styles.headerWrapper2}>
                          <h2
                            className={styles.header6}
                          >{`“${items?.feedback1}`}</h2>
                          <h2
                            className={styles.header6}
                          >{`${items?.feedback2}”`}</h2>
                        </div>
                        <div className={styles.frameParent3}>
                          <div className={styles.ellipseParent}>
                            <img
                              className={styles.ellipseIcon}
                              alt=""
                              src={items?.authorImage}
                            />
                            <div className={styles.frameWrapper2}>
                              <div className={styles.headerParent2}>
                                <h3 className={styles.header7}>
                                  {items?.author}
                                </h3>
                                <div className={styles.header8}>
                                  {items?.authorDesignation1}
                                </div>
                                <div className={styles.header8}>
                                  {items?.authorDesignation2}
                                </div>
                                <div className={styles.header8}>
                                  {items?.authorDesignation3}
                                </div>
                                <div className={styles.header8}>
                                  {items?.authorDesignation4}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                ))}
              </FeedbackCarousel>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default FrameComponent4;
