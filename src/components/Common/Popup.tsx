"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Popup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const handleContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const popupShown = sessionStorage.getItem("popupShown");
      if (!popupShown && pathname === "/en") {
        setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("popupShown", "true");
        }, 500);
      }
    }
  }, [pathname]);

  return (
    <>
      {isOpen && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#c3c1c199",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="popup-content"
            style={{
              backgroundImage: "url('/images/popup-image.avif')",
              borderRadius: "0%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "50px",
              maxWidth: "600px",
              width: "100%",
              position: "relative",
              color: "#fff",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#004e788c",
                zIndex: 1,
              }}
            ></div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  border: "none",
                  background: "transparent",
                  color: "#fff",
                  fontSize: "20px",
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                  lineHeight: "35px",
                  textAlign: "center",
                }}
              >
                ✖
              </button>
              <h2 className="popup-heading">
                Just Launched: Bnoon’s New Identity & Website for Next-Gen Fertility Care
              </h2>
              <p className="popup-text">
                We’ve just launched our new identity and upgraded our site to bring you a
                better, faster, and more user-friendly experience.
              </p>
              <p className="popup-text">
                <strong>Want to receive updates from us?</strong>
              </p>

              <form onSubmit={handleContact} className="w-full">
                <div className="flex w-full items-center max-w-xl">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="form-input flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2 rounded-lg submit-btn"
                  >
                    Submit
                  </button>
                </div>
                {message && <p className="text-success mt-2">{message}</p>}
              </form>

              <p className="popup-text">
                By submitting your email, you agree to our Privacy Policy. You can
                unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* ✅ Mobile responsive styles only */}
          <style jsx>{`
            @media (max-width: 768px) {
              .popup-content {
                max-width: 90% !important;
                padding: 15px !important;
                border-radius: 8px;
                background-position: center;
              }
              .popup-heading {
                font-size: 14px !important;
              }
              .popup-text {
                font-size: 0.9rem !important;
              }
              form {
                display: flex;
                flex-direction: column;
              }
              form input {
                width: 100% !important;
                margin-bottom: 10px;
              }
              .submit-btn {
                width: 100% !important;
              }
              button[style] {
                top: 5px !important;
                right: 5px !important;
                font-size: 16px !important;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 50%;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Popup;
