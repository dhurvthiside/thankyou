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
      message: `Akshay Bhaiya,\n\nRumbling! Rumbling! It's coming!😂 Out of everyone I never expected to meet Levi Ackerman on this trip!
      I never imagined that main kisi se 2 hour Attack on Titan pe itna deep discussion karunga, it was truly once in a lifetime wala moment.\n
      I can't wait to see Beast Titan vs Levi dubbed by you! All the Best for Season 3 and Season 4. Also Gintama aaj hi download karta hu dekhne ke liye.\n
      Thank you for making this trip so memorable.
      \nWith appreciation,\nDhruv`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-gray-900",
    },
    shivangi: {
      message: `Hello Shivangi Di,\n\nDi, ek baar check karlo phone aur sab haina aapke paas😂\n I really wish that you pursue your dream
      of becoming a makeup artist and reach great heights. Thank you for making this trip so memorable and I can't wait to go on more trips with 
      you and Sneha Di\n\nWith regards,\nDhruv`,
      images: ["/images/shivangi1.jpg", "/images/shivangi2.jpg"],
      bg: "bg-red-900",
    },
    sneha: {
      message: `Helo Sneha Di,\n\nDi, i made a prediction, aapki Kundli ke anusaar aapko Ooty main 2 kaafi sahi londe milenge
       aur aapko unke saath puri trip main bohot maze aayenge. Batao sahi prediction haina?😂\nDi, Thank you so much for making this trip so memorable
       and mad respect for wearing heels on a hillstation🫡.\n Next time phir chalenge ek aur trip pe! \n\nWith admiration,\nDhruv`,
      images: ["/images/sneha1.jpg", "/images/sneha2.jpg"],
      bg: "bg-blue-900",
    },
    abhishek: {
      message: `Abhishek Bhaiya,\n\nBhaiya yaar vo Deo reh gaya Ooty Zostel main le aao please!😂(JK)\n
      Apan ne toh lekin bhaiya jis level pe relate maara hain, koi toh kahani hain jo aap ke paas hain batane ke liye, 
      par vo kahani next time ke liye. Iss time ke liye, I am so thankful to have met such an amazing person like you. Thank you for making this trip so memorable.
      \nBanglore aata hu kabhi aapse aur Pallu Di se milne!
      \nWith Hopes to meet again soon!,\nDhruv`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-orange-900",
    },
    sajitha: {
      message: `Dear Sajitha Di,\n\nDi, Tell me honestly did you leave the dorm because of Aditya and my nuisance?😂\n
      Just kidding, Thank you so much for all the conversations and making this trip such a blast. Whenever I will come to Banglore I will message you.\n
      We will meet up for more interesting conversations and good food!\n\nWarm regards,\nDhruv`,
      images: ["/images/abhishek1.jpg", "/images/abhishek2.jpg"],
      bg: "bg-green-900",
    },
    pallavi: {
      message: `Dear Pallu Di,\n\nAur Homie kaise ho aap, kasi lag rhi hain manager ki shakal aur 10 baje ki meetings?😂\n
      Ye gift meri tarf se aapke liye taaki jab bhi Ooty ki yaad aaye toh ek click main aap Ooty, Manager se dur!\n
      Di mujhe pata hain aapko north shift hona hain par jaane se pehle, Chennai aao yaar jaldi ya main Bangalore aajau?\n\nWith more Bakchodi,\nDhruv`,
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

      <p className="mt-6 text-white opacity-80 text-center">This page is dedicated to you. ❤️</p>
    </div>
  );
};

export default NamePage;
