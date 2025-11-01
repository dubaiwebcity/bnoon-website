"use client";

import React from "react";

const HowItWorksSlider = () => {
  const steps = [
    { id: 1, imageSrc: "/images/fertility-counselling.jpg", title: "Fertility Consultation & Hormone Testing" },
    { id: 2, imageSrc: "/images/intrauterine-insemination.jpg", title: "Intrauterine Insemination" },
    { id: 3, imageSrc: "/images/ivf.jpg", title: "In Vitro Fertilization (IVF)" },
    { id: 4, imageSrc: "/images/ivm.jpg", title: "In Vitro Maturation (IVM)" },
    { id: 5, imageSrc: "/images/icsi.jpg", title: "Intracytoplasmic Sperm Injection (ICSI)" },
    { id: 6, imageSrc: "/images/ovulation-induction.jpg", title: "Ovulation Induction" },
    { id: 7, imageSrc: "/images/pgs.jpg", title: "Preimplantation Genetic Screening" },
    { id: 8, imageSrc: "/images/pgd.jpg", title: "Preimplantation Genetic Diagnostic" },
    { id: 9, imageSrc: "/images/egg-freezing.jpg", title: "Egg Freezing" },
    { id: 10, imageSrc: "/images/sperm-freezing.jpg", title: "Sperm Freezing" },
    { id: 11, imageSrc: "/images/embryo-freezing.jpg", title: "Embryo Freezing" },
    { id: 12, imageSrc: "/images/male-fertility.jpg", title: "Male Fertility Evaluation & Treatment" },
    { id: 13, imageSrc: "/images/ivf.jpg", title: "Surgical Sperm Retrieval" },
    { id: 14, imageSrc: "/images/fbgs.jpg", title: "Family Balance - Gender Selection" },
    { id: 15, imageSrc: "/images/recurrent-miscarriage.jpg", title: "Recurrent Miscarriage" },
    { id: 16, imageSrc: "/images/antenatal-care-deliveries.jpg", title: "Antenatal Care" },
  ];

  return (
    <div className="how-it-works-area ptb-140 smoke-bg-color">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Treatments</h2>
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
