"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/Images/duske-slika-jedan.jpg",
    "/Images/duske-slika-dva.jpg",
    "/Images/duske-slika-tri.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    }, 2000); // Change image every 2 seconds (2000 milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="h-[80vh] bg-white">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ maxHeight: "80vh" }}
          className={`w-full h-auto absolute transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          layout="responsive"
          width={500}
          height={500}
        />
      ))}
    </div>
  );
};

export default Hero;
