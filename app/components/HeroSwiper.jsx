"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";

export default function HeroSwiper() {
  const slides = [
    {
      image: "/industrial_open-pit_mine_at_sunset.png",
      tag: "ISO 9001:2015 Certified",
      title1: "Trusted Mineral",
      title2: "Mining & Export",
      desc: "Amigos Minerals is a premier supplier of high-grade industrial raw materials. We ensure sustainable extraction and reliable global supply chains.",
    },
    {
      image: "/assests/hero-banner-2.jpeg",
      tag: "Global Supply Network",
      title1: "Reliable",
      title2: "Mineral Logistics",
      desc: "From mine to market, we deliver consistent quality and dependable logistics support for essential industries worldwide.",
    },
    {
      image: "/assests/hero-banner-3.jpeg",
      tag: "Trusted Partnerships",
      title1: "Quality",
      title2: "Assured Supply",
      desc: "We partner with industries across the globe, delivering consistent mineral quality with strict testing, transparency, and long-term reliability.",
    },
    {
      image: "/assests/aemp-product-hero-banner-2021@2x.jpg",
      tag: "Sustainable Operations",
      title1: "Future-Ready",
      title2: "Mining Practices",
      desc: "Our operations are built around safety, sustainability, and innovation—supporting low-carbon mobility and responsible mineral processing.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={100}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen min-h-[600px] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title2}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="container relative z-10 px-4 md:px-6">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="max-w-3xl space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-[2px] w-12 bg-[#E0860A]" />
                        <span className="text-[#E0860A] font-bold uppercase tracking-widest text-sm">
                          {item.tag}
                        </span>
                      </div>

                      <h1 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight">
                        {item.title1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0860A] to-amber-200">
                          {item.title2}
                        </span>
                      </h1>

                      <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #e0860a;
        }
      `}</style>
    </section>
  );
}
