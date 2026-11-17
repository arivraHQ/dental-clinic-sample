import React from "react";
import { CLINIC_DOCTORS } from "@/data/clinicData";
import { ShieldCheck, Award, GraduationCap, Building2 } from "lucide-react";

export const CredentialsStrip: React.FC = () => {
  return (
    <section className="bg-[#0B192C] text-[#EFE9DC] py-10 border-y border-[#1E3E62]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-[#1E3E62]/60 pb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A880] block">
              Verified Medical Governance
            </span>
            <h2 className="font-serif text-2xl font-bold text-white tracking-tight mt-0.5">
              Accredited Specialist Credentials
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>Regulated by the Dental Council of India (DCI) & Karnataka State Dental Council (KSDC)</span>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#102238] rounded-xl p-5 border border-[#1E3E62] space-y-3"
            >
              <div>
                <span className="text-white font-serif font-bold text-base block">
                  {doc.name}
                </span>
                <span className="text-xs font-semibold text-[#C5A880] block">
                  {doc.degree}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-[#1E3E62]/70">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>Class of <strong>{doc.graduationYear}</strong> • {doc.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>DCI Reg No: <strong className="text-white font-mono">{doc.registrationNumber}</strong></span>
                </div>
                <div className="flex items-start gap-2 text-slate-400">
                  <Building2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-tight">{doc.association}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
