import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";
import { useRef } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const sliderRef = useRef<HTMLElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
    scrollLeft.current = sliderRef.current?.scrollLeft ?? 0;
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5; // scroll speed multiplier
    if (sliderRef.current)
      sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <header className={styles.frameWrapper}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>Why Work With Us?</h2>
          <div
            className={styles.header2}
          >{`We are the best custom software development company for custom software development outsourcing. `}</div>
        </div>
      </header>
      <section
        className={styles.frameGroup}
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.innovation1Wrapper}>
            <img
              className={styles.innovation1Icon}
              loading="lazy"
              alt=""
              src="/innovation-1.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.innovativeCultureWrapper}>
              <h2 className={styles.innovativeCulture}>Innovative Culture</h2>
            </div>
            <div
              className={styles.weCelebrateFresh}
            >{`We celebrate fresh ideas and innovation here. Your creativity and passion for technology will thrive. `}</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.innovation1Wrapper}>
            <img
              className={styles.innovation1Icon}
              loading="lazy"
              alt=""
              src="/innovation-12.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.growthOpportunitiesWrapper}>
              <h2 className={styles.innovativeCulture}>Growth Opportunities</h2>
            </div>
            <div
              className={styles.weCelebrateFresh}
            >{`We celebrate fresh ideas and innovation here. Your creativity and passion for technology will thrive. `}</div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.innovation1Wrapper}>
            <img
              className={styles.innovation1Icon}
              loading="lazy"
              alt=""
              src="/innovation-11.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.innovativeCultureWrapper}>
              <h2 className={styles.innovativeCulture}>Work-Life Balance</h2>
            </div>
            <div
              className={styles.weCelebrateFresh}
            >{`We celebrate fresh ideas and innovation here. Your creativity and passion for technology will thrive. `}</div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.innovation1Wrapper}>
            <img
              className={styles.innovation1Icon}
              loading="lazy"
              alt=""
              src="/innovation-1.svg"
            />
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.growthOpportunitiesContainer}>
              <h2 className={styles.growthOpportunities2}>
                Growth Opportunities
              </h2>
            </div>
            <div
              className={styles.weCelebrateFresh4}
            >{`We celebrate fresh ideas and innovation here. Your creativity and passion for technology will thrive. `}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FrameComponent3;
