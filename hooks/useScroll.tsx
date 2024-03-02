"use client";
import { useEffect, useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    // Add the event listener
    document.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { scroll };
}
