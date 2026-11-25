import React from "react";
import Link from "next/link";
import { CLINIC_DOCTORS } from "@/data/clinicData";
import { ArrowRight, GraduationCap, Award } from "lucide-react";

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3EFE6]/60 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
              Practicing Specialists
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
              Experienced, Gentle Clinical Leadership
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B82] mt-2 leading-relaxed">
              Every procedure is personally performed by our senior faculty—not handed down to rotating interns. Meet the clinicians dedicated to your care.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B192C] hover:underline self-start md:self-auto"
          >
            <span>View Full Academic Credentials</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-[#E8E2D5] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Placeholder using clean editorial photography with no stock cheesy smile tropes */}
                <div className="h-64 bg-[#0B192C] relative overflow-hidden flex items-end p-5">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-85 transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${doc.photo})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />
                  <div className="relative z-10 w-full text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880] block">
                      {doc.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-[#0B192C] bg-[#FBF9F5] p-2.5 rounded-lg border border-[#E8E2D5]">
                    {doc.degree}
                  </div>

                  <p className="text-xs text-[#5B6B82] leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="pt-2 border-t border-[#F3EFE6] space-y-1.5 text-xs text-[#192231]">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{doc.institution.split(",")[0]} (Class of {doc.graduationYear})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>DCI Reg: <strong className="font-mono">{doc.registrationNumber}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-xl border border-[#0B192C] text-[#0B192C] hover:bg-[#0B192C] hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Book with {doc.name.split(" ")[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
