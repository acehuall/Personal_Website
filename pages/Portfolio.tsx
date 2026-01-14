import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, BookOpen, Monitor, FileSpreadsheet } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-navy">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 text-center">
            <h1 className="font-sans font-extrabold text-6xl md:text-7xl text-primary mb-6">Portfolio</h1>
            <span className="text-blue-300 font-serif italic text-xl mb-4 block">From Dashboards to Games</span>
        </div>
      </section>

      {/* ---------------- Services Flex Grid ---------------- */}
      <section className="bg-navy-light py-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-8">
                
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-8 w-full md:h-[450px]">
                    
                    {/* Card 1: Dashboards */}
                    <div className="flex-1 hover:flex-[2.5_1_0%] transition-all duration-500 ease-out bg-[#16385F] hover:bg-[#1E4B7A] p-12 rounded-2xl flex flex-col items-start shadow-lg hover:shadow-2xl cursor-default overflow-hidden group border border-blue-900/30 hover:border-blue-400/30 min-h-[350px] md:min-h-0">
                        <div className="p-4 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full mb-6 text-blue-300 transition-colors duration-500 shrink-0">
                            <BarChart2 size={32} />
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-4 whitespace-nowrap">Dashboards</h3>
                        <p className="font-body text-muted mb-8 flex-grow leading-relaxed min-w-[200px]">
                            Creating advanced VBA scripts and Excel models to automate month-end reporting for NHS finance teams.
                        </p>
                        <Link to="/contact" className="font-button text-sm uppercase tracking-widest text-blue-300 border-b border-blue-300 pb-1 hover:text-white hover:border-white transition-colors shrink-0">
                            Let's Talk
                        </Link>
                    </div>

                    {/* Card 2: Automation */}
                    <div className="flex-1 hover:flex-[2.5_1_0%] transition-all duration-500 ease-out bg-[#16385F] hover:bg-[#1E4B7A] p-12 rounded-2xl flex flex-col items-start shadow-lg hover:shadow-2xl cursor-default overflow-hidden group border border-blue-900/30 hover:border-blue-400/30 min-h-[350px] md:min-h-0">
                        <div className="p-4 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full mb-6 text-blue-300 transition-colors duration-500 shrink-0">
                            <FileSpreadsheet size={32} />
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-4 whitespace-nowrap">Automation & Macros</h3>
                        <p className="font-body text-muted mb-8 flex-grow leading-relaxed min-w-[200px]">
                            Building complex macros and automation tools that transform raw data into ready-to-use financial reports.
                        </p>
                        <Link to="/contact" className="font-button text-sm uppercase tracking-widest text-blue-300 border-b border-blue-300 pb-1 hover:text-white hover:border-white transition-colors shrink-0">
                            Let's Talk
                        </Link>
                    </div>

                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-8 w-full md:h-[450px]">
                    
                    {/* Card 3: Educational Content */}
                    <div className="flex-1 hover:flex-[2.5_1_0%] transition-all duration-500 ease-out bg-[#16385F] hover:bg-[#1E4B7A] p-12 rounded-2xl flex flex-col items-start shadow-lg hover:shadow-2xl cursor-default overflow-hidden group border border-blue-900/30 hover:border-blue-400/30 min-h-[350px] md:min-h-0">
                        <div className="p-4 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full mb-6 text-blue-300 transition-colors duration-500 shrink-0">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-4 whitespace-nowrap">Educational Content</h3>
                        <p className="font-body text-muted mb-8 flex-grow leading-relaxed min-w-[200px]">
                            Interactive learning games and materials designed to help peers engage with complex financial concepts.
                        </p>
                        <Link to="/contact" className="font-button text-sm uppercase tracking-widest text-blue-300 border-b border-blue-300 pb-1 hover:text-white hover:border-white transition-colors shrink-0">
                            Let's Talk
                        </Link>
                    </div>

                    {/* Card 4: Website Design */}
                    <div className="flex-1 hover:flex-[2.5_1_0%] transition-all duration-500 ease-out bg-[#16385F] hover:bg-[#1E4B7A] p-12 rounded-2xl flex flex-col items-start shadow-lg hover:shadow-2xl cursor-default overflow-hidden group border border-blue-900/30 hover:border-blue-400/30 min-h-[350px] md:min-h-0">
                        <div className="p-4 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full mb-6 text-blue-300 transition-colors duration-500 shrink-0">
                            <Monitor size={32} />
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-4 whitespace-nowrap">Website Design</h3>
                        <p className="font-body text-muted mb-8 flex-grow leading-relaxed min-w-[200px]">
                            Designing responsive, modern web applications. See my work at pomonas.store and other custom projects.
                        </p>
                        <Link to="/contact" className="font-button text-sm uppercase tracking-widest text-blue-300 border-b border-blue-300 pb-1 hover:text-white hover:border-white transition-colors shrink-0">
                            Let's Talk
                        </Link>
                    </div>

                </div>

            </div>
        </div>
      </section>

      {/* ---------------- Process ---------------- */}
      <section className="bg-navy py-24 text-primary">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-3xl mb-16 text-center border-b border-blue-500/30 pb-8 inline-block mx-auto text-blue-100">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div className="space-y-4">
                    <span className="font-display text-6xl text-blue-200/20">01</span>
                    <h3 className="font-display text-2xl text-blue-100">Listen</h3>
                    <p className="font-body text-muted">We start with your story, audience and practical needs to understand the core objective.</p>
                </div>
                <div className="space-y-4">
                    <span className="font-display text-6xl text-blue-200/20">02</span>
                    <h3 className="font-display text-2xl text-blue-100">Shape</h3>
                    <p className="font-body text-muted">We design concepts, data models and visuals that fit your world and solve the problem.</p>
                </div>
                <div className="space-y-4">
                    <span className="font-display text-6xl text-blue-200/20">03</span>
                    <h3 className="font-display text-2xl text-blue-100">Gather</h3>
                    <p className="font-body text-muted">We bring everything together into food, products or automated experiences.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;