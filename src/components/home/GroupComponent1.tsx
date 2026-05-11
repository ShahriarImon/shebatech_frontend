import { FunctionComponent, useState, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  rectangle197?: string;

  /** Variant props */
  property1?: string;
  title?: string;
  subtitle?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  const [groupComponentItems] = useState([
    {
      title: "Language & Frameworks",
      subTitle:
        ".NET / .NET Core, Node.js, Nest.js, Python, Java, PHP, React, Next.js, Flutter, Swift, Kotlin",
      icon1: "/sIcon1.svg",
      icon2: "/sIcon1black.svg",
    },
    {
      title: "Database",
      subTitle: "Oracle, MS SQL, MySQL, PostgreSQL, MongoDB",
      icon1: "/database.svg",
      icon2: "/sIcon2black.svg",
    },
    {
      title: "AI / ML",
      subTitle: "TensorFlow, PyTorch, FastAPI, OpenCV, Pandas, NumPy",
      icon1: "/sIcon3.svg",
      icon2: "/sIcon3black.svg",
    },
    {
      title: "Design",
      subTitle: "Figma, Adobe XD, Framer, Sketch, Balsamiq",
      icon1: "/pencil.svg",
      icon2: "/sIcon4black.svg",
    },
    // {
    //   title: "Business Process Outsourcing",
    //   subTitle:
    //     "Native Android, iOS and Flutter apps that ship fast and scale.",
    //   icon1: "/sIcon5.svg",
    //   icon2: "/sIcon5black.svg",
    // },
    // {
    //   title: "Resource Augmentation",
    //   subTitle: "Computer vision, OCR and predictive models in production.",
    //   icon1: "/sIcon6.svg",
    //   icon2: "/sIcon6black.svg",
    // },
  ]);
  return (
    <section
      className={[styles.rectangleParent, className].join(" ")}
      data-property1={property1}
    >
      <div className="grid grid-cols-2 gap-4 w-full">
        {groupComponentItems?.map((item) => (
          <div className={`${styles.card} w-full rounded-[24px]`}>
            {/* <div className={`${styles.iconCon}`}> */}
            <img src={item.icon1} alt="icon" className={`${styles.icon}`} />
            {/* <img src={item.icon2} alt="icon" className={`${styles.icon2}`} />
            </div> */}
            <div className={`text-[20px] font-medium ${styles.title}`}>
              {item?.title}
            </div>
            <div className={`${styles.subTitle}`}>{item?.subTitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupComponent1;
