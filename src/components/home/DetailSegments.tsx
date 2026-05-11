import { FunctionComponent } from "react";
import styles from "./DetailSegments.module.css";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import "./DetailSegments.css";

export type DetailSegmentsType = {
  className?: string;
};

const DetailSegments: FunctionComponent<DetailSegmentsType> = ({
  className = "",
}) => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items: CollapseProps["items"] = [
    // {
    //   key: "1",
    //   label: <h2 className={styles.header}>Our Products</h2>,
    //   children: (
    //     <img
    //       className="w-full mb-16"
    //       loading="lazy"
    //       alt=""
    //       src="/OURproducts1.png"
    //     />
    //   ),
    // },
    {
      key: "1",
      label: <h2 className={styles.header}>Custom Software Development</h2>,
      children: (
        <img className="w-full mb-16" loading="lazy" alt="" src="/taskm.jpg" />
      ),
    },
    {
      key: "2",
      label: <h2 className={styles.header}>Business Process Outsourcing</h2>,
      children: (
        <img
          className="w-full mb-16"
          loading="lazy"
          alt=""
          src="/Frame4190.jpg"
        />
      ),
    },
    {
      key: "3",
      label: <h2 className={styles.header}>Resource Augmentation</h2>,
      children: (
        <img
          className="w-full mb-16"
          loading="lazy"
          alt=""
          src="/Frame4191.jpg"
        />
      ),
    },
  ];

  return (
    <section className={[styles.detailSegments, className].join(" ")}>
      <div className={styles.container}>
        <Collapse
          accordion
          items={items}
          bordered={false}
          expandIconPlacement="end"
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <div
              style={{
                width: "100px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              //  className="flex justify-center items-center h-full"
            >
              {isActive ? (
                <img
                  className="w-16 relative top-6 left-4"
                  loading="lazy"
                  alt=""
                  src="/arrow-small-up-1-1@2x.png"
                />
              ) : (
                <img
                  className="w-16 relative top-6 left-4"
                  loading="lazy"
                  alt=""
                  src="/arrow-square-3@2x.png"
                />
              )}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default DetailSegments;
