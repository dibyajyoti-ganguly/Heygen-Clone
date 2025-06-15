import React from "react";

// Static imports (Vite optimizes these automatically)
import Docusign from "../assets/logos/Docusign.png";
import Harvard from "../assets/logos/Harvard.png";
import Hubspot from "../assets/logos/Hubspot.png";
import Klarna from "../assets/logos/Klarna.png";
import Komatsu from "../assets/logos/Komatsu.avif";
import Ogilvy from "../assets/logos/Ogilvy.png";
import OpenAI from "../assets/logos/OpenAI.svg";
import Pepsico from "../assets/logos/Pepsico.png";
import Samsung from "../assets/logos/Samsung.avif";
import Shopify from "../assets/logos/Shopify.avif";
import Univision from "../assets/logos/Univision.svg";

// Array of logo objects
const logos = [
  { src: Docusign, alt: "Docusign" },
  { src: Harvard, alt: "Harvard" },
  { src: Hubspot, alt: "Hubspot" },
  { src: Klarna, alt: "Klarna" },
  { src: Komatsu, alt: "Komatsu" },
  { src: Ogilvy, alt: "Ogilvy" },
  { src: OpenAI, alt: "OpenAI" },
  { src: Pepsico, alt: "Pepsico" },
  { src: Samsung, alt: "Samsung" },
  { src: Shopify, alt: "Shopify" },
  { src: Univision, alt: "Univision" },
];

const LogoScroller = () => {
  return (
    <div className="absolute z-10 bottom-28 overflow-hidden w-full bg-white/40 py-16">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="whitespace-nowrap animate-[scroll_17s_linear_infinite] inline-block">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="inline-block h-8 mx-8 duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
