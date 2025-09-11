import React from "react";
import { motion } from "framer-motion";


function MotionHeader({ items = [], className = "" }) {
  const honey = {
    initial: { opacity: 0, y: 6 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };
  if (!items.length) return null;
  return (
    <motion.span {...honey} className={`inline-block ${className}`}>
      {items[0]}
    </motion.span>
  );
}


export default function HeroSection({
  image,
  title = "Windpipe 1.2 is live.",
  subItems = ["Live boldly!"],
  subtitle = "Smoother hits, sleek modern design.",
  ctaText = "ORDER NOW",
  onCtaClick = () => {},
  minHeight, 
}) {
  const bgUrl = image || "/hero.png";

  
  const heightCls = minHeight || "h-[100svh] md:h-[100dvh]";

  return (
    <section
      className={`relative w-full overflow-hidden ${heightCls}`}
      style={{ height: "100svh" }}
      aria-label="Hero"
    >
      
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 12%", 
        }}
        aria-hidden="true"
      />

      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-end">
        <div className="max-w-3xl pb-24 md:pb-28">
          <MotionHeader
            items={subItems}
            className="text-sm md:text-base font-medium tracking-wide text-white/80"
          />
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base md:text-lg text-white/85">
              {subtitle}
            </p>
          )}

          <div className="mt-6">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 rounded-full bg-white/95 hover:bg-white text-black px-6 py-3 font-semibold shadow-lg transition-colors"
            >
              {ctaText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
              <span className="sr-only">Go</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
