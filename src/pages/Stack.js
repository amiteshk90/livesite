import React, { useEffect, useRef, useState } from "react";
import Vertical1 from "./stackpage/card1";
import Vertical2 from "./stackpage/card2";
import Vertical3 from "./stackpage/card3";
import Sticky from "react-sticky-el";

const Stack = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for sections
  const [activeSection, setActiveSection] = useState(null); // Track which section is active

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0, // Section is considered in view when it's fully visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={sectionRefs[0]}
        className={`sticky-section ${activeSection === 0 ? "sticky" : ""}`}
      >
        <Sticky zIndex={50}>
          <Vertical2 />
        </Sticky>
      </div>
      <div
        ref={sectionRefs[1]}
        className={`sticky-section ${activeSection === 1 ? "sticky" : ""}`}
      >
        <Sticky bottomOffset={200} zIndex={50}>
          <Vertical3 />
        </Sticky>
      </div>
      {/* <div
        ref={sectionRefs[2]}
        className={`sticky-section ${activeSection === 2 ? "sticky" : ""}`}
      >
        <Sticky bottomOffset={200} zIndex={50}>
          <Vertical3 />
        </Sticky>
      </div> */}

      {/* <div style={{visibility: "none"}}
        ref={sectionRefs[3]}
        className={`sticky-section ${activeSection === 3 ? "sticky" : ""}`}
      >
        <Sticky bottomOffset={200} zIndex={50}>
          <Vertical3/>
        </Sticky>
      </div> */}
    </div>
  );
};

export default Stack;
