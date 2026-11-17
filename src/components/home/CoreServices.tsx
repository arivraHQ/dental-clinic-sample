import React from "react";
import Link from "next/link";
import { CLINIC_SERVICES } from "@/data/clinicData";
import { ArrowRight, CheckCircle, Sparkles, ShieldAlert, HeartPulse } from "lucide-react";

export const CoreServices: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "general":
        return <HeartPulse className="w-5 h-5 text-[#0B192C]" />;
      case "cosmetic":
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case "emergency":
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      default:
        return <HeartPulse className="w-5 h-5 text-[#0B192C]" />;
    }
  };

  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
            Clinical Disciplines
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
            Specialized Treatments Designed for Long-Term Oral Health
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82] mt-2 leading-relaxed">
            Every procedure is planned using high-definition 3D diagnostics, preserving maximum natural tooth structure with zero rushed appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.slug}
              className={`bg-white rounded-2xl border p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                service.category === "emergency"
                  ? "border-rose-200 hover:border-rose-400"
                  : "border-[#E8E2D5] hover:border-[#C5A880]"
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] border border-[#E8E2D5] flex items-center justify-center">
                  {getCategoryIcon(service.category)}
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B82] block">
                    {service.category === "general" ? "Preventive Care" : service.category === "cosmetic" ? "Aesthetic Harmony" : "Urgent Care"}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0B192C] mt-0.5">
                    {service.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                  {service.tagline}
                </p>

                <div className="space-y-2 pt-3 border-t border-[#F3EFE6] text-xs text-[#192231]">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F3EFE6] mt-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6B82] block">
                    Fee Range
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0B192C]">
                    {service.priceRange}
                  </span>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B192C] hover:text-[#1E3E62] transition-colors"
                >
                  <span>Full Details</span>
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
