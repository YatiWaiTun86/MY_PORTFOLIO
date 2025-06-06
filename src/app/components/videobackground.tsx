"use client";

import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [currentSrc, setCurrentSrc] = useState("/img/243340.mp4");
  const [key, setKey] = useState(0); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSrc((prev) =>
        prev === "/img/243340.mp4"
          ? "/img/243340reverse.mp4"
          : "/img/243340.mp4"
      );
      setKey((prev) => prev + 1);
    }, 10010);

    return () => clearTimeout(timeout);
  }, [currentSrc]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video
        key={key}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover brightness-50"
      >
        <source src={currentSrc} type="video/mp4" />
      </video>
    </div>
  );
}
