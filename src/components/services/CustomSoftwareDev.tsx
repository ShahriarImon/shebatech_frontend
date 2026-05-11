import { FunctionComponent } from "react";
import SolutionContentContainer from "./SolutionContentContainer";
import styles from "./CustomSoftwareDev.module.css";

export type CustomSoftwareDevType = {
  className?: string;
};

const CustomSoftwareDev: FunctionComponent<CustomSoftwareDevType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.customSoftwareDev, className].join(" ")}>
      <section className={styles.solutionsOverview}>
        <h1 className={styles.header12}>Software Development</h1>
        <div className={styles.solutionSubtitle}>
          <div className={styles.header2}>
            Architecturally superior, secure, scalable enterprise systems built
            to spec.
          </div>
        </div>
      </section>
      <div className={`grid grid-cols-2 gap-8 w-full`}>
        {/* <section className={styles.developmentSolutionContainer}> */}
        <SolutionContentContainer
          softwareDevelopment1="/software-development-1.svg"
          header="Tailored to Your Business"
          header1="Software designed specifically for your processes, users, and growth goals."
        />
        <SolutionContentContainer
          softwareDevelopment1="/drafting-compass-1.svg"
          softwareDevelopment1IconHeight="3.5rem"
          softwareDevelopment1IconMaxHeight="unset"
          header="Scalable Architecture"
          headerDisplay="unset"
          header1="Future-ready systems built to evolve with your organization."
        />
        {/* </section>
        <section className={styles.developmentSolutionContainer2}> */}
        <SolutionContentContainer
          softwareDevelopment1="/shield-check-1-1.svg"
          softwareDevelopment1IconHeight="3.5rem"
          softwareDevelopment1IconMaxHeight="unset"
          header={`Secure & Reliable`}
          headerDisplay="unset"
          header1="Enterprise-grade security, performance, and compliance baked into every layer."
        />
        <SolutionContentContainer
          softwareDevelopment1="/circle-overlap-1.svg"
          softwareDevelopment1IconHeight="unset"
          softwareDevelopment1IconMaxHeight="100%"
          header="Seamless Integration"
          headerDisplay="unset"
          header1="Connect effortlessly with your existing tools, platforms, and infrastructure."
        />
        {/* </section> */}
      </div>
    </div>
  );
};

export default CustomSoftwareDev;
