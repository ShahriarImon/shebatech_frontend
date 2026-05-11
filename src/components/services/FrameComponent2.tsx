import { FunctionComponent, useEffect, useState } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const products = [
  {
    id: 1,
    div1count1: 45,
    div1title1: "Banks & MFIs using our solution",
    div1count2: 350,
    div1title2: "Branches Using eKYC Nationwide",
    div2count: 2.1,
    div1title: "Seconds Average Scan Time",
    caption: "Leading eKYC Solution Provider in Bangladesh",
    image: "/ekycFiveFinger.jpg",
  },
  {
    id: 2,
    div1count1: 45,
    div1title1: "Banks & MFIs using our solution",
    div1count2: 350,
    div1title2: "Branches Using eKYC Nationwide",
    div2count: 2.1,
    div1title: "Seconds Average Scan Time",
    // caption: "Leading eKYC Solution Provider in Bangladesh",
    image: "/taskManagementSystem.jpg",
  },
  {
    id: 3,
    div1count1: 45,
    div1title1: "Banks & MFIs using our solution",
    div1count2: 350,
    div1title2: "Branches Using eKYC Nationwide",
    div2count: 2.1,
    div1title: "Seconds Average Scan Time",
    // caption: "Leading eKYC Solution Provider in Bangladesh",
    image: "/hrmsDashboard.png",
  },
  {
    id: 4,
    div1count1: 45,
    div1title1: "Banks & MFIs using our solution",
    div1count2: 350,
    div1title2: "Branches Using eKYC Nationwide",
    div2count: 2.1,
    div1title: "Seconds Average Scan Time",
    // caption: "Leading eKYC Solution Provider in Bangladesh",
    image: "/documentManagementSystem.png",
  },
  {
    id: 5,
    div1count1: 45,
    div1title1: "Banks & MFIs using our solution",
    div1count2: 350,
    div1title2: "Branches Using eKYC Nationwide",
    div2count: 2.1,
    div1title: "Seconds Average Scan Time",
    // caption: "Leading eKYC Solution Provider in Bangladesh",
    image: "/ocr.png",
  },
];

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [selected, setSelected] = useState<number>(1);
  const [selectedProd, setSelectedProd] = useState<any>({});
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number; buttonId: string }[]
  >([]);

  useEffect(() => {
    const found = products?.find((ele) => ele?.id === selected);
    setSelectedProd({ ...found });
  }, [selected]);

  const createRipple = (
    event: React.MouseEvent<HTMLButtonElement>,
    buttonId: string,
  ) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple = { x, y, id: Date.now(), buttonId };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <header className={styles.headerParent}>
        <h2 className={styles.header}>Our Products</h2>
        <div className={styles.headerWrapper}>
          <div className={styles.header2}>
            Innovative software solutions built for modern businesses, crafted
            to simplify operations, boost efficiency, and accelerate growth.
          </div>
        </div>
      </header>
      <div className={styles.frameGroup}>
        <button
          className={styles.navButton}
          onClick={(e) => {
            createRipple(e, "prev");
            if (selected > 1) {
              setSelected((prev) => prev - 1);
            }
          }}
          aria-label="Previous"
        >
          {ripples
            .filter((r) => r.buttonId === "prev")
            .map((ripple) => (
              <span
                key={ripple.id}
                className={styles.ripple}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            ))}
          <div className={styles.iconContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4 9.88006L10.81 5.29006C10.6226 5.10381 10.3692 4.99927 10.105 4.99927C9.8408 4.99927 9.58735 5.10381 9.39999 5.29006C9.30626 5.38302 9.23186 5.49362 9.18109 5.61548C9.13033 5.73734 9.10419 5.86805 9.10419 6.00006C9.10419 6.13207 9.13033 6.26278 9.18109 6.38464C9.23186 6.5065 9.30626 6.6171 9.39999 6.71006L14 11.2901C14.0937 11.383 14.1681 11.4936 14.2189 11.6155C14.2696 11.7373 14.2958 11.868 14.2958 12.0001C14.2958 12.1321 14.2696 12.2628 14.2189 12.3846C14.1681 12.5065 14.0937 12.6171 14 12.7101L9.39999 17.2901C9.21168 17.477 9.10537 17.7312 9.10443 17.9965C9.10349 18.2619 9.20801 18.5168 9.39499 18.7051C9.58196 18.8934 9.83609 18.9997 10.1014 19.0006C10.3668 19.0016 10.6217 18.897 10.81 18.7101L15.4 14.1201C15.9618 13.5576 16.2773 12.7951 16.2773 12.0001C16.2773 11.2051 15.9618 10.4426 15.4 9.88006Z"
                fill="white"
                transform="rotate(180 12 12)"
              />
            </svg>
          </div>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.ekycParent}>
              <div
                className={`${styles.tms} ${selected === 1 ? styles.isActive : ""}`}
                onClick={() => setSelected(1)}
              >
                <h3>eKYC</h3>
              </div>
              <div
                className={`${styles.tms} ${selected === 2 ? styles.isActive : ""}`}
                onClick={() => setSelected(2)}
              >
                <h3>TMS</h3>
              </div>
              <div
                className={`${styles.tms} ${selected === 3 ? styles.isActive : ""}`}
                onClick={() => setSelected(3)}
              >
                <h3>HRMS</h3>
              </div>
              <div
                className={`${styles.tms} ${selected === 4 ? styles.isActive : ""}`}
                onClick={() => setSelected(4)}
              >
                <h3>DMS</h3>
              </div>
              <div
                className={`${styles.tms} ${selected === 5 ? styles.isActive : ""}`}
                onClick={() => setSelected(5)}
              >
                <h3>OCR</h3>
              </div>
            </div>

            <div className={styles.lineParent}>
              {/* <div className={styles.frameItem} /> */}
              {/* <div className={styles.frameInner} /> */}
            </div>
          </div>
        </div>
        <button
          className={styles.navButton}
          onClick={(e) => {
            createRipple(e, "next");
            if (selected < 5) {
              setSelected((prev) => prev + 1);
            }
          }}
          aria-label="Next"
        >
          {ripples
            .filter((r) => r.buttonId === "next")
            .map((ripple) => (
              <span
                key={ripple.id}
                className={styles.ripple}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            ))}
          <div className={styles.iconContainer}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4 9.88006L10.81 5.29006C10.6226 5.10381 10.3692 4.99927 10.105 4.99927C9.8408 4.99927 9.58735 5.10381 9.39999 5.29006C9.30626 5.38302 9.23186 5.49362 9.18109 5.61548C9.13033 5.73734 9.10419 5.86805 9.10419 6.00006C9.10419 6.13207 9.13033 6.26278 9.18109 6.38464C9.23186 6.5065 9.30626 6.6171 9.39999 6.71006L14 11.2901C14.0937 11.383 14.1681 11.4936 14.2189 11.6155C14.2696 11.7373 14.2958 11.868 14.2958 12.0001C14.2958 12.1321 14.2696 12.2628 14.2189 12.3846C14.1681 12.5065 14.0937 12.6171 14 12.7101L9.39999 17.2901C9.21168 17.477 9.10537 17.7312 9.10443 17.9965C9.10349 18.2619 9.20801 18.5168 9.39499 18.7051C9.58196 18.8934 9.83609 18.9997 10.1014 19.0006C10.3668 19.0016 10.6217 18.897 10.81 18.7101L15.4 14.1201C15.9618 13.5576 16.2773 12.7951 16.2773 12.0001C16.2773 11.2051 15.9618 10.4426 15.4 9.88006Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameParent2}>
          <div className={styles.rectangleGroup}>
            {/* <img
              className={styles.rectangleIcon}
              alt=""
              src="/Rectangle-207@2x.png"
            /> */}
            <div className={styles.frameChild2} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <section className={styles.frameSection}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild3} />
                <div className={styles.frameChild4} />
                <div className={styles.delimiterParent}>
                  <h2 className={styles.delimiter}>
                    {selectedProd?.div1count1}
                  </h2>
                  <div className={styles.banksMfis}>
                    {selectedProd?.div1title1}
                  </div>
                </div>
                <div className={styles.delimiterParent}>
                  <h2
                    className={styles.delimiter}
                  >{`${selectedProd?.div1count2}+`}</h2>
                  <div className={styles.banksMfis}>
                    {selectedProd?.div1title2}
                  </div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild5} />
                <div className={styles.frameChild4} />
                <div className={styles.valueScanWrapper}>
                  <h2 className={styles.valueScan}>
                    {selectedProd?.div2count}
                  </h2>
                </div>
                <div className={styles.secondsAverageScan}>
                  {selectedProd?.div1title}
                  {/* Seconds Average Scan Time */}
                </div>
              </div>
            </section>
            <div className={styles.frameWrapper2}>
              <div className={styles.step02BioMetric1Parent}>
                <img
                  className={styles.step02BioMetric1}
                  loading="lazy"
                  alt=""
                  src={selectedProd?.image}
                />
                <b className={styles.leadingEkycSolution}>
                  {selectedProd?.caption}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
