import React from "react";
import { CLINIC_NAP } from "@/data/clinicData";
import { BookingForm } from "@/components/booking/BookingForm";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Contact & Appointments | Aura Dental Clinic Bengaluru",
  description: "Book an appointment at Aura Dental Clinic in Richmond Road, Bengaluru. Phone number, operating hours, and interactive location map.",
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block">
            Patient Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B192C] tracking-tight">
            Contact & Appointments
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B82] leading-relaxed">
            We welcome new patients, second opinions, and emergency consultations. Reach our front desk directly by telephone, or submit an appointment request below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-6">
            <BookingForm />
          </div>

          {/* Right Column: Contact Details, Hours Table & Tap to Call */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E8E2D5] p-7 space-y-6 shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                Reception & Direct Lines
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#192231]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0B192C]">Address</strong>
                    <span className="text-[#5B6B82]">{CLINIC_NAP.formattedAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <strong className="text-[#0B192C] mr-2">Telephone (Tap to Call):</strong>
                    <a
                      href={CLINIC_NAP.phoneHref}
                      className="font-bold text-[#0B192C] hover:text-[#1E3E62] underline"
                    >
                      {CLINIC_NAP.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                  <div>
                    <strong className="text-rose-900 mr-2">Emergency Hotline (24/7):</strong>
                    <a
                      href={CLINIC_NAP.emergencyPhoneHref}
                      className="font-bold text-rose-700 hover:text-rose-900 underline"
                    >
                      {CLINIC_NAP.emergencyPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0" />
                  <div>
                    <strong className="text-[#0B192C] mr-2">Email:</strong>
                    <a
                      href={`mailto:${CLINIC_NAP.email}`}
                      className="text-[#5B6B82] hover:underline"
                    >
                      {CLINIC_NAP.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Table */}
              <div className="pt-4 border-t border-[#E8E2D5]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B192C] mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>Clinical Hours Schedule</span>
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

            {/* Direct Tap to Call Primary Button */}
            <a
              href={CLINIC_NAP.phoneHref}
              className="w-full py-4 px-6 rounded-2xl bg-[#0B192C] hover:bg-[#1E3E62] text-white font-bold text-sm flex items-center justify-center gap-3 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Tap to Call Front Desk ({CLINIC_NAP.phone})</span>
            </a>
          </div>
        </div>

        {/* Map Embed Section */}
        <div className="rounded-3xl border border-[#E8E2D5] overflow-hidden bg-white shadow-xs">
          <div className="p-4 bg-[#FBF9F5] border-b border-[#E8E2D5] flex items-center justify-between text-xs">
            <span className="font-semibold text-[#0B192C] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A880]" />
              Map View & Directions — Richmond Road, Ashok Nagar, Bengaluru
            </span>
            <a
              href="https://maps.google.com/?q=Richmond+Road+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B192C] hover:underline font-bold flex items-center gap-1"
            >
              <span>Get Directions in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#C5A880]" />
            </a>
          </div>

          <div className="relative w-full h-[450px]">
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
  );
}
