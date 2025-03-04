import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap } from "gsap";

const NamePage = () => {
  const { name } = useParams();
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const safeName = name ? name.toLowerCase() : "unknown";

  const content = {
    akshay: {
      message: `Dear Akshay,\n\nYour energy and enthusiasm light up every moment. 
      From the smallest conversations to the biggest challenges, you've always been there. 
      Your kindness, humor, and unwavering support make life better. 
      I’m grateful for every memory we've shared and look forward to many more.\n\nWith appreciation,\n[Your Name]`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-gray-900",
    },
    shivangi: {
      message: `Dear Shivangi,\n\nYou are a source of inspiration and kindness. 
      Every moment with you is special, and your presence makes everything brighter. 
      Your wisdom and warmth have touched many lives, including mine.\n\nWith love,\n[Your Name]`,
      images: ["/images/shivangi1.jpg", "/images/shivangi2.jpg"],
      bg: "bg-red-900",
    },
    sneha: {
      message: `Dear Sneha,\n\nYour presence brings warmth and happiness. 
      From the way you care to the way you light up a room, you make the world better. 
      I'm lucky to know you and cherish every moment we’ve shared.\n\nWarm regards,\n[Your Name]`,
      images: ["/images/sneha1.jpg", "/images/sneha2.jpg"],
      bg: "bg-blue-900",
    },
    abhishek: {
      message: `Dear Abhishek Bhaiya,\n\nYour presence brings warmth and happiness. 
      From the way you care to the way you light up a room, you make the world better. 
      I'm lucky to know you and cherish every moment we’ve shared.\n\nWarm regards,\n[Your Name]`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-orange-900",
    },
    sajitha: {
      message: `Dear Sajitha Di,\n\nYour presence brings warmth and happiness. 
      From the way you care to the way you light up a room, you make the world better. 
      I'm lucky to know you and cherish every moment we’ve shared.\n\nWarm regards,\n[Your Name]`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-green-900",
    },
    pallavi: {
      message: `Dear Pallavi Di,\n\nYour presence brings warmth and happiness. 
      From the way you care to the way you light up a room, you make the world better. 
      I'm lucky to know you and cherish every moment we’ve shared.\n\nWarm regards,\n[Your Name]`,
      images: ["/images/pallavi1.jpg", "/images/pallavi2.jpg"],
      bg: "bg-purple-900",
    },
  };

  const personContent = content[safeName] || {
    message: `Dear Friend,\n\nYou are truly special, and I cherish every moment we’ve spent together. 
    Life is brighter because of you, and I look forward to creating more memories with you.\n\nSincerely,\n[Your Name]`,
    images: ["/images/default1.jpg", "/images/default2.jpg"],
    bg: "bg-purple-900",
  };

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, delay: 0.8, duration: 1.2, ease: "power2.out" }
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 1.2, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${personContent.bg} px-4 py-12`}>
      {/* Letter Background */}
      <div
        ref={containerRef}
        className="relative max-w-3xl w-full text-center px-8 py-12 md:px-16 md:py-20 shadow-2xl rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url('/images/letter.png')`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 ref={nameRef} className="text-5xl md:text-6xl font-bold capitalize tracking-wide text-black drop-shadow-md">
          {safeName}
        </h1>
        <p
          ref={messageRef}
          className="mt-6 text-lg md:text-2xl leading-relaxed max-w-[75%] mx-auto whitespace-pre-line font-serif text-black"
          style={{ fontFamily: "cursive" }}
        >
          {personContent.message}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {personContent.images.map((img, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 rounded-3xl"
              onError={(e) => {
                e.target.src = "/images/default1.jpg";
              }}
            />
          </div>
        ))}
      </div>

      <p className="mt-6 text-base opacity-80 text-center">This page is dedicated to you. ❤️</p>
    </div>
  );
};

export default NamePage;
