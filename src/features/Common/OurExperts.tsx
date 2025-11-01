"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// ✅ Doctor data structure
interface Expert {
  id: number;
  name: string;
  qualification: string;
  imageUrl: string;
  profileLink: string;
  location: "الرياض" | "جدة";
}

const OurExpertsComponent = () => {
const [filter, setFilter] = useState<"الجميع" | "الرياض" | "جدة">("الجميع");

// ✅ Read location from URL (like ?location=الرياض)
const searchParams = useSearchParams();
const locationParam = searchParams.get("location") as "الرياض" | "جدة" | null;

useEffect(() => {
  if (locationParam === "الرياض" || locationParam === "جدة") {
    setFilter(locationParam); // auto-filter based on query
  }
}, [locationParam]);

  const doctorsData: Expert[] = [
    {
      id: 1,
      name: "الدكتور عبد العزيز  الشهراني",
      qualification: "المدير الطبي للمجموعة استشاري الإخصاب وتأخر الحمل",
      imageUrl: "/images/doctors/1.jpg",
      profileLink: "dr-abdalaziz-alshahrani",
      location: "الرياض",
    },
    {
      id: 2,
      name: "الدكتور فواز  إدريس ",
      qualification:
        "المدير التنفيذي، بنون - جدة استشاري أمراض النساء والولادة والحمل الحرج وطب الأمومة والأجنة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/2.jpg",
      profileLink: "dr-fawaz-edris",
      location: "جدة",
    },
    {
      id: 3,
      name: "الدكتور مازن بشارة",
      qualification:
        "المدير الطبي، بنون - جدة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/3.jpg",
      profileLink: "dr-mazin-bishara",
      location: "جدة",
    },
    {
      id: 4,
      name: "الدكتور عاصم الوهيبي",
      qualification: "استشاري الإخصاب وتأخر الحمل",
      imageUrl: "/images/doctors/4.jpg",
      profileLink: "dr-asim-alwohaibi",
      location: "الرياض",
    },
    {
      id: 5,
      name: "الدكتور حسين صبّان",
      qualification:
        "استشاري أمراض النساء والولادة والإخصاب وتأخر الحمل",
      imageUrl: "/images/doctors/5.jpg",
      profileLink: "dr-hussein-sabban",
      location: "جدة",
    },
    {
      id: 6,
      name: "الدكتور أحمد الشيخ",
      qualification:
        "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب/الحقن المجهري والمناظير والغدد الصماء التناسلية",
      imageUrl: "/images/doctors/6.jpg",
      profileLink: "dr-ahmed-alshaikh",
      location: "جدة",
    },
    {
      id: 7,
      name: "الدكتور وجدي العمرى",
      qualification: "استشاري الإخصاب وتأخر الحمل",
      imageUrl: "/images/doctors/7.jpg",
      profileLink: "dr-wajdi-alomari",
      location: "الرياض",
    },
    {
      id: 8,
      name: "الدكتورة داليا نور",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "/images/doctors/8.jpg",
      profileLink: "dr-dalia-nour",
      location: "الرياض",
    },
    {
      id: 9,
      name: "الدكتور أحمد هارون",
      qualification: "استشاري جراحة المسالك البولية وأمراض الذكورة والعقم",
      imageUrl: "/images/doctors/9.jpg",
      profileLink: "dr-ahmad-haroun",
      location: "جدة",
    },
    {
      id: 10,
      name: "الدكتور موسى النعمي",
      qualification: "استشاري أمراض الذكورة والعقم",
      imageUrl: "/images/doctors/10.jpg",
      profileLink: "dr-moussa-el-naiemy",
      location: "الرياض",
    },
    {
      id: 11,
      name: "الدكتورة مايا البزرة",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "/images/doctors/11.jpg",
      profileLink: "dr-maya-albezreh",
      location: "جدة",
    },
    {
      id: 12,
      name: "الدكتورة رزان غيث",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "/images/doctors/12.jpg",
      profileLink: "dr-razan-ghaith",
      location: "جدة",
    },
    {
      id: 13,
      name: "الدكتورة مرام دعدوع",
      qualification: "نائب أول، أمراض النساء والولادة",
      imageUrl: "/images/doctors/13.jpg",
      profileLink: "dr-maram-dadoua",
      location: "جدة",
    },
  ];

  // ✅ Filtered doctors
  const filteredDoctors =
    filter === "الجميع"
      ? doctorsData
      : doctorsData.filter((doc) => doc.location === filter);

  return (
  <Suspense fallback={<div>Loading...</div>}>
    <div dir="rtl" style={{ textAlign: "right", fontFamily: "Alexandria, sans-serif" }}>

      <div className="container ptb-140">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                 <h2>أطباؤنا</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        {/* ✅ Filter Buttons */}
        <div className="mb-4 d-flex gap-3 flex-wrap">
          <button
            className={`physicians-btn btn ${filter === "الجميع" ? "active" : ""}`}
            onClick={() => setFilter("الجميع")}
          >
          الجميع
          </button>
          <button
            className={`physicians-btn btn ${filter === "الرياض" ? "active" : ""}`}
            onClick={() => setFilter("الرياض")}
          >
            الرياض
          </button>
          <button
            className={`physicians-btn btn ${filter === "جدة" ? "active" : ""}`}
            onClick={() => setFilter("جدة")}
          >
            جدة
          </button>
        </div>

        {/* ✅ Doctors List */}
        <div className="doctors-scroll-container">
          <div className="row g-4">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="col-xl-3 col-md-6">
                <div className="doctor-card">
                  <div className="image-wrapper" style={{ position: "relative" }}>
                    <img
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      width={275}
                      height={236}
                      style={{ borderRadius: "10px" }}
                    />
                    {/* Overlay */}
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <Link
                          href={doctor.profileLink}
                          className="btn btn-success doctor-btn doctor-hover-btn"
                        >
                          عرض الملف الشخصي
                        </Link>
                        <div className="doctor-location">
                          <i className="ri-map-pin-line"></i> {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <h3>
                      <Link href={doctor.profileLink}>{doctor.name}</Link>
                    </h3>
                    <span className="sub">{doctor.qualification}</span>
                    <div>
                      <Link
                        href="request-an-appoinment"
                        className="btn btn-success doctor-btn"
                      >
                        طلب موعد
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ✅ CSS */}
                <style jsx>{`
                  .doctor-card {
                    position: relative;
                    overflow: hidden;
                  }

                  .doctor-card:hover .image-overlay {
                    opacity: 1;
                  }

                  .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 10px;
                    text-align: center;
                  }

                  .image-overlay .doctor-btn {
                    padding: 10px 20px;
                    color: #fff;
                    border-radius: 5px;
                    margin-bottom: 10px;
                  }

                  .doctor-location {
                    color: #fff;
                    font-size: 14px;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default OurExpertsComponent;
