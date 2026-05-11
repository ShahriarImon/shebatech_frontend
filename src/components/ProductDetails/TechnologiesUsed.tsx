import { FunctionComponent } from "react";
import styles from "./TechnologiesUsed.module.css";
import ProductCTA from "../products/ProductCTA";

export type TechnologiesUsedType = {
  className?: string;
  usedTechnologies?: string[];
};

const TechnologiesUsed: FunctionComponent<TechnologiesUsedType> = ({
  className = "",
  usedTechnologies = [
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "AWS",
    "Figma",
  ],
}) => {
  return (
    <div style={{ width: "100%" }}>
      <section className={[styles.technologiesUsed, className].join(" ")}>
        <div className={styles.formFieldsParent}>
          <div className={styles.formFields}>
            <h2 className={styles.header}>Technologies Used</h2>
            <div className={styles.header2}>
              Explore the advanced technologies we use to build innovative
              solutions, streamline operations, and deliver exceptional results.
            </div>
          </div>
          <div className={styles.headerWrapper}>
            <div className={styles.header3}>
              {usedTechnologies?.map((ele: any, index: number) => (
                <>
                  {" "}
                  <span className={styles.reactNative}>{`  ${ele}  `}</span>
                  <span
                    className={styles.span}
                  >{` ${index !== usedTechnologies?.length - 1 ? "•" : ""} `}</span>
                </>
              ))}
              {/* <span className={styles.reactNative}>{`React Native    `}</span>
              <span className={styles.span}>{`• `}</span>
              <span className={styles.reactNative}>{`   Node.js   `}</span>
              <span className={styles.span2}>{` • `}</span>
              <span className={styles.reactNative}>{`   Express   `}</span>
              <span className={styles.span2}> •</span>
              <span className={styles.reactNative}>{`    MongoDB    `}</span>
              <span className={styles.span2}>{`• `}</span>
              <span className={styles.reactNative}>{`   AWS    `}</span>
              <span className={styles.span2}>•</span>
              <span className={styles.reactNative}> Figma</span> */}
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          width: "100%",
          padding: "0 70px",
          marginTop: "60px",
          // marginBottom: "-5rem",
        }}
      >
        <ProductCTA />
      </div>
    </div>
  );
};

export default TechnologiesUsed;
