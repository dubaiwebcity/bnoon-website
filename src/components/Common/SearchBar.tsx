"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type LocationType = "Riyadh" | "Jeddah" | "";

const SearchBar = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState<LocationType>("");
  const router = useRouter();

  // Doctor → profile URL mapping
  const doctorProfileLinks: Record<string, string> = {
    "Dr. Abdalaziz Al-Shahrani": "/en/dr-abdalaziz-alshahrani",
    "Dr. Asim Al Wuhaibi": "/en/dr-asim-alwohaibi",
    "Dr. Wajdi Al Omari": "/en/dr-ahmed-alshaikh",
    "Dr. Dalia Adel": "/en/dr-dalia-nour",
    "Dr. Moussa El Naiemy": "/en/dr-moussa-el-naiemy",
    "Dr. Fawaz Edris": "/en/dr-fawaz-edris",
    "Dr. Mazin Bishara": "/en/dr-mazin-bishara",
    "Dr. Ahmed Alshaikh": "/en/our-ex/en/dr-ahmed-alshaikh",
    "Dr. Hussein Sabban": "/en/dr-hussein-sabban",
    "Dr. Ahmad Haroun": "/en/dr-ahmad-haroun",
    "Dr. Maya Albezreh": "/en/dr-maya-albezreh",
    "Dr. Razan Ghaith": "/en/dr-razan-ghaith",
    "Dr. Maram Dadoua": "/en/dr-maram-dadoua",
  };

  // Single handleSearch function
  const handleSearch = () => {
    if (!doctor && !location) {
      alert("Please select a doctor or location");
      return;
    }

    // Doctor selected → go to profile page
    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    // Otherwise → go to general experts page with location filter
    const params = new URLSearchParams();
    if (location) params.append("location", location);

    router.push(`/en/our-experts?${params.toString()}`);
  };

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // Intersection observer for heading animation
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

  // Doctors data for dropdown
  const doctorsByLocation: Record<Exclude<LocationType, "">, string[]> = {
    Riyadh: [
      "Dr. Abdalaziz Al-Shahrani",
      "Dr. Asim Al Wuhaibi",
      "Dr. Wajdi Al Omari",
      "Dr. Dalia Adel",
      "Dr. Moussa El Naiemy",
    ],
    Jeddah: [
      "Dr. Fawaz Edris",
      "Dr. Mazin Bishara",
      "Dr. Ahmed Alshaikh",
      "Dr. Hussein Sabban",
      "Dr. Ahmad Haroun",
      "Dr. Maya Albezreh",
      "Dr. Razan Ghaith",
      "Dr. Maram Dadoua",
    ],
  };

  const allDoctors = [...doctorsByLocation.Riyadh, ...doctorsByLocation.Jeddah];
  const doctorsToShow =
    location === "Riyadh" || location === "Jeddah"
      ? doctorsByLocation[location]
      : allDoctors;

  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2
            ref={headerRef}
            className={`animate-left ${headerVisible ? "show" : ""}`}
          >
            Find a Doctor
          </h2>
          <p>
            Let us help you connect with one of our leading doctors or healthcare
            professionals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="doctor-select"
          >
            <option value="">Select Doctor</option>
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
            <option value="">By Location</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
          </select>

          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* CSS for animation */}
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

  /* ✅ Add this only */
  @media (max-width: 767px) {
    .search-bar {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .search-bar select,
    .search-bar button {
      width: 100%;
    }
  }
`}</style>

    </div>
  );
};

export default SearchBar;
