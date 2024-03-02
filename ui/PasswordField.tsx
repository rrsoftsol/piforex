"use client";
import { useState } from "react";
export default function PasswordField({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="single-input">
      <label className="mb-2 nw1-color">{label}</label>
      <div className="input-pass">
        <input
          type={show ? "text" : "password"}
          className="fs-six-up bg_transparent pe-13"
          name="cpassword"
          placeholder={label}
          required
        />
        {!show ? (
          <span
            className="ri-eye-off-line"
            onClick={() => setShow(true)}
          ></span>
        ) : (
          <span className="ri-eye-line" onClick={() => setShow(false)}></span>
        )}
      </div>
    </div>
  );
}
