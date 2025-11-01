"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type LocationType = "الرياض" | "جدة" | "";

const SearchBar = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState<LocationType>("");
  const router = useRouter();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // ✅ Intersection Observer for heading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Doctors data (Arabic keys match type)
  const doctorsByLocation: Record<Exclude<LocationType, "">, string[]> = {
    الرياض: [
      "الدكتور عبد العزيز  الشهراني",
      "الدكتور عاصم الوهيبي",
      "الدكتور وجدي  العمري",
      "الدكتورة داليا  نور",
      "الدكتور موسى  النعمي",
    ],
    جدة: [
      "الدكتور فواز  إدريس",
      "الدكتور مازن بشارة",
      "الدكتور أحمد الشيخ",
      "الدكتور حسين صبّان",
      "الدكتور أحمد هارون",
      "الدكتورة مايا البزرة",
      "الدكتورة رزان غيث",
      "الدكتورة مرام دعدوع",
    ],
  };

  const allDoctors = [...doctorsByLocation.الرياض, ...doctorsByLocation.جدة];

 const doctorsToShow =
    location === "الرياض" || location === "جدة"
      ? doctorsByLocation[location]
      : allDoctors;

  // ✅ Doctor profile links (Arabic names mapped to URLs)
  const doctorProfileLinks: Record<string, string> = {
    "الدكتور عبد العزيز  الشهراني": "/ar/dr-abdalaziz-alshahrani",
    "الدكتور عاصم الوهيبي": "/ar/dr-asim-alwohaibi",
    "الدكتور وجدي  العمري": "/ar/dr-wajdi-alomari",
    "الدكتورة داليا  نور": "/ar/dr-dalia-nour",
    "الدكتور موسى  النعمي": "/ar/dr-moussa-el-naiemy",
    "الدكتور فواز  إدريس": "/ar/dr-fawaz-edris",
    "الدكتور مازن بشارة": "/ar/dr-mazin-bishara",
    "الدكتور أحمد الشيخ": "/ar/dr-ahmed-alshaikh",
    "الدكتور حسين صبّان": "/ar/dr-hussein-sabban",
    "الدكتور أحمد هارون": "/ar/dr-ahmad-haroun",
    "الدكتورة مايا البزرة": "/ar/dr-maya-albezreh",
    "الدكتورة رزان غيث": "/ar/dr-razan-ghaith",
    "الدكتورة مرام دعدوع": "/ar/dr-maram-dadoua",
  };

  // ✅ Handle search
  const handleSearch = () => {
    if (!location && !doctor) {
      alert("الرجاء اختيار الطبيب أو الموقع");
      return;
    }

    // ✅ If doctor is selected, go to their profile page directly
    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    // ✅ If only location is selected, go to /ar/our-experts and filter
    if (location) {
      router.push(`/ar/our-experts?location=${encodeURIComponent(location)}`);
    }
  };


  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2
            ref={headerRef}
            className={`animate-left ${headerVisible ? "show" : ""}`}
          >
            ابحث عن طبيب
          </h2>
          <p>
            من خلال الموقع الإلكتروني لدينا، نساعدك على التواصل مع نخبة من
            أطبائنا الرائدين المختصين بعلاجات الإخصاب ومقدمي الرعاية الصحية
            لدينا۔
          </p>
        </div>

        {/* ✅ Search Bar */}
        <div className="search-bar">
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="doctor-select"
          >
            <option value="">حسب اسم الطبيب</option>
            {doctorsToShow.map((doc, index) => (
              <option key={index} value={doc}>
                {doc}
              </option>
            ))}
          </select>

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value as LocationType);
              setDoctor("");
            }}
            className="location-select"
          >
            <option value="">حسب الموقع</option>
            <option value="الرياض">الرياض</option>
            <option value="جدة">جدة</option>
          </select>

          <button onClick={handleSearch} className="search-button">
            ابحث
          </button>
        </div>
      </div>

      {/* ✅ Animation CSS */}
      <style jsx>{`
        .animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s ease-in-out;
        }
        .animate-left.show {
          opacity: 1;
          transform: translateX(0);
        }
           /* ✅ Mobile Responsive - column layout */
  @media (max-width: 768px) {
    .search-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .doctor-select,
    .location-select,
    .search-button {
      width: 100%;
    }
  }
      `}</style>
    </div>
  );
};

export default SearchBar;
