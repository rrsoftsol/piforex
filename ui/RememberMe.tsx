"use client";
import { useState } from "react";

export default function RememberMe({ text }: { text: string }) {
  const [check, setCheck] = useState(false);
  return (
    <div
      className="checkbox-single d-flex align-items-center nw1-color"
      onClick={() => setCheck((prev) => !prev)}
    >
      <span className="checkbox-area d-center">
        <input type="checkbox" />
        <span
          className={`checkmark d-center ${check ? "ri-check-line" : ""}`}
        ></span>
      </span>
      {text}
    </div>
  );
}
