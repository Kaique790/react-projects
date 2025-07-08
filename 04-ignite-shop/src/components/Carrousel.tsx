"use client";

import { useKeenSlider } from "keen-slider/react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.35,
      spacing: 48,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
}
