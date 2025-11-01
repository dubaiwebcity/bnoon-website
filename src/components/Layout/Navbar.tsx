"use client";

import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { menus } from "../../components/Layout/Menus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
  if (typeof window !== "undefined") {
    // @ts-expect-error

    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }

  const element = document.getElementById("navbar");
  const onScroll = () => {
    if (!element) return;
    if (window.scrollY > 170) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    element?.classList.remove("sticky");
  };
}, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (href: string) => pathname === href;
  const isArabic = pathname.startsWith("/ar");

  return (
    <>
      <nav className="navbar navbar-expand-xl" id="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left side: Logo + Mobile Language + Menu icon */}
          <div className="d-flex align-items-center">
            <Link href="/en" className="navbar-brand d-flex align-items-center">
              <img
                src="/images/bnoon-logo.avif"
                alt="Doutor"
                width={183}
                height={75}
              />
            </Link>

            {/* 🌐 Mobile Language Button */}
            <div className="d-md-none ms-3">
              {isArabic ? (
                <Link
                  href={pathname.replace(/^\/ar/, "/en")}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: "0.9rem", padding: "4px 10px" }}
                >
                  EN
                </Link>
              ) : (
                <Link
                  href={pathname.replace(/^\/en/, "/ar")}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: "0.9rem", padding: "4px 10px" }}
                >
                  العربية
                </Link>
              )}
            </div>

            {/* ☰ Mobile Menu Icon */}
            <button
              className="btn d-md-none ms-2"
              type="button"
              onClick={handleShow}
              aria-label="Toggle navigation"
              style={{
                background: "transparent",
                border: "none",
                padding: "4px 8px",
              }}
            >
              <i
                className="bi bi-list"
                style={{ fontSize: "2rem", color: "#ffffffff" }}
              ></i>
            </button>
          </div>

          {/* Right side (desktop only) */}
          <div className="d-none d-md-flex flex-column align-items-end">
            <div className="mb-3 d-flex justify-content-end gap-4 align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle btn-dropdown d-flex align-items-center gap-2"
                  type="button"
                  id="extraDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaPhone style={{ color: "white", transform: "scaleX(-1)" }} />
                  Riyadh: +966 11 444 8080
                </button>
                <ul className="dropdown-menu" aria-labelledby="extraDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://api.whatsapp.com/send?phone=966114448080&text=Hello"
                    >
                      Riyadh: +966 11 444 8080
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="https://api.whatsapp.com/send?phone=966126800800&text=Hello"
                    >
                      Jeddah: +966 12 680 0800
                    </Link>
                  </li>
                </ul>
              </div>

              {isArabic ? (
                <Link
                  href={pathname.replace(/^\/ar/, "/en")}
                  className="btn btn-outline-secondary btn-language"
                >
                  EN
                </Link>
              ) : (
                <Link
                  href={pathname.replace(/^\/en/, "/ar")}
                  className="btn btn-outline-secondary btn-language"
                >
                  العربية
                </Link>
              )}

              <Link
                href="/en/request-an-appoinment"
                className="btn btn-success btn-appointment"
              >
                Book an Appointment
              </Link>
            </div>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
              {menus
  .filter((item) => item.id !== "arabic") // ❌ hide Arabic on desktop
  .map((item) => (
    <li key={item.id} className="nav-item">
      <Link
        href={item.href || "#"}
        className={`nav-link ${isActive(item.href || "") ? "active" : ""}`}
      >
        {item.title}
      </Link>
    </li>
  ))}

              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 🌐 Mobile Full-Screen Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header
          closeButton
          className="border-0 "
        >
          <Offcanvas.Title>
            <img
              src="/images/logo-mob.avif"
              alt="Doutor"
              width={150}
              height={55}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

       <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center text-center">
  <ul className="list-unstyled w-100 px-3">
{menus.map((item, index) => {
  // Handle Arabic button click separately
  if (item.id === "arabic") {
    return (
      <li key={item.id} className="my-3">
        {isArabic ? (
          <Link
            href={pathname.replace(/^\/ar/, "/en")}
            className="fs-5 text-decoration-none d-block"
            style={{ color: "#004E78" }}
           onClick={() => {
  handleClose();
  setTimeout(() => {
    window.location.href = pathname.replace(/^\/(en|ar)/, isArabic ? "/en" : "/ar");
  }, 200);
}}

          >
            EN
          </Link>
        ) : (
          <Link
            href={pathname.replace(/^\/en/, "/ar")}
            className="fs-5 text-decoration-none d-block"
            style={{ color: "#004E78" }}
            onClick={() => {
  handleClose();
  setTimeout(() => {
    window.location.href = pathname.replace(/^\/(en|ar)/, isArabic ? "/en" : "/ar");
  }, 200);
}}

          >
            العربية
          </Link>
        )}
      </li>
    );
  }

  // Normal menu items
  return (
    <li key={item.id} className="my-3">
   <Link
  href={item.href || "#"}
  className="fs-5 text-decoration-none d-block"
  style={{ color: "#004E78" }}
  onClick={() => {
    handleClose();
    setTimeout(() => {
      window.location.href = item.href; // ensures navigation even after offcanvas closes
    }, 200);
  }}
>
  {item.title}
</Link>

      {index !== menus.length - 1 && (
        <hr
          style={{
            border: "1px solid ##00000091",
            margin: "12px 0",
          }}
        />
      )}
    </li>
  );
})}

  </ul>

  {/* 🌐 Language Switcher below all menu items */}
  <div className="mt-4 d-flex flex-column align-items-center">
    {isArabic ? (
      <Link
        href={pathname.replace(/^\/ar/, "/en")}
        className="btn btn-outline-secondary btn-language px-4"
      >
        EN
      </Link>
    ) : (
      <Link
        href={pathname.replace(/^\/en/, "/ar")}
        className="btn btn-outline-secondary btn-language px-4"
      >
        العربية
      </Link>
    )}
  </div>
</Offcanvas.Body>

      </Offcanvas>

      {/* 🌐 Custom Styles */}
      <style jsx global>{`
        .mobile-offcanvas {
          width: 100vw !important;
          height: 100vh !important;
          background: #fff;
          animation: slideUp 0.5s ease forwards;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .offcanvas-backdrop.show {
          opacity: 0.8;
        }

        .offcanvas-header .btn-close {
          position: absolute;
          right: 20px;
          top: 20px;
        }
      `}</style>
    </>
  );
}

export default Navbar;
