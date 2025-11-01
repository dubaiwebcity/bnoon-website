"use client";

import React, { useState, useEffect, useRef } from "react";
import { Placeholder } from "react-bootstrap";

const AppointmentSection = () => {
const [formData, setFormData] = useState({
  interest: "",
  branch: "",
  doctor: "",
  name: "",
  isForYou: "",  // 👈 yahan "yes" ki jagah empty rakho
  nationality: "",
  countryOfResidence: "",
  cityIfInSA: "",
  gender: "",
  mobile: "",
  email: "",
  preferredDate: "",
  preferredTime: "",
  howHeard: "",
});
const nationalities = [
  "سعودي",
  "أفغاني",
  "ألباني",
  "جزائري",
  "أمريكي",
  "أندوري",
  "أنغولي",
  "أنتيغوي",
  "أرجنتيني",
  "أرميني",
  "أسترالي",
  "نمساوي",
  "أذربيجاني",
  "باهامي",
  "بحريني",
  "بنغلاديشي",
  "باربادوسي",
  "بيلاروسي",
  "بلجيكي",
  "بليزي",
  "بنيني",
  "بوتاني",
  "بوليفي",
  "بوسني / هيرزغوفي",
  "بوتسواني",
  "برازيلي",
  "بروناي",
  "بلغاري",
  "بوركينابي",
  "بوروندي",
  "كمبودي",
  "كاميروني",
  "كندي",
  "رأس أخضري",
  "أفريقي وسطي",
  "تشادي",
  "تشيلي",
  "صيني",
  "كولومبي",
  "قمري",
  "كونغولي",
  "كوستاريكي",
  "كرواتي",
  "كوبي",
  "قبرصي",
  "تشيكي",
  "دنماركي",
  "جيبوتي",
  "دومينيكاني",
  "هولندي",
  "تيموري شرقي",
  "إكوادوري",
  "مصري",
  "إماراتي",
  "إنجليزي",
  "غيني استوائي",
  "إريتري",
  "إستوني",
  "إثيوبي",
  "فيجي",
  "فنلندي",
  "فرنسي",
  "غابوني",
  "غامبي",
  "جورجي",
  "ألماني",
  "غاني",
  "يوناني",
  "غرينادي",
  "غواتيمالي",
  "غيني",
  "غوياني",
  "هايتي",
  "هندوراسي",
  "مجري",
  "آيسلندي",
  "هندي",
  "إندونيسي",
  "إيراني",
  "عراقي",
  "إيرلندي",
  "إسرائيلي",
  "إيطالي",
  "إيفواري",
  "جامايكي",
  "ياباني",
  "أردني",
  "كازاخستاني",
  "كيني",
  "كيتيسي / نيفيسي",
  "كيريباتي",
  "كوري شمالي",
  "كوري جنوبي",
  "كويتي",
  "قيرغيزستاني",
  "لاوسي",
  "لاتفي",
  "لبناني",
  "ليبيري",
  "ليبي",
  "ليختنشتايني",
  "ليتواني",
  "لوكسمبورغي",
  "مقدوني",
  "مدغشقري",
  "مالاوي",
  "ماليزي",
  "مالديفي",
  "مالي",
  "مالطي",
  "مارشالي",
  "موريتاني",
  "موريشي",
  "مكسيكي",
  "ميكرونيزي",
  "مولدوفي",
  "مونيغاسكي",
  "منغولي",
  "مونتينيغري",
  "مغربي",
  "موزمبيقي",
  "بورمي",
  "ناميبي",
  "ناوروي",
  "نيبالي",
  "نيوزيلندي",
  "نيكاراغوي",
  "نيجري",
  "نيجيري",
  "ني فانواتي",
  "نرويجي",
  "عماني",
  "باكستاني",
  "بالاوي",
  "فلسطيني",
  "بنمي",
  "بابوا غينيا جديدي",
  "باراغواياني",
  "بيروفي",
  "فلبيني",
  "بولندي",
  "برتغالي",
  "قطري",
  "روماني",
  "روسي",
  "رواندي",
  "سانت لوسياني",
  "سلفادوري",
  "سَن ماريني",
  "ساموي",
  "سعودي",
  "اسكتلندي",
  "سنغالي",
  "صربي",
  "سيشلي",
  "سيراليوني",
  "سنغافوري",
  "سلوفاكي",
  "سلوفيني",
  "جزر سليمان",
  "صومالي",
  "جنوب أفريقي",
  "إسباني",
  "سريلانكي",
  "سوداني",
  "سورينامي",
  "سوازي",
  "سويدي",
  "سويسري",
  "سوري",
  "تايواني",
  "طاجيكي",
  "تنزاني",
  "تايلاندي",
  "توغولي",
  "تونغاني",
  "ترينيدادي / توباغوني",
  "تونسي",
  "تركي",
  "تركماني",
  "توفالي",
  "أوغندي",
  "أوكراني",
  "أوروغوياني",
  "أوزبكي",
  "فاتيكاني",
  "فنزويلي",
  "فيتنامي",
  "ويلزي",
  "يمني",
  "زامبي",
  "زيمبابوي"
];

// Top pe array define karlo
const countriesList =[
  "السعودية",
  "أفغانستان",
  "ألبانيا",
  "الجزائر",
  "أندورا",
  "أنغولا",
  "أنتيغوا وباربودا",
  "الأرجنتين",
  "أرمينيا",
  "أستراليا",
  "النمسا",
  "أذربيجان",
  "جزر البهاماس",
  "البحرين",
  "بنغلاديش",
  "باربادوس",
  "بيلاروسيا",
  "بلجيكا",
  "بليز",
  "بنين",
  "بوتان",
  "بوليفيا",
  "البوسنة والهرسك",
  "بوتسوانا",
  "البرازيل",
  "بروناي",
  "بلغاريا",
  "بوركينا فاسو",
  "بوروندي",
  "الرأس الأخضر",
  "كمبوديا",
  "الكاميرون",
  "كندا",
  "جمهورية أفريقيا الوسطى",
  "تشاد",
  "تشيلي",
  "الصين",
  "كولومبيا",
  "جزر القمر",
  "الكونغو (الكونغو برازافيل)",
  "كوستاريكا",
  "كرواتيا",
  "كوبا",
  "قبرص",
  "جمهورية التشيك (تشيكيا)",
  "جمهورية الكونغو الديمقراطية",
  "الدنمارك",
  "جيبوتي",
  "دومينيكا",
  "جمهورية الدومينيكان",
  "الإكوادور",
  "مصر",
  "السلفادور",
  "غينيا الاستوائية",
  "إريتريا",
  "إستونيا",
  "إسواتيني",
  "إثيوبيا",
  "فيجي",
  "فنلندا",
  "فرنسا",
  "الغابون",
  "غامبيا",
  "جورجيا",
  "ألمانيا",
  "غانا",
  "اليونان",
  "غرينادا",
  "غواتيمالا",
  "غينيا",
  "غينيا بيساو",
  "غيانا",
  "هايتي",
  "هندوراس",
  "المجر",
  "آيسلندا",
  "الهند",
  "إندونيسيا",
  "إيران",
  "العراق",
  "أيرلندا",
  "إسرائيل",
  "إيطاليا",
  "جامايكا",
  "اليابان",
  "الأردن",
  "كازاخستان",
  "كينيا",
  "كيريباتي",
  "الكويت",
  "قيرغيزستان",
  "لاوس",
  "لاتفيا",
  "لبنان",
  "ليسوتو",
  "ليبيريا",
  "ليبيا",
  "ليختنشتاين",
  "لتوانيا",
  "لوكسمبورغ",
  "مدغشقر",
  "ملاوي",
  "ماليزيا",
  "جزر المالديف",
  "مالي",
  "مالطا",
  "جزر مارشال",
  "موريتانيا",
  "موريشيوس",
  "المكسيك",
  "ميكرونيزيا",
  "مولدوفا",
  "موناكو",
  "منغوليا",
  "الجبل الأسود",
  "المغرب",
  "موزمبيق",
  "ميانمار (بورما)",
  "ناميبيا",
  "ناورو",
  "نيبال",
  "هولندا",
  "نيوزيلندا",
  "نيكاراغوا",
  "النيجر",
  "نيجيريا",
  "كوريا الشمالية",
  "مقدونيا الشمالية",
  "النرويج",
  "عُمان",
  "باكستان",
  "بالاو",
  "فلسطين",
  "بنما",
  "بابوا غينيا الجديدة",
  "باراغواي",
  "بيرو",
  "الفلبين",
  "بولندا",
  "البرتغال",
  "قطر",
  "رومانيا",
  "روسيا",
  "رواندا",
  "سانت كيتس ونيفيس",
  "سانت لوسيا",
  "سانت فنسنت والغرينادينز",
  "ساموا",
  "سان مارينو",
  "ساو تومي وبرينسيب",
  "السنغال",
  "صربيا",
  "سيشيل",
  "سيراليون",
  "سنغافورة",
  "سلوفاكيا",
  "سلوفينيا",
  "جزر سليمان",
  "الصومال",
  "جنوب أفريقيا",
  "كوريا الجنوبية",
  "جنوب السودان",
  "إسبانيا",
  "سريلانكا",
  "السودان",
  "سورينام",
  "السويد",
  "سويسرا",
  "سوريا",
  "تايوان",
  "طاجيكستان",
  "تنزانيا",
  "تايلاند",
  "تيمور الشرقية",
  "توغو",
  "تونغا",
  "ترينيداد وتوباغو",
  "تونس",
  "تركيا",
  "تركمانستان",
  "توفالو",
  "أوغندا",
  "أوكرانيا",
  "الإمارات العربية المتحدة",
  "المملكة المتحدة",
  "الولايات المتحدة الأمريكية",
  "أوروغواي",
  "أوزبكستان",
  "فانواتو",
  "مدينة الفاتيكان",
  "فنزويلا",
  "فيتنام",
  "اليمن",
  "زامبيا",
  "زيمبابوي"
]

const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFieldInvalid = (field: string) =>
    submitted && !formData[field as keyof typeof formData];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);

  // check empty fields
  const requiredFields = ["branch", "name", "mobile", "email"];
