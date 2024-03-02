import React from "react";

export default function LocationMap() {
  return (
    <div className="col-12">
      <iframe
        className="cus-rounded-1 cus_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4345470451767!2d78.39393767506014!3d17.438903483457157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914245555555%3A0xed69ee139fe15163!2sCRR%20Corporate%20Services!5e0!3m2!1sen!2sin!4v1709401556612!5m2!1sen!2sin"
        loading="lazy"
      ></iframe>
     
    </div>
  );
}
