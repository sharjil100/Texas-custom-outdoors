import { Shield, Award, Star, BadgeCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <div className="flex items-center gap-2 text-gray-500">
            <Shield size={28} className="text-[#32373c]" />
            <div>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Licensed &amp;</p>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Insured</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Award size={28} className="text-[#32373c]" />
            <div>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Veteran</p>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Owned</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Star size={28} className="text-[#32373c]" />
            <div>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">5-Star</p>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Google Rated</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <BadgeCheck size={28} className="text-[#32373c]" />
            <div>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Lifetime</p>
              <p className="font-semibold text-[#32373c] text-sm leading-tight">Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
