"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function HeroBanner() {
  const [bgPosition, setBgPosition] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  // ✅ Slides (video + text + buttonLink)
  const slides = [
   {
    video: "images/ar-banner/1.mp4",
    title: "في يوم الوطن،<br /> حلمكم ما هو بعيد",
    desc: "استفيدوا من العرض الخاص باليوم الوطني في بنون",
    extra: "طبق الشروط والأحكام",
    extraFontSize: "14px",
    buttonLink: "ar/national-day-offer",
    buttonText: "المزيد", // 👈 only first banner
  },
    {
      video: "images/ar-banner/2.mp4",
      title: "برنامج وعد بنون",
      desc: "الحمل أو استرداد الرسوم :<br>راحة بال. توتر أقل۔",
      titleColor: "#004E78",
      descColor: "#004E78",
      extra: "تطبق الشروط والأحكام",
      buttonLink: "ar/waad-bnoon-program", // 👈 custom link
      buttonText: "استكشفوا المزيد",
    },
    {
      video: "images/ar-banner/3.mp4",
      title: "المستقبل الواعد في <br>مجال علاجات الإخصاب",
      desc: "الآن في الرياض وجدة ",
      buttonLink: "ar/request-an-appoinment", // 👈 custom link
      buttonText: "احجز الآن",
    },
    {
      video: "images/ar-banner/4.mp4",
      title: "من الحلم إلى <br>البدايات الجديدة",
      desc: "الأمل يبدأ مع بنون",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "ar/request-an-appoinment", // 👈 custom link
      buttonText: "احجز الآن",
    },
    {
      video: "images/ar-banner/5.mp4",
     title: 'تقديم الرعاية لأكثر من <br><span class="highlight-number">5000</span> من الأزواج سنويًا',

      desc: "لتحقيق حلمهم في الأمومة والأبوة",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "ar/request-an-appoinment", // 👈 custom link
      buttonText: "احجز الآن",
    },
    {
      video: "images/ar-banner/6.mp4",
      title: "الجيل القادم من <br>علاجات الإخصاب",
      desc: "الآن في السعودية",
      buttonLink: "ar/request-an-appoinment", // 👈 custom link
      buttonText: "احجز الآن",
    },
    {
      video: "images/ar-banner/7.mp4",
      title: "ابدأوا رحلتكم نحو الأمومة <br>والأبوة مع بنون",
      desc: "احجزوا موعدكم معنا اليوم",
      titleColor: "#004E78",
      descColor: "#004E78",
      buttonLink: "ar/request-an-appoinment", // 👈 custom link
      buttonText: "احجز الآن",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto slide change (10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const speed = 0.5;
      const offset = -(window.scrollY * speed);
      setBgPosition(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="second-banner-area"
      style={{
        position: "relative",
        width: "100%",
        height: "65vh",
        overflow: "hidden",
        backgroundPosition: `center ${bgPosition}px`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔹 Video Background Slider */}
      {slides.map((slide, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* 🔹 Text Content */}
      <div className="container">
        <div
          className="second-banner-content section-title-animation animation-style2"
          style={{
            opacity: 1,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {/* Title */}
          <h1
            style={{ color: slides[currentSlide].titleColor || "#fff" }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />

          {/* Description */}
          <p
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].desc }}
            style={{ color: slides[currentSlide].descColor || "#fff" }}
          />

          {/* Button with slide-specific link */}
       <div className="banner-btn">
  <Link
    href={slides[currentSlide].buttonLink}
    className="btn btn-success btn-appointment btn-banner"
  >
    {slides[currentSlide].buttonText}
  </Link>
</div>



          {/* Extra Text */}
          <p
            className="terms-text"
            dangerouslySetInnerHTML={{
              __html: slides[currentSlide].extra || "",
            }}
            style={{
              color: slides[currentSlide].descColor || "#fff",
              fontSize: slides[currentSlide].extraFontSize || "inherit",
            }}
          />
        </div>
      </div>
<style jsx>{`
  /* ✅ Mobile only: override the inline height */
  @media (max-width: 768px) {
    .second-banner-area {
      height: 200px !important; /* 👈 removes the fixed height */
    }
  }
`}</style>

      {/* 🔹 Slider Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background:
                currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;
