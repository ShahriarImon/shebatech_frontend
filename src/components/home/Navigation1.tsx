import { FunctionComponent } from "react";
import ButtonGlass from "./ButtonGlass";
import styles from "./Navigation1.module.css";
import Carousel from "../common/Slider";
import "./navigation.css";
import { useNavigate } from "react-router-dom";

export type NavigationType = {
  className?: string;
};

const slides = [
  {
    image: "/ekycFingerPrint.jpg",
    title: "CODE The Change, Shape The Future",
    subtitle:
      "Empower your business with next-gen digital solutions built for growth.",
  },
  {
    image: "/customSoftwareDevelopment.jpg",
    title: "CODE The Change, Shape The Future",
    subtitle:
      "Empower your business with next-gen digital solutions built for growth.",
  },
];

const Navigation: FunctionComponent<NavigationType> = ({ className = "" }) => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className={[styles.navigation, className].join(" ")}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleParent}>
                  <img className={styles.frameChild} alt="" src={slide.image} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <section className={styles.headerParent}>
                  <h1 className={styles.header}>{slide.title}</h1>
                  <h1 className={styles.header2}>{slide.subtitle}</h1>
                  {/* <ButtonGlass property1="Default" /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <button
                      className={`${styles.btn1st}`}
                      onClick={() => navigate("/contactUs")}
                    >
                      <div className={`${styles.para}`}>Get In Touch</div>
                      <img
                        src="/upArrow.svg"
                        alt="arrow"
                        className={`${styles.arrowIcon}`}
                      />
                    </button>
                    <button
                      className={`${styles.btn2nd}`}
                      onClick={() => navigate("/portfolio")}
                    >
                      <div className={`${styles.para2}`}>Browse Our Works</div>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Navigation;
