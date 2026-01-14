import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const values = [
    {
        id: 1,
        title: "Academics",
        short: "Strong foundation in Mathematics and Economics.",
        details: "My academic journey has been driven by a love for numbers and logical systems. Achieving high grades in Mathematics and Economics provided the analytical toolkit I use today in accounting.",
        color: "bg-[#4D8B86]", // Muted Teal
        timeline: [
            { title: "GCSEs", desc: "9 results including Maths (8) & English (9)." },
            { title: "A-Levels", desc: "Mathematics [A], Economics [A]." },
            { title: "Further Maths", desc: "AS Level [B] alongside Sociology [B]." }
        ]
    },
    {
        id: 2,
        title: "Work Experience",
        short: "Rising from crew member to NHS Finance Apprentice.",
        details: "Real-world experience has taught me the value of teamwork and efficiency. Starting in fast food taught me process discipline, which I now apply to financial workflows in the NHS.",
        color: "bg-[#D9A558]", // Amber
        timeline: [
            { title: "McDonalds", desc: "Crew Member to Crew Trainer." },
            { title: "NHS Finance", desc: "Finance Apprentice." },
            { title: "Current", desc: "Focusing on automation & reporting." }
        ]
    },
    {
        id: 3,
        title: "Extra Curriculars",
        short: "Merging finance with Python and Web Dev.",
        details: "Beyond the ledger, I explore technology. I build web applications and Python scripts to automate tasks and visualize data, bridging the gap between traditional accounting and modern tech.",
        color: "bg-[#6B7C93]", // Slate Blue
        timeline: [
            { title: "Coding", desc: "Python & Web Development projects." },
            { title: "Education", desc: "Creating interactive learning materials." },
            { title: "Innovation", desc: "Building tools like Altman Z calculators." }
        ]
    },
  ];

  const toggleCard = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const handleCardClick = (id: number, index: number) => {
    if (currentSlide === index) {
        toggleCard(id);
    } else {
        setCurrentSlide(index);
        setActiveCard(null); // Close any open accordion when switching slides
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % values.length);
    setActiveCard(null);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
    setActiveCard(null);
  };

  return (
    <div className="w-full bg-[#0B1F3A]">
      {/* ---------------- Hero Section ---------------- */}
      <section className="bg-[#0B1F3A] min-h-[40vh] flex items-center pt-32 pb-12">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 w-full text-center">
            <div>
                <h1 className="font-sans font-extrabold text-6xl text-[#F3F7FF] mb-6">
                    About
                </h1>
                <p className="font-serif italic text-xl md:text-2xl text-[#B9C7DD]">
                    My Obligatory Ego Trip
                </p>
            </div>
        </div>
      </section>

      {/* ---------------- Story Section ---------------- */}
      <section className="bg-[#F6F4EE] py-24 text-navy">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <h2 className="font-serif text-4xl font-semibold leading-tight text-navy">
                        Gosh I'm great aren't I
                    </h2>
                </div>
                <div className="md:col-span-7 font-body text-lg leading-relaxed space-y-6 text-navy/80">
                    <p>
                        Accounting is often seen as just numbers and compliance. I see it as something that is transformational; from Accenture to NatWest to Cloud Computing, they only exist the way they do due to accounting. My journey started with a curiosity for how things work and interlink, which led me to understand finance and accounting.
                    </p>
                    <p>
                        On the side I also enjoy small coding projects, and try to use them in finance projects, whether that's calculating Altman Z scores or CAPE ratios, creating things that turn my curiosity into utility.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ---------------- Expertise Section (Interactive Carousel) ---------------- */}
      <section className="bg-[#102B4E] pb-24 text-[#B9C7DD] overflow-hidden">
         <div className="max-w-full mx-auto">
            <div className="border-t border-[#274A73] pt-16">
                
                {/* Carousel Container */}
                <div className="relative w-full max-w-7xl mx-auto py-12 [--slide-width:85%] md:[--slide-width:55%]">
                    
                    {/* Navigation Arrows (Absolute Positioned) */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0B1F3A]/60 text-white/70 hover:text-white hover:bg-[#0B1F3A] transition-all border border-white/10 backdrop-blur-sm shadow-xl"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#0B1F3A]/60 text-white/70 hover:text-white hover:bg-[#0B1F3A] transition-all border border-white/10 backdrop-blur-sm shadow-xl"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Track */}
                    <div 
                        className="flex transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: `translateX(calc(50% - (${currentSlide} * var(--slide-width)) - (var(--slide-width) / 2)))` }}
                    >
                        {values.map((item, index) => {
                            const isActive = index === currentSlide;
                            return (
                                <div key={item.id} className="w-[var(--slide-width)] flex-shrink-0 px-3 md:px-6 box-border transition-all duration-500">
                                    <div 
                                        onClick={() => handleCardClick(item.id, index)}
                                        className={`
                                            ${item.color} p-8 md:p-12 rounded-2xl shadow-2xl 
                                            cursor-pointer transition-all duration-500 ease-in-out 
                                            flex flex-col justify-start relative overflow-hidden group min-h-[420px]
                                            ${isActive 
                                                ? 'opacity-100 scale-100 ring-1 ring-white/20 z-10' 
                                                : 'opacity-40 scale-90 hover:opacity-60 hover:scale-95 z-0'
                                            }
                                        `}
                                    >
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6 z-10">
                                            <h3 className="font-display text-3xl text-[#F6F4EE] leading-tight pr-4">{item.title}</h3>
                                            <div className={`p-2 rounded-full bg-white/10 text-white transition-transform duration-500 shrink-0 ${activeCard === item.id ? 'rotate-180 bg-white/20' : ''}`}>
                                                <ChevronDown size={24} />
                                            </div>
                                        </div>
                                        
                                        {/* Short Desc */}
                                        <p className="font-body text-[#F6F4EE]/90 text-lg leading-relaxed mb-4 z-10 relative">
                                            {item.short}
                                        </p>

                                        {/* Expandable Details - Accordion */}
                                        <div 
                                            className={`transition-all duration-500 ease-in-out z-10 relative overflow-hidden ${
                                                activeCard === item.id 
                                                ? 'max-h-[800px] opacity-100 mt-4' 
                                                : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="border-t border-white/20 pt-6">
                                                <p className="font-body text-[#F6F4EE] text-base leading-relaxed mb-8">
                                                    {item.details}
                                                </p>
                                                
                                                {/* Vertical Timeline */}
                                                <div className="ml-6 pl-6 border-l-2 border-white/20 space-y-8 py-2">
                                                    {item.timeline.map((point, idx) => (
                                                        <div key={idx} className="relative">
                                                            {/* Dot - Adjusted left position for perfect centering */}
                                                            <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-[#F6F4EE] ring-4 ring-white/20"></div>
                                                            {/* Content */}
                                                            <div>
                                                                <h4 className="font-sans font-bold text-[#F6F4EE] text-lg">{point.title}</h4>
                                                                <p className="font-body text-[#F6F4EE]/80 text-sm mt-1">{point.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Background Element */}
                                        <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-white/5 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Indicators */}
                    <div className="flex items-center justify-center mt-10 gap-3">
                        {values.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setCurrentSlide(idx); setActiveCard(null); }}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-secondary w-10' : 'bg-white/20 hover:bg-white/40 w-2'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
