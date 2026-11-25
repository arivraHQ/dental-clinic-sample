import React from "react";
import Link from "next/link";
import { CLINIC_NAP, CLINIC_SERVICES } from "@/data/clinicData";
import { BookingForm } from "@/components/booking/BookingForm";
import { Phone, CheckCircle2, Sparkles, Clock } from "lucide-react";

export const metadata = {
  title: "Porcelain Veneers & Cosmetic Dentistry | Aura Dental Bengaluru",
  description: "Natural smile makeovers using custom handcrafted porcelain veneers and Philips Zoom! laser whitening in Richmond Road, Bengaluru.",
};

export default function CosmeticServicePage() {
  const service = CLINIC_SERVICES.find((s) => s.slug === "cosmetic") || CLINIC_SERVICES[1];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-[#5B6B82] mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0B192C]">Home</Link>
          <span>/</span>
          <span className="text-[#0B192C] font-medium">Services</span>
          <span>/</span>
          <span className="text-[#C5A880] font-semibold">Cosmetic Dentistry</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Service Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE9DC] text-[#0B192C] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                Aesthetic Harmonization
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B192C] tracking-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-[#5B6B82] leading-relaxed">
                {service.tagline}
              </p>
            </div>

            {/* Fee & Duration Bar */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82] block">
                  Price Estimate
                </span>
                <span className="text-xl font-bold text-[#0B192C]">
                  {service.priceRange}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82] block">
                  Visits Required
                </span>
                <span className="text-sm font-semibold text-[#0B192C] flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  {service.duration}
                </span>
              </div>
              <a
                href={CLINIC_NAP.phoneHref}
                className="bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call {CLINIC_NAP.phone}</span>
              </a>
            </div>

            {/* 1. What It Is */}
            <div className="space-y-3 bg-white p-7 rounded-2xl border border-[#E8E2D5]">
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                1. What It Is
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                {service.description} We reject the artificial &quot;piano-key white&quot; smile trope. Every porcelain veneer is individually layered by master ceramic technicians to replicate the micro-texture, natural translucency, and warm luminescence of biological enamel.
              </p>
            </div>

            {/* 2. Who It's For */}
            <div className="space-y-3 bg-white p-7 rounded-2xl border border-[#E8E2D5]">
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                2. Who It’s For
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                {service.whoItsFor}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#192231]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Chipped or fractured incisal edges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Diastema (uneven midline gaps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Fluorosis & tetracycline staining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Worn teeth from bruxism/grinding</span>
                </div>
              </div>
            </div>

            {/* 3. Clinical Benefits */}
            <div className="space-y-3 bg-white p-7 rounded-2xl border border-[#E8E2D5]">
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                3. The Digital Aesthetic Workflow
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#192231]">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Dedicated Booking Form */}
          <div className="lg:col-span-5 space-y-6">
            <BookingForm defaultService="Cosmetic Veneers & Bonding" />

            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                Digital Guarantee
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">
                Try On Your Smile Before Treatment
              </h3>
              <p className="text-xs text-[#5B6B82] leading-relaxed">
                We generate a high-resolution 3D simulation of your expected outcome before any preparation begins. You review and approve your mock-up in person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
