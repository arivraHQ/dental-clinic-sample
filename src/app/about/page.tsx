import React from "react";
import Link from "next/link";
import { CLINIC_DOCTORS } from "@/data/clinicData";
import { GraduationCap, Award, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Clinical Leadership & Team Credentials | Aura Dental Bengaluru",
  description: "Meet our DCI registered faculty at Aura Dental Clinic Bengaluru. Academic backgrounds, degrees, graduation years, and verified dental council registration numbers.",
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block">
            Clinical Governance & Faculty
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B192C] tracking-tight">
            Academic Excellence, Meticulous Craftsmanship
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            Our practice is led by senior specialist clinicians with over four decades of combined experience. Every degree, graduation year, and Dental Council registration is publicly stated in adherence to transparent healthcare governance.
          </p>
        </div>

        {/* Detailed Doctors List */}
        <div className="space-y-12">
          {CLINIC_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-[#E8E2D5] p-7 sm:p-10 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Doctor Photo */}
                <div className="lg:col-span-4">
                  <div className="h-80 rounded-2xl overflow-hidden bg-[#0B192C] relative border border-[#E8E2D5] shadow-xs">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${doc.photo})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880] block">
                        Verified Clinician
                      </span>
                      <strong className="font-serif text-lg font-bold block">{doc.name}</strong>
                    </div>
                  </div>
                </div>

                {/* Details & Credentials */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">
                      {doc.role}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C] mt-1">
                      {doc.name}
                    </h2>
                    <span className="text-sm font-semibold text-[#1E3E62] block mt-0.5">
                      {doc.specialty}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Complete Credential Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E8E2D5]">
                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#E8E2D5] space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0B192C]">
                        <GraduationCap className="w-4 h-4 text-[#C5A880]" />
                        <span>Degrees & Academic Year</span>
                      </div>
                      <span className="text-xs font-semibold text-[#192231] block">
                        {doc.degree}
                      </span>
                      <span className="text-[11px] text-[#5B6B82] block">
                        Graduated: <strong>Class of {doc.graduationYear}</strong>
                      </span>
                      <span className="text-[11px] text-[#5B6B82] block">
                        Alma Mater: {doc.institution}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#E8E2D5] space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0B192C]">
                        <Award className="w-4 h-4 text-[#C5A880]" />
                        <span>Registration & Governance</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#0B192C] block">
                        DCI Reg No: {doc.registrationNumber}
                      </span>
                      <span className="text-[11px] text-[#5B6B82] block">
                        Clinical Experience: <strong>{doc.experienceYears}+ Years</strong>
                      </span>
                      <span className="text-[11px] text-[#5B6B82] block">
                        State Council: Karnataka State Dental Council (KSDC)
                      </span>
                    </div>
                  </div>

                  {/* Associations */}
                  <div className="p-3 rounded-xl bg-[#F3EFE6] border border-[#E8E2D5] flex items-start gap-2.5 text-xs text-[#192231]">
                    <Building2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#0B192C]">Professional Associations & Fellowships</strong>
                      <span className="text-[#5B6B82]">{doc.association}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
                    >
                      <span>Request Consultation with {doc.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
