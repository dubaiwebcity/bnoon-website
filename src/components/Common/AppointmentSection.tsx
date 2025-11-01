
"use client";

import React, { useState, useEffect, useRef } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
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

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const nationalities = ["Saudi Arabia", "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan", "Argentine / Argentinian", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian / Herzegovinian", "Botswanan", "Brazilian", "Bruneian", "Bulgarian", "Burkinabé", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirati", "English", "Equatoguinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittitian / Nevisian", "Kiribati", "Korean (North)", "Korean (South)", "Kuwaiti", "Kyrgyzstani", "Lao / Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monégasque", "Mongolian", "Montenegrin", "Moroccan", "Mozambican", "Myanmar (Burmese)", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerien", "Nigerian", "Ni-Vanuatu", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Philippine", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Sammarinese", "Samoan", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovene", "Solomon Islander", "Somali", "South African", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajikistani", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian / Tobagonian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Vatican", "Venezuelan", "Vietnamese", "Welsh", "Yemeni", "Zambian", "Zimbabwean" ]; // Top pe array define karlo const countriesList = [ "Saudi Arabia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic (Czechia)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

  const countriesList = ["Saudi Arabia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic (Czechia)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

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

  // ✅ Handle form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Red star show only when field empty on submit
  const isFieldInvalid = (field: keyof typeof formData) => {
    if (field === "cityIfInSA" && formData.countryOfResidence !== "Saudi Arabia") return false;
    return submitted && !formData[field];
  };

  // ✅ Form Submit
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();
  setSubmitted(true);

  // Check empty fields (excluding cityIfInSA if not Saudi Arabia)
  const requiredFields = Object.keys(formData).filter(
    (key) => key !== "cityIfInSA" || formData.countryOfResidence === "Saudi Arabia"
  );

  const hasEmpty = requiredFields.some(
  (key) => !(formData as Record<string, string>)[key]
);
  if (hasEmpty) {
    setMessage("❌ Please fill all required fields.");
    return;
  }

  try {
    const response = await fetch("/api/send-appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("✅ Thank you! Your request has been sent.");
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
      setMessage("❌ " + data.error);
    }
  } catch (error) {
    setMessage("❌ Something went wrong.");
  }
};

  return (
    <div className="fertility-area mt-5 text-center mb-5">
      <div className="container">
          <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 ref={headerRef}
                className={`left animate-left ${headerVisible ? "show" : ""}`}>Request an Appointment</h2>
              </div>
            </div>
            <div className="left ">
              <p>
                We’re here to support you on your journey — fill out the form below to request an
                appointment with one of our doctors. You will receive a call back from one of our call
                center agents to book your appointment within 48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* FORM START */}
        <form onSubmit={handleSubmit} className="appointment-form text-start mx-auto" style={{ maxWidth: "800px" }}>
          {/* Interest */}
          <div className="mb-3">
            <label className="appointmentform-label">
              I am interested in <span style={{ color: isFieldInvalid("interest") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">Choose one</option>
              <option value="Having a child">Having a child</option>
              <option value="Generalfertilityconsultation">General fertility consultation</option>
              <option value="Fertility preservation">Fertility preservation</option>
              <option value="Learningabout">Learning about my fertility</option>
              <option value="Pregnancy follow-up">Pregnancy follow-up</option>
              <option value="Male/andrologyproblems">Male/andrology problems</option>
              <option value="Gynecologyproblem">Gynecology problem</option>
              <option value="Generalcheckupandscreening">General checkup and screening</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Branch */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Select Branch <span style={{ color: isFieldInvalid("branch") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="branch" value={formData.branch} onChange={handleChange}>
              <option value="">Select branch</option>
              <option value="Riyadh">Riyadh</option>
              <option value="Jeddah">Jeddah</option>
            </select>
          </div>

          {/* Doctor */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Select Doctor <span style={{ color: isFieldInvalid("doctor") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="doctor" value={formData.doctor} onChange={handleChange} disabled={!formData.branch}>
              <option value="">Select Doctor</option>
              {formData.branch === "Riyadh" &&
                ["Dr. Abdalaziz Al-Shahrani", "Dr. Asim Al Wuhaibi", "Dr. Wajdi Al Omari", "Dr. Dalia Adel", "Dr. Moussa El Naiemy "].map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              {formData.branch === "Jeddah" &&
                ["Dr. Fawaz Edris", "Dr. Mazin Bishara", "Dr. Hussein Sabban ", "Dr. Ahmed Alshaikh", "Dr. Razan Ghaith ", "Dr. Maya Albezreh", "Dr. Maram Dadoua", "Dr. Ahmad Haroun"].map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
            </select>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Your Name <span style={{ color: isFieldInvalid("name") ? "red" : "black" }}>*</span>
            </label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
          </div>

          {/* Appointment for you */}
          <div className="mb-3">
            <label className="appointmentform-label d-block">
              Is this appointment for you? <span style={{ color: isFieldInvalid("isForYou") ? "red" : "black" }}>*</span>
            </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="isForYou" id="isForYouYes" value="yes" checked={formData.isForYou === "yes"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="isForYouYes">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="isForYou" id="isForYouNo" value="no" checked={formData.isForYou === "no"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="isForYouNo">
                No
              </label>
            </div>
          </div>

          {/* Nationality */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Nationality <span style={{ color: isFieldInvalid("nationality") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="nationality" value={formData.nationality} onChange={handleChange}>
              <option value="">Select nationality</option>
              {nationalities.map((n, i) => (
                <option key={i} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Country of Residence <span style={{ color: isFieldInvalid("countryOfResidence") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange}>
              <option value="">Select country</option>
              {countriesList.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

        {/* City (Saudi Arabia only) */}
{formData.countryOfResidence === "Saudi Arabia" && (
  <div className="mb-3">
    <label className="appointmentform-label">
      If you live in Saudi Arabia, please state the city.{" "}
      <span style={{ color: isFieldInvalid("cityIfInSA") ? "red" : "black" }}>*</span>
    </label>
    <select
      className="form-control"
      name="cityIfInSA"
      value={formData.cityIfInSA}
      onChange={handleChange}
    >
      <option value="">Select City</option>
      <option value="Riyadh">Riyadh</option>
      <option value="Madinah">Madinah</option>
      <option value="Dammam">Dammam</option>
      <option value="Jeddah">Jeddah</option>
      <option value="Taif">Taif</option>
      <option value="Sakaka">Sakaka</option>
      <option value="Makkah">Makkah</option>
      <option value="Tabuk">Tabuk</option>
      <option value="Buraydah">Buraydah</option>
      <option value="Khobar (Al-Khobar)">Khobar (Al-Khobar)</option>
      <option value="Dhahran">Dhahran</option>
      <option value="Abha">Abha</option>
      <option value="Khamis Mushait">Khamis Mushait</option>
      <option value="Hail">Hail</option>
      <option value="Al-Qassim (Buraydah)">Al-Qassim (Buraydah)</option>
      <option value="Al-Ahsa (Hofuf & Al-Mubarraz)">Al-Ahsa (Hofuf & Al-Mubarraz)</option>
      <option value="Najran">Najran</option>
      <option value="Jazan (Jizan)">Jazan (Jizan)</option>
      <option value="Yanbu">Yanbu</option>
      <option value="Al-Baha">Al-Baha</option>
      <option value="Arar">Arar</option>
      <option value="Other">Other</option>
    </select>
  </div>
)}

          {/* Gender */}
          <div className="mb-3">
            <label className="appointmentform-label d-block">
              Gender <span style={{ color: isFieldInvalid("gender") ? "red" : "black" }}>*</span>
            </label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === "male"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === "female"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Mobile No<span style={{ color: isFieldInvalid("mobile") ? "red" : "black" }}>*</span>
            </label>
            <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="appointmentform-label">
              Email Address<span style={{ color: isFieldInvalid("email") ? "red" : "black" }}>*</span>
            </label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="appointmentform-label">
             Select a preferred date for your appointment <span style={{ color: isFieldInvalid("preferredDate") ? "red" : "black" }}>*</span>
            </label>
            <input type="date" className="form-control" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
          </div>

          {/* Time */}
          <div className="mb-3">
            <label className="appointmentform-label">
            Select preferred time for your appointment <span style={{ color: isFieldInvalid("preferredTime") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="preferredTime" value={formData.preferredTime} onChange={handleChange}>
              <option value="">Select time</option>
              {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* How heard */}
          <div className="mb-3">
            <label className="appointmentform-label">
              How did you hear about us? <span style={{ color: isFieldInvalid("howHeard") ? "red" : "black" }}>*</span>
            </label>
            <select className="form-control" name="howHeard" value={formData.howHeard} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Google">Google</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Friend">Friend</option>
              <option value="Doctor">Doctor</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <div className="text-center">
      <button type="submit" className="btn btn-primary btn-blog btn-large mt-3">
  Submit
</button>



          </div>

          {message && <p className="mt-3 text-center">{message}</p>}
        </form>
        {/* FORM END */}
     
      </div>
         <div className="col-lg-12 col-md-12">
              <div className="left mt-3">
                <p className="text-left">*Disclaimer: Your appointment will only be confirmed after our call center contacts you. </p>
              </div>
            </div>
    </div>
  );
};

export default AppointmentSection;
