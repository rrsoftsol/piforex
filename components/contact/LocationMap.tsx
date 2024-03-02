import React from "react";

export default function LocationMap() {
  return (
    <div className="col-12">
      <iframe
        className="cus-rounded-1 cus_map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5156.793422135061!2d-105.02171047857397!3d39.77899593135569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1699354709950!5m2!1sen!2sbd"
        loading="lazy"
      ></iframe>
    </div>
  );
}
