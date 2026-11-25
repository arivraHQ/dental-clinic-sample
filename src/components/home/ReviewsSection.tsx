import React from "react";
import { CLINIC_REVIEWS, CLINIC_NAP } from "@/data/clinicData";
import { Star, CheckCircle, Calendar, Quote } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] block">
            Verified Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight">
            Recent Patient Reflections
          </h2>
          <p className="text-sm sm:text-base text-[#5B6B82]">
            Over {CLINIC_NAP.googleReviewCount.toLocaleString()} verified Google reviews reflect our unwavering commitment to gentle, transparent care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLINIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-[#E8E2D5] p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#E8E2D5] absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#F3EFE6] text-[#0B192C] text-[11px] font-semibold">
                  {review.treatment}
                </div>

                <p className="text-xs sm:text-sm text-[#192231] leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3EFE6] mt-6 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0B192C] block">{review.patientName}</span>
                  <span className="text-[11px] text-[#5B6B82] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3 h-3 text-[#C5A880]" />
                    {review.date}
                  </span>
                </div>

                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0B192C] bg-[#EFE9DC] px-2 py-0.5 rounded-full border border-[#E8E2D5]">
                    <CheckCircle className="w-3 h-3 text-[#C5A880]" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
