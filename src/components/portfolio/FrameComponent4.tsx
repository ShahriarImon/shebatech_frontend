import { FunctionComponent, useCallback } from "react";
import CardEd from "./CardEd";
import styles from "./FrameComponent4.module.css";
import SliderCaseStudy from "../common/SliderCaseStudy";

export type FrameComponent4Type = {
  className?: string;
};

const caseStudies = [
  {
    buttonTitle: "Travel App",
    title: "Human Resource Management System (HRMS)",
    subTitle:
      "We are the best custom software development company for custom software development outsourcing.",
    hoverTitle: "HRMS Dashboard",
    imagePath: "/Rectangle251.png",
  },
  {
    buttonTitle: "Travel App",
    title: "Human Resource Management System (HRMS)",
    subTitle:
      "We are the best custom software development company for custom software development outsourcing.",
    hoverTitle: "HRMS Dashboard",
    imagePath: "/Rectangle251.png",
  },
];

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  const onFoodDeliveryServiceClick = useCallback(() => {
    // Please sync "single case study" to the project
  }, []);

  return (
    <section className={[styles.portfolioInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <header className={styles.headerParent}>
          <h2 className={styles.header}>Case Studies</h2>
          <div
            className={styles.header2}
          >{`We are the best custom software development company for custom software development outsourcing. `}</div>
        </header>
        <div className={`${styles.frameGroup} sliderCase`}>
          <SliderCaseStudy>
            {caseStudies?.map((item) => (
              <div>
                <div className={styles.cardEdParent}>
                  <div className={`${styles.sliderCaseStudy} `}>
                    <CardEd
                      property1="Default"
                      hoverTitle={item?.hoverTitle}
                      imagePath={item?.imagePath}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.travelAppWrapper}>
                      <div className={styles.travelApp}>
                        {item?.buttonTitle}
                      </div>
                    </div>

                    <h2
                      className={styles.foodDeliveryService}
                      onClick={onFoodDeliveryServiceClick}
                    >
                      {item?.title}
                    </h2>
                    <div className={styles.travelApp}>{item?.subTitle}</div>
                  </div>{" "}
                </div>{" "}
              </div>
            ))}
          </SliderCaseStudy>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
