import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const imagesRef = useRef([]);

  const namesList = ["Akshay", "Shivangi", "Sneha", "Sajitha", "Pallavi", "Abhishek"];

  // Image positions - They fully cover the screen initially
  const images = [
    { src: "sneha1.jpg", top: "5%", left: "5%", rotate: -15 },
    { src: "sneha2.jpg", top: "10%", left: "55%", rotate: 12 },
    { src: "shivangi1.jpg", top: "50%", left: "10%", rotate: -10 },
    { src: "shivangi2.jpg", top: "55%", left: "70%", rotate: 15 },
    { src: "abhishek1.jpg", top: "30%", left: "35%", rotate: -5 },
    { src: "abhishek2.jpg", top: "75%", left: "45%", rotate: 8 },
    { src: "pallavi1.jpg", top: "20%", left: "85%", rotate: -12 },
    { src: "pallavi2.jpg", top: "70%", left: "15%", rotate: 10 },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Set images to fully cover the screen
    imagesRef.current.forEach((img, index) => {
      gsap.set(img, {
        top: images[index].top,
        left: images[index].left,
        rotate: images[index].rotate,
        scale: 2, // Make images bigger to cover screen
        opacity: 1,
      });
    });

    // Move images away together, revealing the homepage
    tl.to(imagesRef.current, {
      y: (index) => (index % 2 === 0 ? "-120vh" : "120vh"), // Some move up, some move down
      x: (index) => (index % 3 === 0 ? "-50vw" : "50vw"), // Some move left, some move right
      rotate: (index) => (index % 2 === 0 ? 45 : -45), // Rotate as they move
      scale: 0.5, // Shrink as they move away
      opacity: 0,
      duration: 5, // Slow & smooth animation
      ease: "power2.inOut",
    });

    // Reveal the homepage content smoothly
    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }, "-=1.5"); // Start this part while images are still moving out

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedName = name.trim().toLowerCase();

    if (namesList.map(n => n.toLowerCase()).includes(formattedName)) {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => navigate(`/${formattedName}`),
      });
    } else {
      gsap.to(inputRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      {/* Image Overlay */}
      {images.map((img, index) => (
        <img
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          src={`/images/${img.src}`}
          alt=""
          className="absolute w-60 h-60 object-cover rounded-xl shadow-lg"
        />
      ))}

      {/* Home Content */}
      <div
        ref={containerRef}
        className="opacity-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-wide">
          Thank you for <span className="text-red-500 italic">unforgettable</span> memories.
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full px-4 py-3 text-black rounded-lg text-lg outline-none border-none focus:ring-4 focus:ring-red-500 transition-shadow duration-300"
          />
          <button
            type="submit"
            className="mt-5 px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
