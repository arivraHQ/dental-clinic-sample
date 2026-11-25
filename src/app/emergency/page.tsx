import React from "react";
import { CLINIC_NAP } from "@/data/clinicData";
import { BookingForm } from "@/components/booking/BookingForm";
import { Phone, AlertTriangle, CheckCircle2, MapPin } from "lucide-react";

export const metadata = {
  title: "Emergency Dental Triage & Care | Aura Dental Bengaluru",
  description: "24/7 Dental Emergency Care in Bengaluru. Call +91 98200 45678 for immediate pain relief, knocked-out teeth, broken crowns, and dental trauma.",
};

export default function EmergencyDedicatedPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* HUGE Phone Number Top Section as required by Phase 2 */}
        <div className="rounded-3xl bg-rose-950 text-white p-8 sm:p-14 text-center border-2 border-rose-600 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-900/80 border border-rose-500/50 text-rose-200 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            <span>24/7 Emergency Dental Response Hotline</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Dental Emergency? Call Now for Same-Day Relief
          </h1>

          <p className="text-sm sm:text-base text-rose-200 max-w-2xl mx-auto mb-8">
            Severe toothache, broken teeth, knocked-out teeth, or sudden facial swelling. We guarantee same-day triage and computerized painless anesthesia.
          </p>

          {/* HUGE TAP-TO-CALL BUTTON */}
          <div className="flex flex-col items-center justify-center gap-3">
            <a
              href={CLINIC_NAP.emergencyPhoneHref}
              className="inline-flex items-center justify-center gap-4 bg-rose-600 hover:bg-rose-500 text-white font-mono text-2xl sm:text-4xl lg:text-5xl font-black py-6 px-8 sm:px-12 rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] border border-rose-400"
            >
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
              <span>{CLINIC_NAP.emergencyPhone}</span>
            </a>
            <span className="text-xs text-rose-300 font-medium">
              Tap the number above to place an instant call to our on-call dental surgeon.
            </span>
          </div>

          <div className="mt-8 pt-6 border-t border-rose-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-rose-200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-rose-400" />
              Same-Day Appointments Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-rose-400" />
              Zero-Sting Wand® Computerized Anesthesia
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-rose-400" />
              On-Site 3D Digital Diagnostics
            </span>
          </div>
        </div>

        {/* Clinical Emergency Guidance & Triage Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            {/* Same-Day Policy */}
            <div className="bg-white rounded-2xl border border-[#E8E2D5] p-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                Practice Policy
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0B192C]">
                Our Same-Day Emergency Commitment
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                We reserve daily emergency appointment buffer slots across morning and evening clinic shifts. If you are experiencing acute dental pain or injury, you will be seen by a doctor on the same day—no patient in severe distress is turned away.
              </p>
            </div>

            {/* Out-of-Hours Instructions */}
            <div className="bg-white rounded-2xl border border-rose-200 p-7 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-serif text-xl font-bold">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>Out-of-Hours Emergency Instructions</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5B6B82] leading-relaxed">
                Outside regular clinic operating hours (after 8:00 PM), our emergency telephone helpline forwards directly to our on-call dental surgeon.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-[#192231] pt-1">
                <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
                  <strong className="text-rose-950 block">1. Knocked-Out (Avulsed) Permanent Tooth:</strong>
                  <p className="text-rose-900 text-xs">
                    Handle the tooth only by the crown (do NOT touch the root). If clean, gently place it back into the socket. If not possible, store it in cold whole milk or inside your cheek. Contact us immediately—teeth replanted within 60 minutes have a 90% survival rate.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FBF9F5] rounded-xl border border-[#E8E2D5] space-y-1">
                  <strong className="text-[#0B192C] block">2. Fractured or Broken Tooth:</strong>
                  <p className="text-[#5B6B82] text-xs">
                    Rinse your mouth with warm saline. If bleeding, apply gentle pressure with a sterile gauze pad. Apply a cold compress to the cheek to limit swelling and call us to schedule immediate repair.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FBF9F5] rounded-xl border border-[#E8E2D5] space-y-1">
                  <strong className="text-[#0B192C] block">3. Sudden Facial Swelling or Abscess:</strong>
                  <p className="text-[#5B6B82] text-xs">
                    A swelling under the eye or jaw indicates a spreading infection that requires immediate prescription antibiotic coverage and drainage. Do not apply heat to the face. Call immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Navigation */}
            <div className="bg-white rounded-2xl border border-[#E8E2D5] p-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                Emergency Clinic Address
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0B192C]">
                {CLINIC_NAP.formattedAddress}
              </h3>
              <p className="text-xs text-[#5B6B82]">
                Centrally located in Ashok Nagar with immediate vehicular drop-off and wheelchair access right at the entrance.
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Richmond+Road+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B192C] hover:underline"
                >
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Booking Form */}
          <div className="lg:col-span-5 space-y-6">
            <BookingForm defaultService="Emergency Toothache Relief" />

            <div className="bg-[#0B192C] text-[#EFE9DC] p-6 rounded-2xl border border-[#1E3E62] space-y-3">
              <h3 className="font-serif text-lg font-bold text-white">
                Regular Reception Line
              </h3>
              <p className="text-xs text-slate-300">
                For non-acute inquiries or standard bookings during clinic hours:
              </p>
              <a
                href={CLINIC_NAP.phoneHref}
                className="w-full py-3 bg-[#1E3E62] hover:bg-[#2C4E80] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Call Regular Line: {CLINIC_NAP.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
