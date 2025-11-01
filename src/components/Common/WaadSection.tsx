"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const WaadSection = () => {
  const values = [
    "The program is for women under the age of 35 at the beginning of their first treatment cycle. ",
    "The ovarian reserve test (AMH) result must be 1 or higher. ",
    "The program requires undergoing three complete IVF cycle attempts within a 12-month period. <br> - A complete IVF treatment cycle consists of ovarian stimulation and egg retrieval followed by one or more embryo transfers, whether the transfer occurred during the treatment cycle or later as frozen embryos. <br />- A Dual IVF treatment cycle is not considered one of those attempts. ",
    "The cost of the third IVF treatment cycle will be refunded if a clinical pregnancy was not achieved in any of the three IVF attempts.<br> - A clinical pregnancy is defined as a pregnancy in which a gestational sac is visible on ultrasound, with or without a fetus or a heartbeat seen. ",
    "The refund is for the third IVF treatment cycle only, and does not include: <br>Medications <br>- Preimplantation Genetic Testing (PGT) <br> - Procedures for the husband <br>- Frozen embryo transfers <br> - Lab tests not included in the IVF cycle fees (such as infectious disease, semen analysis, etc.)<br>- Physician consultations, if any<br>- Any other charges not included in the IVF cycle fees",
    "Available exclusively with Bnoon’s physicians at Bnoon clinics across Saudi Arabia.  ",
    "The program will take effect starting September 1, 2025. Treatments received before this date will not be included under the program. ",
    "Terms and conditions apply "
  ];

  const headingRefs = useRef<HTMLHeadingElement[]>([]);
  const [visibleHeadings, setVisibleHeadings] = useState<boolean[]>([]);

  useEffect(() => {
    setVisibleHeadings(Array(values.length + 2).fill(false)); // +2 for your two h4 headings

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headingRefs.current.indexOf(entry.target as HTMLHeadingElement);
            if (index !== -1) {
              setVisibleHeadings((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    headingRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [values.length]);

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>What is WA'AD Bnoon Program? </h2>

                <h4
                  ref={(el) => {
                    headingRefs.current[1] = el!;
                  }}
                  className={`mt-3 animate-left ${visibleHeadings[1] ? "show" : ""}`}
                >
                  Get Pregnant or Your Money Back: Confidence. Clarity. Compassion.  
                </h4>

                <p>
                  WA'AD Bnoon Program is a first-of-its-kind initiative in Saudi Arabia designed
                  to support hopeful parents emotionally, medically, and financially to begin
                  their fertility journey with confidence - giving them peace of mind and a clear
                  path forward. 
                </p>

                <p>
                  We’re committed to walking with you every step of the way; and if a pregnancy
                  was not achieved after three IVF cycles within one year, we will refund the
                  cost of your third treatment cycle. That’s our promise to you.
                </p>

                <h4
                  ref={(el) => {
                    headingRefs.current[2] = el!;
                  }}
                  className={`mt-3 animate-left ${visibleHeadings[2] ? "show" : ""}`}
                >
                  Terms & Conditions:  
                </h4>

                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />
                      <span dangerouslySetInnerHTML={{ __html: value }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s ease-out;
        }
        .animate-left.show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default WaadSection;
