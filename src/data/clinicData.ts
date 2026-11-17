export interface Doctor {
  id: string;
  name: string;
  role: string;
  degree: string;
  graduationYear: number;
  institution: string;
  registrationNumber: string;
  association: string;
  specialty: string;
  experienceYears: number;
  photo: string;
  bio: string;
}

export interface Review {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface CoreService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  whoItsFor: string;
  priceRange: string;
  duration: string;
  category: "general" | "cosmetic" | "emergency";
  benefits: string[];
}

export const CLINIC_NAP = {
  name: "Aura Dental Clinic & Implant Center",
  legalName: "Aura Dental Healthcare Private Limited",
  phone: "+91 80 4123 4567",
  phoneHref: "tel:+918041234567",
  emergencyPhone: "+91 98200 45678",
  emergencyPhoneHref: "tel:+919820045678",
  email: "care@auradental.in",
  addressStreet: "42/1 Richmond Road, Opposite Sacred Heart Church, Ashok Nagar",
  addressLocality: "Ashok Nagar",
  addressCity: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560025",
  country: "India",
  formattedAddress: "42/1 Richmond Road, Opp. Sacred Heart Church, Ashok Nagar, Bengaluru, Karnataka 560025, India",
  googleRating: 4.9,
  googleReviewCount: 1420,
  acceptingNewPatients: true,
  openingHoursSpecification: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
    { dayOfWeek: ["Sunday"], opens: "10:00", closes: "14:00" },
  ],
  displayHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 2:00 PM (By Appt)" },
    { days: "Emergency Care", hours: "24/7 Dedicated Emergency Team" },
  ],
};

export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Clinical Director & Lead Implantologist",
    degree: "BDS, MDS (Prosthodontics & Implantology)",
    graduationYear: 2008,
    institution: "Government Dental College & Hospital, Mumbai",
    registrationNumber: "DCI-KA-14829",
    association: "Indian Prosthodontic Society (IPS) • Fellow, International Congress of Oral Implantologists (ICOI)",
    specialty: "Full Mouth Rehabilitation, Computer-Guided Implants, Aesthetic Restorations",
    experienceYears: 16,
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    bio: "With over 16 years of surgical experience, Dr. Sharma specializes in micro-invasive implantology and complex bite reconstructions with a zero-anxiety patient philosophy.",
  },
  {
    id: "dr-vikramaditya-rao",
    name: "Dr. Vikramaditya Rao",
    role: "Senior Consultant Orthodontist",
    degree: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    graduationYear: 2011,
    institution: "Manipal College of Dental Sciences, Manipal",
    registrationNumber: "DCI-KA-18934",
    association: "Life Member, Indian Orthodontic Society (IOS) • Invisalign® Diamond Tier Specialist",
    specialty: "Adult Clear Aligners, Lingual Braces, Interceptive Pediatric Orthodontics",
    experienceYears: 13,
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    bio: "Dr. Rao has digitally planned and successfully aligned over 2,500 smiles using cutting-edge 3D intraoral scanning and custom aligner mechanics.",
  },
  {
    id: "dr-meera-iyer",
    name: "Dr. Meera Iyer",
    role: "Consultant Periodontist & Endodontist",
    degree: "BDS, MFDS RCS (England), MDS (Periodontics)",
    graduationYear: 2013,
    institution: "The Oxford Dental College & Post-Graduate Training at King's College London",
    registrationNumber: "DCI-KA-21045",
    association: "Royal College of Surgeons (England) • Member, Indian Society of Periodontology (ISP)",
    specialty: "Laser Gum Contouring, Microscopic Root Canal Therapy, Regenerative Periodontics",
    experienceYears: 11,
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600",
    bio: "Trained in both India and the UK, Dr. Iyer champions biological tooth preservation using dental operating microscopes and painless laser hygiene therapies.",
  },
];

