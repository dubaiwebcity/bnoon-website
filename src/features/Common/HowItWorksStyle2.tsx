"use client";

import React from "react";

const HowItWorksSlider = () => {
  const steps = [
    { id: 1, imageSrc: "/images/fertility-counselling.jpg", title: "استشارات الخصوبة وتحاليل الهرمونات " },
    { id: 2, imageSrc: "/images/intrauterine-insemination.jpg", title: " (IUI) التلقيح داخل الرحم" },
    { id: 3, imageSrc: "/images/ivf.jpg", title: " (IVF) أطفال الأنابيب" },
    { id: 4, imageSrc: "/images/ivm.jpg", title: "(IVM) نضوج البويضات خارج الجسم" },
    { id: 5, imageSrc: "/images/icsi.jpg", title: "  (ICSI) الحقن المجهري" },
    { id: 6, imageSrc: "/images/ovulation-induction.jpg", title: "تحفيز الإباضة " },
    { id: 7, imageSrc: "/images/pgs.jpg", title: "  (PGS) الفحص الوراثي للأجنة" },
    { id: 8, imageSrc: "/images/pgd.jpg", title: " (PGD) الفحص الوراثي للأجنة" },
    { id: 9, imageSrc: "/images/egg-freezing.jpg", title: "تجميد البويضات" },
    { id: 10, imageSrc: "/images/sperm-freezing.jpg", title: "تجميدُ النطف " },
    { id: 11, imageSrc: "/images/embryo-freezing.jpg", title: "تجميد الأجنة " },
    { id: 12, imageSrc: "/images/male-fertility.jpg", title: "تقييم وعلاج خصوبة الرجال (أمراض الذكورة والمسالك) " },
    { id: 13, imageSrc: "/images/ivf.jpg", title: "سحب الحيوانات المنوية جراحياً " },
    { id: 14, imageSrc: "/images/fbgs.jpg", title: "التوازن الأسري - جنس المولود " },
    { id: 15, imageSrc: "/images/recurrent-miscarriage.jpg", title: "​حالات الإجهاض المتكرر " },
    { id: 16, imageSrc: "/images/antenatal-care-deliveries.jpg", title: "متابعة الحمل ورعاية ما قبل الولادة " },
  ];

  return (
    <div className="how-it-works-area ptb-140 smoke-bg-color">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>العلاجات</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div key={step.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="how-it-work-card">
                <div className="image">
                  <img
                    src={step.imageSrc}
                    alt={step.title}
                    width={350}
                    height={300}
                   
                  />
                </div>
                <h6 className="blog-text">{step.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSlider;
