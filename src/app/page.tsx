import React from "react";
import { Hero } from "@/components/home/Hero";
import { CoreServices } from "@/components/home/CoreServices";
import { TeamPreview } from "@/components/home/TeamPreview";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { LocationHours } from "@/components/home/LocationHours";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with inline booking form, phone number, rating & accepting new patients */}
      <Hero />

      {/* 2. Core Services: checkup, cleaning, implants, emergency */}
      <CoreServices />

      {/* 3. Team leadership with verified qualifications, graduation years and associations */}
      <TeamPreview />

      {/* 4. Reviews section: 3 recent reviews with dates visible */}
      <ReviewsSection />

      {/* 5. Location + hours table + embedded map */}
      <LocationHours />
    </>
  );
}
