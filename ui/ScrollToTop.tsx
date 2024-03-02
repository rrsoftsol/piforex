"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scrollToTop d-flex d-center rounded ${
        scrolled ? "active" : ""
      }`}
      aria-label="scroll Bar Button"
      onClick={backtoTop}
    >
      <i className="mat-icon fs-four nb4-color ri-arrow-up-line"></i>
    </button>
  );
}
