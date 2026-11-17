import React from "react";
import { CLINIC_NAP } from "@/data/clinicData";
import { MapPin, Phone, Clock, Mail, ExternalLink, ShieldCheck } from "lucide-react";

export const LocationHours: React.FC = () => {
  return (
    <section className="py-20 bg-[#F3EFE6]/60 border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Clinic Details & Hours Table */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E8E2D5] p-7 sm:p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block mb-1">
                  Central Location
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B192C]">
                  Visit Our Richmond Road Practice
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#192231] pt-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0B192C]">Physical Address</strong>
                    <span className="text-[#5B6B82] leading-relaxed block">
                      {CLINIC_NAP.formattedAddress}
                    </span>
                    <span className="text-[11px] text-[#5B6B82] block mt-0.5">
                      (Dedicated patient parking available on site)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <strong className="text-[#0B192C] mr-2">Telephone:</strong>
                    <a href={CLINIC_NAP.phoneHref} className="text-[#0B192C] font-semibold hover:underline">
                      {CLINIC_NAP.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <div>
                    <strong className="text-[#0B192C] mr-2">Email:</strong>
                    <a href={`mailto:${CLINIC_NAP.email}`} className="text-[#5B6B82] hover:underline">
                      {CLINIC_NAP.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="pt-4 border-t border-[#E8E2D5]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Clinical Operating Hours</span>
                </h3>

                <div className="rounded-xl border border-[#E8E2D5] overflow-hidden text-xs">
                  {CLINIC_NAP.displayHours.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 ${
                        idx % 2 === 0 ? "bg-[#FBF9F5]" : "bg-white"
                      } border-b border-[#E8E2D5] last:border-none`}
                    >
                      <span className="font-semibold text-[#0B192C]">{item.days}</span>
                      <span className="text-[#5B6B82] font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs">
              <a
                href={CLINIC_NAP.phoneHref}
                className="text-[#0B192C] font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Front Desk: {CLINIC_NAP.phone}</span>
              </a>
              <span className="text-[11px] text-[#5B6B82] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                Wheelchair Accessible
              </span>
            </div>
          </div>

          {/* Map Embed Box */}
          <div className="lg:col-span-7 rounded-2xl border border-[#E8E2D5] overflow-hidden bg-white shadow-xs flex flex-col">
            <div className="p-4 bg-[#FBF9F5] border-b border-[#E8E2D5] flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0B192C] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                Interactive Map Location: Richmond Road, Ashok Nagar
              </span>
              <a
                href="https://maps.google.com/?q=Richmond+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0B192C] hover:underline font-bold flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C5A880]" />
              </a>
            </div>

            {/* Embedded Google Maps iframe with zero external cookies */}
            <div className="relative w-full flex-1 min-h-[380px]">
              <iframe
                title="Aura Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0069300589333!2d77.60334867597155!3d12.971431787343973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679907f9c99%3A0xbcf3eb15694a9a08!2sRichmond%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
