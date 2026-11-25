import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_NAP } from "@/data/clinicData";
import { Phone, MapPin, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B192C] text-[#EFE9DC] pt-16 pb-12 border-t border-[#1E3E62]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E3E62]/80">
          {/* Column 1: Brand & Clinical Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white ring-1 ring-[#C5A880]/50 flex items-center justify-center overflow-hidden shadow-xs shrink-0">
                <Image
                  src="/images/aura-emblem.png"
                  alt="Aura Dental Clinic emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight block">
                  {CLINIC_NAP.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C5A880] block -mt-1">
                  Registered Dental Practice
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Quietly authoritative, minimally invasive dental healthcare in central Bengaluru. Combining international clinical guidelines with a soothing, anxiety-free atmosphere.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#C5A880]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>DCI & KSDC Verified Specialists</span>
            </div>
          </div>

          {/* Column 2: Quick Links & Core Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services/general" className="hover:text-white transition-colors">
                  Comprehensive Examination & Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic" className="hover:text-white transition-colors">
                  Porcelain Veneers & Smile Makeovers
                </Link>
              </li>
              <li>
                <Link href="/services/general" className="hover:text-white transition-colors">
                  3D Guided Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/general" className="hover:text-white transition-colors">
                  Invisalign® Clear Aligners
                </Link>
              </li>
              <li>
                <Link href="/services/emergency" className="text-rose-300 hover:text-rose-100 font-semibold transition-colors">
                  Same-Day Emergency Pain Relief
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact (NAP Enforced) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
              Contact Details (NAP)
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{CLINIC_NAP.formattedAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={CLINIC_NAP.phoneHref} className="hover:text-white transition-colors font-medium">
                  {CLINIC_NAP.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href={CLINIC_NAP.emergencyPhoneHref} className="hover:text-white transition-colors">
                  Emergency: {CLINIC_NAP.emergencyPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${CLINIC_NAP.email}`} className="hover:text-white transition-colors">
                  {CLINIC_NAP.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours & Booking */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
              Clinical Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              {CLINIC_NAP.displayHours.map((h, i) => (
                <div key={i} className="flex flex-col border-b border-[#1E3E62]/40 pb-1.5 last:border-none">
                  <span className="font-semibold text-white">{h.days}</span>
                  <span className="text-[#C5A880]">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {CLINIC_NAP.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">Dentist Faculty</Link>
            <Link href="/services/general" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Book Online</Link>
            <Link href="/emergency" className="hover:text-rose-300 text-rose-400 transition-colors">24/7 Triage</Link>
          </div>
        </div>

        {/* Portfolio & Showcase Disclaimer + Arivra Design Labs Attribution */}
        <div className="mt-8 pt-6 border-t border-[#1E3E62]/60 text-center space-y-3">
          <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-[#C5A880]">Notice & Disclaimer:</strong> This website is an interactive concept application engineered solely for portfolio demonstration and showcase purposes. Aura Dental Clinic is a fictional entity. All contact details, telephone numbers, clinical registration IDs, and doctor profiles are simulated dummy data. Please do not contact these numbers for actual healthcare needs or medical emergencies.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3E62]/30 border border-[#C5A880]/25 text-xs text-[#EFE9DC]">
            <span className="font-semibold tracking-wider uppercase text-[10px] text-[#C5A880]">
              ARIVRA Demo
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              A product by{" "}
              <a
                href="https://arivra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#C5A880] underline underline-offset-4 transition-colors"
              >
                Arivra Design Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
