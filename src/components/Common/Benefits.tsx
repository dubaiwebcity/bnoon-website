"use client";

import React, { useState, useEffect, useRef } from "react";

const Benefits = () => {
  const benefitsData = [
    {
      id: 1,
      icon: "/images/icons/benefit1.svg",
      title: "Convenient & Fast",
      description: "See a doctor within minutes—no waiting rooms.",
    },
    {
      id: 2,
      icon: "/images/icons/benefit2.svg",
      title: "Certified Doctors",
      description: "Licensed professionals in multiple specialties.",
    },
    {
      id: 3,
      icon: "/images/icons/benefit3.svg",
      title: "Private & Secure",
      description: "End-to-end encrypted, HIPAA-compliant platform.",
    },
    {
      id: 4,
      icon: "/images/icons/benefit4.svg",
      title: "Affordable Pricing",
      description: "Transparent pricing, with or without insurance.",
    },
  ];

  const images = [
    "/images/fertility-women.jpg",
    "/images/baby-health-network.jpg",
    "/images/baby-health-network-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setLeftVisible(true);
            if (entry.target === rightRef.current) setRightVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-overview-area">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div
            className={`col-xl-6 col-md-12 animate-left ${
              leftVisible ? "active" : ""
            }`}
            ref={leftRef}
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div className="service-overview-content">
              <h2>Bnoon - The Fertility &amp; Women&apos;s Health Network</h2>
              <h4>Fertility Care Made for You</h4>
              <p>
                Bnoon is part of the Saudi-Emirati Global Fertility Network
                (GFN), one of the Middle East&apos;s fastest-growing networks
                dedicated to fertility, reproductive genetics and women&apos;s
                health.
              </p>
              <p>
                At Bnoon, we&apos;re redefining how fertility care is delivered
                — making it more personal, more human, and built entirely
                around you. We know this journey can be overwhelming — and
                that&apos;s why we&apos;ve built a place where you&apos;ll feel
                supported, understood, and cared for, every step of the way.
              </p>
              <p>
                Whether you&apos;re just beginning to explore your options or
                are already on your path to parenthood, we meet you where you
                are — with world-class fertility treatments, an elite group of
                consultants you can trust, and a space that feels like home.
              </p>
            </div>
          </div>

          <div
            className={`col-xl-6 col-md-12 animate-right ${
              rightVisible ? "active" : ""
            }`}
            ref={rightRef}
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateX(0)" : "translateX(50px)",
              transition: "all 0.5s ease-out",
            }}
          >
        <div
  className="service-overview-image"
  style={{
    boxShadow: "50px 50px 0px #d7f2fb",
    overflow: "hidden",
    display: "inline-block",
  }}
>
  <img
    src={images[currentIndex]}
    alt="Service overview"
    className="responsive-image"
    width={580}
    height={450}
    style={{ transition: "opacity 0.5s ease-in-out" }}
  />

  {/* ✅ Responsive style only for mobile */}
  <style jsx>{`
    @media (max-width: 768px) {
      .service-overview-image {
        box-shadow: 20px 20px 0px #d7f2fb; /* smaller shadow for mobile */
        width: 85% !important;
      }

      .responsive-image {
        width: 100% !important;
        height: auto !important;
      }
    }
  `}</style>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
