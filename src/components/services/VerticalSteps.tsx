import { useEffect, useRef, useState, type CSSProperties } from "react";

const steps = [
  {
    number: 1,
    title: "Understand Your Vision",
    description:
      "We are the best custom software development company for custom software development outsourcing.",
  },
  {
    number: 2,
    title: "Design the Perfect Solution",
    description:
      "Our UI/UX and engineering teams craft intuitive interfaces and a scalable architecture tailored to your operations.",
  },
  {
    number: 3,
    title: "Build With Precision",
    description:
      "Our UI/UX and engineering teams craft intuitive interfaces and a scalable architecture tailored to your operations.",
  },
  {
    number: 4,
    title: "Launch & Scale",
    description:
      "We deploy your product with CI/CD pipelines and monitor performance to ensure seamless scaling as you grow.",
  },
];

export default function VerticalSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: containerRef.current,
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        },
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* Single scrollable column: timeline + cards together */}
        <div ref={containerRef} style={styles.scrollContainer}>
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              style={styles.row}
            >
              {/* Left: dot + connecting line */}
              <div style={styles.timelineCol}>
                {/* Line above dot — hidden for first */}
                <div
                  style={{
                    ...styles.lineSegment,
                    background:
                      i === 0
                        ? "transparent"
                        : i <= activeIndex
                          ? "#7FC241"
                          : "#34373F",
                  }}
                />

                {/* Dot */}
                <div
                  style={{
                    ...styles.dot,
                    ...(i < activeIndex
                      ? styles.dotDone
                      : i === activeIndex
                        ? styles.dotActive
                        : styles.dotInactive),
                  }}
                >
                  {i <= activeIndex ? (
                    // <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    //   <path
                    //     d="M1.5 5L4 7.5L8.5 2.5"
                    //     stroke="#0d0d0d"
                    //     strokeWidth="1.8"
                    //     strokeLinecap="round"
                    //     strokeLinejoin="round"
                    //   />
                    // </svg>
                    <img loading="lazy" alt="" src="/vision.svg" />
                  ) : (
                    <div
                      style={{
                        background: i === activeIndex ? "#7FC241" : "#3a3a3a",
                      }}
                    />
                  )}
                </div>

                {/* Line below dot — hidden for last */}
                <div
                  style={{
                    ...styles.lineSegmentGrow,
                    background:
                      i === steps.length - 1
                        ? "transparent"
                        : i < activeIndex
                          ? "#7FC241"
                          : "#34373F",
                  }}
                />
              </div>

              {/* Right: card */}
              <div
                style={{
                  ...styles.card,
                  ...(i === activeIndex
                    ? styles.cardActive
                    : styles.cardInactive),
                }}
              >
                <span style={styles.stepLabel}>STEP: {step.number}</span>
                <h2
                  style={{
                    ...styles.cardTitle,
                    color: i === activeIndex ? "#ffffff" : "#555",
                  }}
                >
                  {step.title}
                </h2>
                <p
                  style={{
                    ...styles.cardDesc,
                    color: i === activeIndex ? "#FFFFFF" : "#444",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    // background: "#111",
    minHeight: "60vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "0px 2rem",
    boxSizing: "border-box",
  },
  wrapper: {
    width: "100%",
    maxWidth: "100%",
    height: "480px",
    paddingLeft: "20px",
  },
  scrollContainer: {
    height: "100%",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "calc(480px - 140px)",
  },

  // Each row = timeline col + card side by side
  row: {
    display: "flex",
    gap: "1rem",
    alignItems: "stretch",
  },

  // Timeline column
  timelineCol: {
    width: "50px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lineSegment: {
    width: "2px",
    height: "20px", // fixed top padding above dot
    flexShrink: 0,
    borderRadius: "999px",
    transition: "background 0.4s ease",
  },
  lineSegmentGrow: {
    width: "2px",
    flex: 1, // grows to fill remaining row height below dot
    minHeight: "16px",
    borderRadius: "999px",
    transition: "background 0.4s ease",
  },
  dot: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  },
  dotActive: {
    background: "#7FC241",
    borderColor: "#7FC241",
    boxShadow: "0 0 0 4px rgba(132,204,22,0.15)",
  },
  dotDone: {
    background: "#7FC241",
    borderColor: "#7FC241",
  },
  dotInactive: {
    background: "#1e1e1e",
    borderColor: "#2a2a2a",
  },
  dotInner: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    transition: "background 0.3s ease",
  },

  // Card
  card: {
    flex: 1,
    borderRadius: "12px",
    padding: "1.25rem 1.5rem",
    marginBottom: "1.25rem",
    transition: "all 0.4s ease",
    border: "1px solid #38343F",
  },
  cardActive: {
    // background: "#1c1c1c",
    // borderColor: "#2a2a2a",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
  },
  cardInactive: {
    background: "transparent",
    // borderColor: "transparent",
  },
  stepLabel: {
    fontSize: "1.1rem",
    fontWeight: 500,
    // letterSpacing: "0.12em",
    color: "#84cc16",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.5rem",
    paddingBottom: "12px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: 500,
    margin: "0 0 0 0",
    lineHeight: 1.3,
    transition: "color 0.4s ease",
  },
  cardDesc: {
    fontSize: "1rem",
    fontWeight: 200,
    lineHeight: 1.25,
    margin: 0,
    transition: "color 0.4s ease",
  },
};
