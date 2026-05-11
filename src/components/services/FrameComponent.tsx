import { FunctionComponent } from "react";
import ButtonGlass from "./ButtonGlass";
import styles from "./FrameComponent.module.css";
import Carousel from "../common/Slider";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <div className="hero service" style={{ zIndex: 8 }}>
      <Carousel>
        <div>
          <div className={[styles.navigation, className].join(" ")}>
            <div className={styles.frameParent}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/serviceBinary.jpg"
                />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>

              <section className={styles.headerParent}>
                <h1 className={styles.header}>One Partner, Six Ways to Ship</h1>
                <div className={styles.header2}>
                  From greenfield products to augmenting your existing
                  engineering team we meet you where you are
                </div>
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
              </section>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default FrameComponent;
