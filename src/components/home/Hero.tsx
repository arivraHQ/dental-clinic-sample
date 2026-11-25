import React from "react";
import Link from "next/link";
import { CLINIC_NAP } from "@/data/clinicData";
import { BookingForm } from "@/components/booking/BookingForm";
import { Phone, Star, CheckCircle2, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F3EFE6]/60 via-[#FBF9F5] to-[#FBF9F5] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8E2D5]/70">
      {/* Subtle organic warm background glow */}
      <div className="absolute top-0 right-1/4 -mt-20 w-[500px] h-[500px] bg-[#EFE9DC]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DC] border border-[#E8E2D5] text-[#0B192C] text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#C5A880] animate-pulse" />
              <span>Accepting New Patients • Same-Day Pain Relief Guaranteed</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B192C] tracking-tight leading-[1.12]">
              Quiet, Gentle Dentistry for <br />
              <span className="italic font-normal text-[#1E3E62]">
                Confident, Lasting
              </span>{" "}
              Smiles
            </h1>

            {/* Subtitle with Specific Doctors & Treatments */}
            <p className="text-base sm:text-lg text-[#5B6B82] max-w-xl leading-relaxed">
              Led by prosthodontist <strong>Dr. Ananya Sharma</strong> and orthodontist <strong>Dr. Vikramaditya Rao</strong>, our Richmond Road practice delivers unhurried, pain-free dental checkups, 3D guided implants, and handcrafted porcelain veneers in a serene, anxiety-free setting.
            </p>

            {/* Google Rating Social Proof */}
            <div className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-[#E8E2D5] w-fit shadow-xs">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0B192C]">{CLINIC_NAP.googleRating} / 5.0 Rating</span>
                <span className="text-[#5B6B82] ml-1">({CLINIC_NAP.googleReviewCount.toLocaleString()} verified patient reviews)</span>
              </div>
            </div>

            {/* Core Reassurances Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#192231]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>The Wand® Computer-Assisted Painless Anesthesia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>100% Biocompatible Swiss Ceramic Veneers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Direct Dental Insurance Claims Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>AirFlow® No-Scrape Ultrasonic Polish</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={CLINIC_NAP.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#1E3E62] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Tap to Call: {CLINIC_NAP.phone}</span>
              </a>
              <Link
                href="/services/general"
                className="inline-flex items-center justify-center gap-1.5 border border-[#0B192C]/30 hover:border-[#0B192C] text-[#0B192C] bg-white/60 hover:bg-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Explore Core Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Booking Form */}
          <div className="lg:col-span-5">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};
