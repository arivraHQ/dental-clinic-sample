import React from "react";
import Link from "next/link";
import { CLINIC_NAP, CLINIC_SERVICES } from "@/data/clinicData";
import { BookingForm } from "@/components/booking/BookingForm";
import { Phone, ShieldAlert, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Emergency Dental Care | Same-Day Relief in Bengaluru",
  description: "Immediate emergency dentist in Richmond Road, Bengaluru. 24/7 helpline for acute toothache, knocked-out teeth, broken crowns, and facial swelling.",
};

export default function EmergencyServicePage() {
  const service = CLINIC_SERVICES.find((s) => s.slug === "emergency") || CLINIC_SERVICES[2];

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-[#5B6B82] mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0B192C]">Home</Link>
          <span>/</span>
          <Link href="/services/general" className="hover:text-[#0B192C]">Services</Link>
          <span>/</span>
          <span className="text-rose-700 font-semibold">Emergency Dental</span>
        </div>

        {/* Emergency Alert Banner */}
        <div className="mb-8 p-5 bg-rose-50 border border-rose-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <strong className="text-rose-950 font-bold text-sm block">In Severe Pain Right Now?</strong>
              <span className="text-xs text-rose-800">Do not wait. We hold dedicated reserve slots daily for immediate relief.</span>
            </div>
          </div>
          <a
            href={CLINIC_NAP.emergencyPhoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call 24/7 Hotline: {CLINIC_NAP.emergencyPhone}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Service Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                Same-Day Relief
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
                  Triage Consultation Fee
                </span>
                <span className="text-xl font-bold text-[#0B192C]">
                  {service.priceRange}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B82] block">
                  Availability
                </span>
                <span className="text-sm font-semibold text-rose-700 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Same-Day Guaranteed
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
                {service.description} We use computerized wand anesthesia, which allows localized numbness without the uncomfortable sting of a traditional needle syringe, meaning pain relief begins within minutes of your arrival.
              </p>
            </div>

            {/* 2. Who It's For */}
            <div className="space-y-3 bg-white p-7 rounded-2xl border border-[#E8E2D5]">
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                2. Symptoms We Treat Immediately
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#192231]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Severe, throbbing tooth pain</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Knocked-out (avulsed) permanent tooth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Broken, cracked, or fractured crown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>Facial or gum swelling (abscess)</span>
                </div>
              </div>
            </div>

            {/* 3. Out-of-Hours Protocol */}
            <div className="space-y-3 bg-white p-7 rounded-2xl border border-rose-200">
              <h2 className="font-serif text-2xl font-bold text-rose-950">
                3. Out-of-Hours Emergency Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Outside of our 9:00 AM – 8:00 PM operating hours, our dedicated emergency line remains staffed by a senior clinician. Call <a href={CLINIC_NAP.emergencyPhoneHref} className="text-rose-700 font-bold underline">{CLINIC_NAP.emergencyPhone}</a>. If you have an avulsed tooth, keep it immersed in cold milk or clean saline and reach our Richmond Road clinic immediately.
              </p>
            </div>
          </div>

          {/* Right Column: Dedicated Form & Direct Tap-To-Call */}
          <div className="lg:col-span-5 space-y-6">
            <BookingForm defaultService="Emergency Toothache Relief" />

            <div className="p-6 rounded-2xl bg-[#0B192C] text-[#EFE9DC] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block">
                Direct Emergency Dispatch
              </span>
              <h3 className="font-serif text-lg font-bold text-white">
                Don&apos;t Wait For It To Worsen
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Untreated dental infections can spread rapidly. Reach us directly:
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={CLINIC_NAP.emergencyPhoneHref}
                  className="w-full text-center py-3 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency: {CLINIC_NAP.emergencyPhone}</span>
                </a>
                <a
                  href={CLINIC_NAP.phoneHref}
                  className="w-full text-center py-2.5 bg-[#1E3E62] hover:bg-[#2C4E80] text-slate-200 font-semibold text-xs rounded-xl transition-colors"
                >
                  Main Reception: {CLINIC_NAP.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