const hasEmpty = requiredFields.some(
  (field) => !formData[field as keyof typeof formData]
);

  if (hasEmpty) {
    setMessage("❌ Please fill all required fields.");
    return;
  }

  try {
    const response = await fetch("/api/send-appointment-ar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setMessage(" .Thank you! Your request has been sent");
      setFormData({
        interest: "",
        branch: "",
        doctor: "",
        name: "",
        isForYou: "",
        nationality: "",
        countryOfResidence: "",
        cityIfInSA: "",
        gender: "",
        mobile: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
        howHeard: "",
      });
      setSubmitted(false);
    } else {
      const errorData = await response.json();
      setMessage("❌ Failed to send. " + (errorData.error || ""));
    }
  } catch (error) {
    console.error("Error sending form:", error);
    setMessage("❌ Something went wrong. Please try again later.");
  }
};

  return (
    <div className="fertility-area mt-5 text-center">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 ref={headerRef}
                className={`left animate-left ${headerVisible ? "show" : ""}`}>احجز موعدك الآن </h2>
              </div>
            </div>
            <div className="left ">
              <p className="text-center ">
               نحن هنا لنكون إلى جانبك في كل خطوة من رحلتك.<br />
يرجى تعبئة النموذج أدناه لطلب موعد مع أحد أطبائنا المتخصصين، وسيقوم أحد منسقي مركز الاتصال بالتواصل معك خلال 48 ساعة لتأكيد الحجز والإجابة عن أي استفسارات أولية۔
              </p>
            </div>
          </div>
        </div>

        {/* FORM START */}
<div className="d-flex justify-content-center align-items-center mb-5 pbt-140" style={{ minHeight: "100vh" }}>
 <form onSubmit={handleSubmit} className="appointment-form text-end" style={{ maxWidth: "800px", width: "100%" }}>
  {/* I am interested in */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">ما الخدمة التي تبحث عنها؟ 
        {" "}
        <span style={{ color: isFieldInvalid("interest") ? "red" : "black" }}>*</span>
      </label>

      <select
        className="form-control"
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        required
      >
        <option value="">ما الخدمة التي تبحث عنها؟ </option>
        <option value="الرغبة في الحمل">الرغبة في الحمل</option>
        <option value="استشارة أولية في الخصوبة">استشارة أولية في الخصوبة</option>
        <option value="تجميد البويضات أو الحيوانات المنوية">تجميد البويضات أو الحيوانات المنوية</option>
        <option value="فحوصات الخصوبة">فحوصات الخصوبة</option>
        <option value="متابعة الحمل">متابعة الحمل</option>
        <option value="مشاكل الذكورة / أمراض الذكورة">مشاكل الذكورة / أمراض الذكورة</option>
        <option value="مشاكل في أمراض النساء">مشاكل في أمراض النساء</option>
        <option value="فحص عام وتحاليل">فحص عام وتحاليل</option>
        <option value="أسباب أخرى">أسباب أخرى</option>
      </select>
    </div>
  </div>

 {/* Select Branch */}
<div className="row g-3">
  <div className="col-md-12 mb-3">
    <label className="appointmentform-label">
     الفرع {" "}
      <span style={{ color: isFieldInvalid("branch") ? "red" : "black" }}>*</span>
    </label>
    <select
      className="form-control"
      name="branch"
      value={formData.branch}
      onChange={handleChange}
    >
      <option value="">الفرع </option>
      <option value="الرياض">الرياض</option>
      <option value="جدة">جدة</option>
    </select>
  </div>
</div>

{/* Doctor */}
<div className="row g-3">
  <div className="col-md-12 mb-3">
    <label className="appointmentform-label">
     اختر الطبيب{" "}
      <span style={{ color: isFieldInvalid("doctor") ? "red" : "black" }}>*</span>
    </label>
    <select
      className="form-control"
      name="doctor"
      value={formData.doctor}
      onChange={handleChange}
      disabled={!formData.branch} // jab tak branch select na ho, disable rakho
    >
      <option value="">اختر الطبيب</option>

      {/* Doctors list dynamically show karo */}
      {formData.branch === "الرياض" &&
        [
          "الدكتور عبد العزيز الشهراني",
          "الدكتور عاصم الوهيبي",
          "الدكتور وجدي العمرى",
          "الدكتورة داليا نور",
          "الدكتور موسى النعمي",
        ].map((doc) => (
          <option key={doc} value={doc}>
            {doc}
          </option>
        ))}

      {formData.branch === "جدة" &&
        [
          "الدكتور فواز إدريس",
          "الدكتور مازن بشارة",
          "Dr. Hussein Sabban  ",
          "الدكتور أحمد الشيخ",
          "الدكتورة رزان غيث",
          "الدكتورة مايا البزرة",
          "الدكتورة مرام دعدوع",
          "الدكتور أحمد هارون",
        ].map((doc) => (
          <option key={doc} value={doc}>
            {doc}
          </option>
        ))}
    </select>
  </div>
</div>

  {/* Your Name */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">الاسم الكامل<span style={{ color: isFieldInvalid("name") ? "red" : "black" }}>*</span></label>
      <input
        type="text"
        className="form-control"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Is this appointment for you */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label d-block mb-2">
       هل الموعد لك شخصيًا؟<span style={{ color: isFieldInvalid("isForYou") ? "red" : "black" }}>*</span>
      </label>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="isForYou"
          id="isForYouYes"
          value="yes"
          checked={formData.isForYou === "yes"}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" htmlFor="isForYouYes">
         لا
        </label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="isForYou"
          id="isForYouNo"
          value="no"
          checked={formData.isForYou === "no"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="isForYouNo">
         نعم
        </label>
      </div>
    </div>
  </div>

  {/* Nationality */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">الجنسية<span style={{ color: isFieldInvalid("nationality") ? "red" : "black" }}>*</span></label>
      <select
        className="form-control"
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        required
      >
        <option value="">الجنسية</option>
        {nationalities.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  </div>

 {/* Country of Residence */}
<div className="row g-3">
  <div className="col-md-12 mb-3">
    <label className="appointmentform-label">
      بلد الإقامة{" "}
      <span style={{ color: isFieldInvalid("countryOfResidence") ? "red" : "black" }}>*</span>
    </label>
    <select
      className="form-control"
      name="countryOfResidence"
      value={formData.countryOfResidence}
      onChange={handleChange}
    >
      <option value="">بلد الإقامة</option>
      {countriesList.map((country, idx) => (
        <option key={idx} value={country}>
          {country}
        </option>
      ))}
    </select>
  </div>
</div>

{/* City – show only if Saudi Arabia selected */}
{formData.countryOfResidence === "Saudi Arabia" && (
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">
       إذا كنت تعيش في المملكة العربية السعودية، يرجى ذكر المدينة.{" "}
        <span style={{ color: isFieldInvalid("cityIfInSA") ? "red" : "black" }}>*</span>
      </label>
      <select
        className="form-control"
        name="cityIfInSA"
        value={formData.cityIfInSA}
        onChange={handleChange}
      >
        <option value="">إذا كنت تعيش في المملكة العربية السعودية، يرجى ذكر المدينة.</option>
        <option value="Riyadh">الرياض</option>
        <option value="Madinah">المدينة المنورة</option>
        <option value="Dammam">الدمام</option>
        <option value="Jeddah">جدة</option>
        <option value="Taif">الطائف</option>
        <option value="Sakaka">سكاكا</option>
        <option value="Makkah">مكة المكرمة</option>
        <option value="Tabuk">تبوك</option>
        <option value="Buraydah">بريدة</option>
        <option value="Khobar">الخبر</option>
        <option value="Dhahran">الظهران</option>
        <option value="Abha">أبها</option>
        <option value="Khamis Mushait">خميس مشيط</option>
        <option value="Hail">حائل</option>
        <option value="Al-Qassim">القصيم (بريدة)</option>
        <option value="Al-Ahsa">الأحساء (الهفوف والمبرز)</option>
        <option value="Najran">نجران</option>
        <option value="Jazan">جازان</option>
        <option value="Yanbu">ينبع</option>
        <option value="Al-Baha">الباحة</option>
        <option value="Arar">عرعر</option>
        <option value="Other">أخرى</option>
      </select>
    </div>
  </div>
)}


  {/* Gender */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">الجنس<span style={{ color: isFieldInvalid("gender") ? "red" : "black" }}>*</span></label>
      <div className="d-flex gap-3 mt-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="genderMale"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="genderMale">
           أنثى
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="genderFemale"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="genderFemale">
           ذكر
          </label>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">رقم الجوال<span style={{ color: isFieldInvalid("mobile") ? "red" : "black" }}>*</span></label>
      <input
        type="text"
        className="form-control"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Email */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">البريد الإلكتروني<span style={{ color: isFieldInvalid("email") ? "red" : "black" }}>*</span></label>
      <input
        type="email"
        className="form-control"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Preferred Date */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">اختر التاريخ المفضل للموعد<span style={{ color: isFieldInvalid("preferredDate") ? "red" : "black" }}>*</span></label>
      <input
        type="date"
        className="form-control"
        name="preferredDate"
        value={formData.preferredDate}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  {/* Preferred Time */}
  <div className="row g-3">
    <div className="col-md-12 mb-3">
      <label className="appointmentform-label">
       اختر الوقت المفضل<span style={{ color: isFieldInvalid("preferredTime") ? "red" : "black" }}>*</span>
      </label>
      <select
        className="form-control"
        name="preferredTime"
        value={formData.preferredTime}
        onChange={handleChange}
        required
      >
        <option value="">اختر الوقت المفضل</option>
        {/* options 9AM to 8PM every 15 mins */}
        <option value="9:00 AM">9:00 AM</option>
        <option value="9:15 AM">9:15 AM</option>
        <option value="9:30 AM">9:30 AM</option>
        <option value="9:45 AM">9:45 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="10:15 AM">10:15 AM</option>
        <option value="10:30 AM">10:30 AM</option>
        <option value="10:45 AM">10:45 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="11:15 AM">11:15 AM</option>
        <option value="11:30 AM">11:30 AM</option>
        <option value="11:45 AM">11:45 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="12:15 PM">12:15 PM</option>
        <option value="12:30 PM">12:30 PM</option>
        <option value="12:45 PM">12:45 PM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="1:15 PM">1:15 PM</option>
        <option value="1:30 PM">1:30 PM</option>
        <option value="1:45 PM">1:45 PM</option>
        <option value="2:00 PM">2:00 PM</option>
        <option value="2:15 PM">2:15 PM</option>
        <option value="2:30 PM">2:30 PM</option>
        <option value="2:45 PM">2:45 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="3:15 PM">3:15 PM</option>
        <option value="3:30 PM">3:30 PM</option>
        <option value="3:45 PM">3:45 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="4:15 PM">4:15 PM</option>
        <option value="4:30 PM">4:30 PM</option>
        <option value="4:45 PM">4:45 PM</option>
        <option value="5:00 PM">5:00 PM</option>
        <option value="5:15 PM">5:15 PM</option>
        <option value="5:30 PM">5:30 PM</option>
        <option value="5:45 PM">5:45 PM</option>
        <option value="6:00 PM">6:00 PM</option>
        <option value="6:15 PM">6:15 PM</option>
        <option value="6:30 PM">6:30 PM</option>
        <option value="6:45 PM">6:45 PM</option>
        <option value="7:00 PM">7:00 PM</option>
        <option value="7:15 PM">7:15 PM</option>
        <option value="7:30 PM">7:30 PM</option>
        <option value="7:45 PM">7:45 PM</option>
        <option value="8:00 PM">8:00 PM</option>
      </select>
    </div>
  </div>

  {/* How did you hear about us */}
  <div className="row g-3">
    <div className="col-md-12 ">
      <label className="appointmentform-label">كيف سمعت عنا؟<span style={{ color: isFieldInvalid("howHeard") ? "red" : "black" }}>*</span></label>
      <select
        className="form-control"
        name="howHeard"
        value={formData.howHeard}
        onChange={handleChange}
        required
      >
        <option value="">كيف سمعت عنا؟</option>
        <option value="بحث عبر جوجل">بحث عبر جوجل</option>
        <option value="إنستغرام">إنستغرام</option>
        <option value="سناب شات">سناب شات</option>
        <option value="فيسبوك">فيسبوك</option>
        <option value="تيك توك">تيك توك</option>
        <option value="موصى من صديق / قريب">موصى من صديق / قريب</option>
        <option value="تحويل من طبيب آخر">تحويل من طبيب آخر</option>
        <option value="صحيفة / جريدة">صحيفة / جريدة</option>
        <option value="مجلة">مجلة</option>
        <option value="فعالية أو محاضرة">فعالية أو محاضرة</option>
        <option value="إعلان لوحة طرق">إعلان لوحة طرق</option>
        <option value="إذاعة">إذاعة</option>
        <option value="تلفزيون">تلفزيون</option>
        <option value="عن طريق المعارف">عن طريق المعارف</option>
      </select>
    </div>
  </div>


  {/* Submit */}
  <div className="row g-3 mt-3">
    <div className="col-md-12 text-center">
      <button type="submit" className="btn btn-primary btn-blog btn-large mt-3">
       إرسال
      </button>
    </div>
  </div>
     {message && <p className="mt-3 text-center">{message}</p>}
</form>

 </div>
        {/* FORM END */}

     
      </div>
    </div>
  );
};

export default AppointmentSection;