export const CLINIC_SERVICES: CoreService[] = [
  {
    slug: "general",
    category: "general",
    name: "Comprehensive Checkup & Ultrasonic Cleaning",
    tagline: "Preventative dental hygiene, digital radiography, and oral wellness assessment",
    description: "Our complete preventive care appointments combine gentle AirFlow® stain removal, painless ultrasonic plaque scaling, and high-definition digital bitewing diagnostic imaging. We screen for early signs of decay, gum inflammation, and oral pathology.",
    whoItsFor: "Ideal for all adults and children for routine 6-month checkups, persistent bad breath, bleeding gums, or anyone overdue for a gentle dental review.",
    priceRange: "₹1,500 – ₹3,500",
    duration: "45 – 60 Minutes",
    benefits: [
      "Ultra-low dose digital x-ray diagnostics",
      "No-scrape AirFlow polish for sensitive enamel",
      "Comprehensive oral cancer screening",
      "Tailored at-home hygiene roadmap",
    ],
  },
  {
    slug: "cosmetic",
    category: "cosmetic",
    name: "Aesthetic Dentistry & Smile Harmonization",
    tagline: "Handcrafted porcelain veneers, in-office laser whitening, and composite bonding",
    description: "Transform chips, intrinsic staining, uneven spacing, or worn edges with custom-crafted ultra-thin porcelain veneers and Philips Zoom! professional laser teeth whitening. We design smiles using digital facial analysis to ensure natural vitality and harmony.",
    whoItsFor: "Patients with stained, chipped, gapped, or unevenly worn teeth who desire a natural, camera-ready smile without aggressive tooth reduction.",
    priceRange: "₹8,000 – ₹22,000 per tooth (Veneers) / ₹12,000 (Laser Whitening)",
    duration: "1 to 2 Appointments",
    benefits: [
      "Pre-treatment 3D digital smile simulation",
      "Stain-resistant high-translucency Swiss ceramic",
      "Minimally invasive tooth preparation",
      "15–20+ year expected durability with routine care",
    ],
  },
  {
    slug: "emergency",
    category: "emergency",
    name: "Immediate Emergency Dental Relief",
    tagline: "Same-day triage and treatment for severe toothache, trauma, and broken teeth",
    description: "Acute dental pain requires rapid, compassionate intervention. We maintain dedicated daily emergency reservation slots to treat acute pulpitis, broken crowns, dental abscesses, and knocked-out teeth on the same day.",
    whoItsFor: "Anyone experiencing throbbing tooth pain, sudden facial swelling, a fractured tooth, a knocked-out tooth, or uncontrollable gum bleeding.",
    priceRange: "₹1,200 (Emergency Consultation & Pain Relief Triage)",
    duration: "Immediate Same-Day Priority",
    benefits: [
      "Same-day pain relief guarantee",
      "Computerized wand anesthesia (zero needle anxiety)",
      "Digital x-ray diagnosis in under 5 minutes",
      "24/7 on-call trauma surgeon helpline",
    ],
  },
];

export const CLINIC_REVIEWS: Review[] = [
  {
    id: "rev-1",
    patientName: "Sunita Nambiar",
    treatment: "Porcelain Veneers & Smile Makeover",
    rating: 5,
    date: "November 4, 2026",
    text: "I was extremely anxious about veneer preparations, but Dr. Ananya Sharma was extraordinarily patient. She showed me a 3D digital simulation before touching a single tooth. The result is so subtle and natural that my friends just think I look rested. The clinic is pristine and feels like a calm sanctuary.",
    verified: true,
  },
  {
    id: "rev-2",
    patientName: "Karthik Venkatraman",
    treatment: "Immediate Emergency Root Canal & Crown",
    rating: 5,
    date: "October 18, 2026",
    text: "Had excruciating tooth pain on a Saturday evening. Called their emergency number and was attended to within 45 minutes by Dr. Meera Iyer. Her painless laser numbing was unbelievable—felt zero pain. Truly grateful for their genuine same-day emergency commitment.",
    verified: true,
  },
  {
    id: "rev-3",
    patientName: "Deepa & Rohan Deshmukh",
    treatment: "Adult Invisalign & Family Checkups",
    rating: 5,
    date: "September 29, 2026",
    text: "Dr. Vikramaditya Rao completed my clear aligner treatment in just 8 months without extractions. The entire team respects appointment times—virtually zero waiting lounge delays. Transparent billing with no hidden surprises. Highly recommended!",
    verified: true,
  },
];

export const CLINIC_FAQS = [
  {
    question: "How do I reach the clinic during a dental emergency outside regular hours?",
    answer: "Please immediately call our emergency hotline at +91 98200 45678. Our on-call dental surgeon will triage your situation over the phone and arrange immediate clinic opening if necessary. For avulsed (knocked out) teeth, preserve the tooth in cold milk or saliva and reach us within 60 minutes for optimal replantation.",
  },
  {
    question: "Are your dentists registered with the Dental Council of India (DCI)?",
    answer: "Yes, 100% of our clinical team are licensed and verified with the Dental Council of India (DCI) and the Karnataka State Dental Council (KSDC), alongside holding memberships with international bodies such as the Royal College of Surgeons (England) and the International Congress of Oral Implantologists (ICOI).",
  },
  {
    question: "Do you provide transparent cost estimates before beginning treatment?",
    answer: "Yes. Following your clinical examination and digital x-ray diagnostics, we provide a printed, line-item treatment plan detailing all options, timeframes, and fixed costs. No procedures are initiated without your written informed consent.",
  },
  {
    question: "How does your painless anesthesia protocol work?",
    answer: "We utilize microprocessor-controlled computer-assisted local anesthesia (The Wand®). By delivering local anesthetic at a steady, tissue-matched flow rate below the patient's pain threshold, sensation is blocked without the stinging pressure associated with traditional manual injections.",
  },
];
