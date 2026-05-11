import { FunctionComponent, useState } from "react";
import styles from "./ServiceList.module.css";

export type ServiceListType = {
  className?: string;
};

const ServiceList: FunctionComponent<ServiceListType> = ({
  className = "",
}) => {
  const [groupComponentItems] = useState([
    {
      title: "Software Development",
      subTitle:
        "Architecturally superior, secure, scalable enterprise systems built to spec.",
      icon1: "/sIcon1.svg",
      icon2: "/sIcon1black.svg",
    },
    {
      title: "Mobile Applications",
      subTitle:
        "Native Android, iOS and Flutter apps that ship fast and scale.",
      icon1: "/sIcon2.svg",
      icon2: "/sIcon2black.svg",
    },
    {
      title: "AI & Machine Learning",
      subTitle:
        "AI-powered automation, predictive analytics, and intelligent systems that turn data into decisions.",
      icon1: "/sIcon3.svg",
      icon2: "/sIcon3black.svg",
    },
    {
      title: "Digital Identity",
      subTitle:
        "Architecturally superior, secure, scalable enterprise systems built to spec.",
      icon1: "/sIcon4.svg",
      icon2: "/sIcon4black.svg",
    },
    {
      title: "Business Process Outsourcing",
      subTitle:
        "Native Android, iOS and Flutter apps that ship fast and scale.",
      icon1: "/sIcon5.svg",
      icon2: "/sIcon5black.svg",
    },
    {
      title: "Resource Augmentation",
      subTitle: "Computer vision, OCR and predictive models in production.",
      icon1: "/sIcon6.svg",
      icon2: "/sIcon6black.svg",
    },
  ]);
  return (
    <section className={[styles.ServiceList, className].join(" ")}>
      <div className="grid grid-cols-3 gap-4">
        {groupComponentItems?.map((item) => (
          <div className={`${styles.card} w-full rounded-[24px]`}>
            <div className={`${styles.iconCon}`}>
              <img src={item.icon1} alt="icon" className={`${styles.icon}`} />
              <img src={item.icon2} alt="icon" className={`${styles.icon2}`} />
            </div>
            <div className="text-[24px] font-semibold">{item?.title}</div>
            <div className={`${styles.subTitle}`}>{item?.subTitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
