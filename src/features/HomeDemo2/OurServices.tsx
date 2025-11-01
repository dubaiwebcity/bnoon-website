import React from "react";
import Image from "next/image";
import Link from "next/link";

function OurServices() {
  // Dynamic data for services
  const servicesData = [
    {
      id: 1,
      icon: "/images/icons/Website-Icons_1.png",
      title: "رعاية يقودها خبراء وتتمحور حول الزوجين",
      description:
        "فريقنا من الاستشاريين المعتمدين، وأخصائيي الأجنة، والممرضين المتخصصين يجمع بين التميّز الطبي والتعاطف الإنساني. نحن لا نقدّم العلاج فقط؛ بل الرعاية والاهتمام۔",
    
    },
    {
      id: 2,
      icon: "/images/icons/Website-Icons_2.png",
      title: "مرافق حديثة مصمّمة بعناية",
      description:
        "​تصميم هادئ ومساحات مريحة تساعد في تخفيف التوتر وتعزيز الراحة النفسية للأزواج. كل تفصيل مدروس ليعكس بيئة داعمة ومُطمئِنة۔",
    
    },
    {
      id: 3,
      icon: "/images/icons/Website-Icons_3.png",
      title: "رعاية متكاملة تحت سقف واحد",
      description:
        "من التشخيص إلى العلاجات المتقدمة مثل عمليات أطفال الأنابيب، وتجميد البويضات، وحفظ الخصوبة، إلى متابعة الحمل—كل ذلك ضمن مركز واحد دون تأخير أو إحالات إلى تخصصات أخرى۔",
     
    },
    {
      id: 4,
      icon: "/images/icons/Website-Icons_4.png",
      title: "خطط علاجية مخصصة",
      description:
        "كل خطة علاجية مصمّمة وفقاً لاحتياجاتكم كزوجين، وظروفكم الصحية، وتطلعاتكم—بما يتماشى مع نمط حياتكم۔",
     
    },
  ];

  return (
    <>
      <div className="services-area mt-5">
        <div className="inner ptb-140">
          <div className="container">
            <div className="section-title">
              <div className="row justify-content-center align-items-center g-4">
                <div className="col-lg-12 col-md-12">
                  <div className="left">
                    <h2 className="">لماذا يثق الأزواج ببنون في رحلتهم نحو الأبوة والأمومة؟
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                
                </div>
              </div>
            </div>
<div className="container-fluid px-0">
              <div className="row justify-content-center g-4">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="col-md-6 mx-auto px-0"
                    style={{ maxWidth: "600px" }}
                  >
                    <div className="service-card wrap2">
                      <div className="top">
                        <div
                          className="d-flex align-items-center mb-2"
                          style={{
                            justifyContent: "space-between",
                            gap: "20px",
                          }}
                        >
                          <h3 className="mb-0">{service.title}</h3>
                          <div className="icon flex-shrink-0">
                            <img
                              src={service.icon}
                              alt="icon"
                              width={70}
                              height={70}
                            />
                          </div>
                        </div>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Move your style block INSIDE the return */}
      <style jsx>{`
        /* 🔹 Only for mobile view (≤768px) */
        @media (max-width: 768px) {
          .services-area .container-fluid {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          .services-area .service-card {
            margin-left: 5px;
            margin-right: 5px;
          }
        }
      `}</style>
    </>
  );
}

export default OurServices;