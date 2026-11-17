"use client";

import React, { useState } from "react";
import { CLINIC_NAP } from "@/data/clinicData";
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface BookingFormProps {
  defaultService?: string;
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  defaultService = "General Checkup & Cleaning",
  className = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Morning (9:30 AM – 1:00 PM)");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationId, setConfirmationId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = "AURA-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmationId(id);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl border border-[#E8E2D5] p-6 sm:p-8 text-center space-y-5 shadow-lg ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#F3EFE6] text-[#0B192C] flex items-center justify-center mx-auto ring-4 ring-[#E8E2D5]">
          <CheckCircle2 className="w-7 h-7 text-[#0B192C]" />
        </div>
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880] block">
            Appointment Request Confirmed
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#0B192C]">
            Thank You, {name || "Patient"}
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B82] max-w-sm mx-auto">
            Our patient coordinator will contact you via phone at <strong>{phone}</strong> to confirm your exact appointment slot.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E2D5] text-left text-xs space-y-2">
          <div className="flex justify-between border-b border-[#E8E2D5] pb-1.5">
            <span className="text-[#5B6B82]">Reference ID</span>
            <span className="font-mono font-bold text-[#0B192C]">{confirmationId}</span>
          </div>
          <div className="flex justify-between border-b border-[#E8E2D5] pb-1.5">
            <span className="text-[#5B6B82]">Service</span>
            <span className="font-semibold text-[#0B192C]">{service}</span>
          </div>
          <div className="flex justify-between border-b border-[#E8E2D5] pb-1.5">
            <span className="text-[#5B6B82]">Requested Time</span>
            <span className="font-semibold text-[#0B192C]">{preferredDate || "Earliest Available"} • {preferredTime}</span>
          </div>
          <div className="flex justify-between pt-0.5 text-[#5B6B82]">
            <span>Clinic Location</span>
            <span className="text-[#0B192C] font-medium text-right">Richmond Road, Bengaluru</span>
          </div>
        </div>

        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-semibold text-[#0B192C] hover:underline transition-all"
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl border border-[#E8E2D5] p-6 sm:p-8 shadow-xl ${className}`}>
      <div className="border-b border-[#E8E2D5] pb-4 mb-5">
        <div className="inline-flex items-center gap-1.5 text-[#C5A880] text-xs font-bold uppercase tracking-wider mb-1">
          <Calendar className="w-3.5 h-3.5" />
          <span>Priority Consultation</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0B192C]">
          Request an Appointment
        </h3>
        <p className="text-xs text-[#5B6B82] mt-0.5">
          Reserved promptly. No upfront payment required today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-[#192231] uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Priya Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2DBD0] bg-[#FBF9F5] text-[#192231] focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-[#192231] uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98000 00000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2DBD0] bg-[#FBF9F5] text-[#192231] focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-xs font-semibold text-[#192231] uppercase tracking-wider mb-1">
            Treatment Category
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#E2DBD0] bg-[#FBF9F5] text-[#192231] focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
          >
            <option value="General Checkup & Cleaning">General Checkup & Ultrasonic Cleaning</option>
            <option value="Cosmetic Veneers & Bonding">Porcelain Cosmetic Veneers & Bonding</option>
            <option value="Philips Zoom Laser Whitening">Philips Zoom! Laser Whitening</option>
            <option value="3D Dental Implants">3D Guided Dental Implants</option>
            <option value="Invisalign Clear Aligners">Invisalign® Clear Aligners</option>
            <option value="Emergency Toothache Relief">Emergency Same-Day Toothache Relief</option>
          </select>
        </div>

        {/* Preferred Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#192231] uppercase tracking-wider mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-[#E2DBD0] bg-[#FBF9F5] text-[#192231] focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#192231] uppercase tracking-wider mb-1">
              Preferred Time
            </label>
            <select
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-lg border border-[#E2DBD0] bg-[#FBF9F5] text-[#192231] focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
            >
              <option value="Morning (9:30 AM – 1:00 PM)">Morning (9:30 AM – 1:00 PM)</option>
              <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
              <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 rounded-xl bg-[#0B192C] hover:bg-[#1E3E62] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Confirm Request Online</span>
          <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="pt-2 border-t border-[#E8E2D5] flex items-center justify-between text-[11px] text-[#5B6B82]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            Strict Data Privacy
          </span>
          <a href={CLINIC_NAP.phoneHref} className="text-[#0B192C] font-semibold hover:underline">
            Or Call {CLINIC_NAP.phone}
          </a>
        </div>
      </form>
    </div>
  );
};
