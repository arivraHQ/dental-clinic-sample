"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_NAP } from "@/data/clinicData";
import { Phone, Clock, MapPin, Menu, X, ShieldAlert, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8E2D5] bg-[#FBF9F5]/95 backdrop-blur-md transition-all">
      {/* Top Clinical & Emergency Announcement Bar */}
      <div className="bg-[#0B192C] text-[#EFE9DC] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: By Appointment</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Richmond Road, Ashok Nagar, Bengaluru</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#C5A880] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              Accepting New Patients
            </span>
            <a
              href={CLINIC_NAP.emergencyPhoneHref}
              className="inline-flex items-center gap-1 font-semibold text-rose-300 hover:text-white transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>Emergency 24/7: {CLINIC_NAP.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-white border border-[#C5A880]/40 flex items-center justify-center overflow-hidden shadow-xs shrink-0">
            <Image
              src="/images/aura-emblem.png"
              alt="Aura Dental Clinic emblem"
              width={44}
              height={44}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-serif text-xl font-bold text-[#0B192C] tracking-tight group-hover:text-[#1E3E62] transition-colors">
              Aura Dental
            </div>
            <div className="text-[10px] tracking-widest uppercase font-semibold text-[#5B6B82] -mt-0.5">
              Clinic & Implant Center
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#192231]">
          <Link href="/" className="hover:text-[#0B192C] hover:underline underline-offset-4 transition-colors">
            Home
          </Link>
          <div className="relative group py-2">
            <span className="cursor-pointer hover:text-[#0B192C] transition-colors flex items-center gap-1">
              Services
            </span>
            <div className="absolute top-full left-0 w-64 p-2 bg-white rounded-xl shadow-xl border border-[#E8E2D5] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
              <Link href="/services/general" className="block px-3 py-2 text-xs font-semibold text-[#192231] hover:bg-[#F3EFE6] rounded-lg">
                Checkup & Cleaning
              </Link>
              <Link href="/services/cosmetic" className="block px-3 py-2 text-xs font-semibold text-[#192231] hover:bg-[#F3EFE6] rounded-lg">
                Cosmetic & Veneers
              </Link>
              <Link href="/services/emergency" className="block px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-lg">
                Emergency Dental Care
              </Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-[#0B192C] hover:underline underline-offset-4 transition-colors">
            About Our Team
          </Link>
          <Link href="/contact" className="hover:text-[#0B192C] hover:underline underline-offset-4 transition-colors">
            Contact & Location
          </Link>
          <Link href="/emergency" className="text-rose-700 font-semibold hover:text-rose-900 transition-colors">
            Emergency
          </Link>
        </nav>

        {/* CTA & Tap to Call */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CLINIC_NAP.phoneHref}
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#0B192C] hover:text-[#1E3E62] transition-colors"
            aria-label={`Call ${CLINIC_NAP.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{CLINIC_NAP.phone}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3 h-3 text-[#C5A880]" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#0B192C] rounded-lg"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E2D5] px-6 py-5 flex flex-col gap-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-sm font-semibold text-[#192231]"
          >
            Home
          </Link>
          <Link
            href="/services/general"
            onClick={() => setMobileOpen(false)}
            className="py-1 text-sm font-medium text-[#5B6B82]"
          >
            General Care & Cleaning
          </Link>
          <Link
            href="/services/cosmetic"
            onClick={() => setMobileOpen(false)}
            className="py-1 text-sm font-medium text-[#5B6B82]"
          >
            Cosmetic & Veneers
          </Link>
          <Link
            href="/services/emergency"
            onClick={() => setMobileOpen(false)}
            className="py-1 text-sm font-medium text-rose-700"
          >
            Emergency Treatment
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-sm font-semibold text-[#192231]"
          >
            About & Faculty Credentials
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-sm font-semibold text-[#192231]"
          >
            Contact & Map
          </Link>
          <Link
            href="/emergency"
            onClick={() => setMobileOpen(false)}
            className="py-2 text-sm font-bold text-rose-700"
          >
            Emergency 24/7 Hotline
          </Link>

          <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2">
            <a
              href={CLINIC_NAP.phoneHref}
              className="w-full text-center py-2.5 rounded-lg border border-[#0B192C] text-[#0B192C] font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Tap to Call: {CLINIC_NAP.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#0B192C] text-white font-semibold text-xs"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
