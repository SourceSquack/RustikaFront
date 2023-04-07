import React from "react";

const MapLocation = () => {
  return (
    <div className="flex items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.558405500216!2d-75.66219637081717!3d4.672526683934854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388970a9e30275%3A0x9ee9127e2b9adef7!2sRustika%20parrilla%20Cafe%20Bar!5e0!3m2!1ses-419!2sco!4v1680574893671!5m2!1ses-419!2sco"
        className="w-[300px] h-[300px] rounded-lg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
