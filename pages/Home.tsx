import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { TimelineItem } from '../types';
import { GraduationCap, Briefcase, Code, BarChart, Settings, Users, FileSpreadsheet, Database, ArrowRight } from 'lucide-react';

// Data for Timeline
const timelineData: TimelineItem[] = [
  {
    id: '1',
    category: 'Academics',
    title: 'From College to Accountancy',
    shortDesc: 'Strong foundation in Mathematics and Economics.',
    fullDesc: 'Passed my GSCE’s in 2022 where I got 9 results including an (8) in Mathematics and a (9) in English language. I then went on to do my A-Levels where I focused on Mathematics and finance getting: Mathematics [A]; Economics [A]; Sociology [B]; Further Mathematics AS [B].',
    icon: <GraduationCap size={24} />
  },
  {
    id: '2',
    category: 'Work Experience',
    title: 'From serving Big Macs to serving the public',
    shortDesc: 'Rising from crew member to NHS Finance Apprentice.',
    fullDesc: 'Starting at McDonalds as a crew member, I worked my way up to crew trainer and then went on to pursue my accountancy dreams. This is where I found a job as a Finance Apprentice working for the NHS with an incredible team.',
    icon: <Briefcase size={24} />
  },
  {
    id: '3',
    category: 'Extracurriculars',
    title: 'Coding & Development',
    shortDesc: 'Merging finance with Python and Web Dev.',
    fullDesc: 'Outside of the workplace I live to work on coding projects such as web development or Python Analytics. I also use these skills to create interactive learning materials for people to use and engage with to grow their skills.',
    icon: <Code size={24} />
  }
];

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ---------------- Hero Section ---------------- */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-navy">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 lg:max-w-[60%] z-10">
              <h1 className="font-sans font-extrabold text-6xl md:text-8xl lg:text-9xl text-primary leading-[0.9] tracking-tighter mb-8">
                Edward<br />Allan
              </h1>
              <div className="max-w-xl pl-2 border-l-2 border-navy-light">
                <p className="font-serif italic text-muted text-xl mb-6">
                  Data made <span className="text-secondary">actionable</span>.
                </p>
                <h3 className="font-body text-primary text-lg md:text-xl leading-relaxed mb-8">
                  I’m Ed, an accountant focused on building on my fascinations in finance, accounting and coding.
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/portfolio">
                    <Button variant="primary">Explore my portfolio</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="secondary">Contact me</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Photo - Balanced Size */}
            <div className="shrink-0 relative z-10 flex justify-center">
                {/* Decorative background element behind the image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-secondary/10 rounded-full"></div>
                
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] rounded-full border-2 border-secondary/30 p-2 md:p-3 relative group bg-navy">
                  <div className="w-full h-full rounded-full overflow-hidden bg-navy-light">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="Edward Allan" 
                      className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105" 
                    />
                  </div>
                </div>
            </div>

          </div>
          
          {/* Subtle Background Decorative Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-light/5 pointer-events-none hidden lg:block"></div>
        </div>
      </section>

      {/* ---------------- About Me Summary ---------------- */}
      <section className="py-24 bg-navy">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8">
                        Macros, Automation <br/> & <span className="text-secondary">Analysis</span>
                    </h2>
                    <div className="font-body text-muted text-lg space-y-6 leading-relaxed">
                        <p>
                            I work in NHS finance where I work with data to turn it narrative based information that is actionable. A lot of my work is on process improvement and automation to strengthen month-end controls and create better insights into our datasets.
                        </p>
                        <p>
                            I enjoy being able to create something that has meaningfully impactful for teams and wider stakeholders, and creating tools that utilise real world data — whether that’s a Macro, a Power Query model, or a streamlined workflow.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    {/* Placeholder for "One Strong Image" */}
                    <div className="aspect-[4/5] w-full max-w-md mx-auto bg-navy-light relative overflow-hidden rounded-lg border border-navy-light/50">
                        <img 
                            src="https://picsum.photos/600/800" 
                            alt="Data Analysis" 
                            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                        />
                         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ---------------- My Journey Timeline ---------------- */}
      <section className="py-24 bg-navy-steely">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-4xl text-primary mb-12 text-center">My Journey</h2>
            
            <div className="space-y-6 mb-16">
                {timelineData.map((item) => (
                    <div 
                        key={item.id} 
                        className="bg-navy/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-secondary/50 hover:bg-navy/50"
                    >
                        <div className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="p-4 rounded-full bg-navy-light text-secondary transition-colors">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <span className="text-secondary font-button text-xs uppercase tracking-wider mb-2 block">{item.category}</span>
                                <h3 className="font-sans font-bold text-2xl text-primary mb-2">{item.title}</h3>
                                <p className="text-primary/80 font-body">{item.shortDesc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Go to Story Link */}
            <div className="flex justify-center">
                <Link to="/about">
                    <Button variant="secondary" className="group flex items-center gap-3 px-10 py-4">
                        Go to my story 
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* ---------------- Functional Skills (Bento Box) ---------------- */}
      <section className="py-24 bg-portfolio-tan/90 text-navy">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <h2 className="font-serif text-4xl mb-12 text-center text-navy-light">Functional Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-5 h-auto md:h-[600px]">
                
                {/* Box 1: Finance Analytics (2x2) - Top Left */}
                <div className="md:col-span-2 md:row-span-2 bg-[#F6F4EE] rounded-2xl p-6 md:p-8 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 min-h-[320px] md:min-h-0">
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 bg-portfolio-green/10 rounded-full flex items-center justify-center text-portfolio-green mb-6">
                                <BarChart size={28} />
                            </div>
                            <h3 className="font-sans font-bold text-3xl mb-4 text-navy">Finance Analytics</h3>
                            <p className="font-body text-navy/80 text-lg max-w-sm leading-relaxed">
                                Utilising financial analysis and reconciliation for auditability and trusted reporting.
                            </p>
                        </div>
                    </div>
                    
                    {/* Background Visuals */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        
                        {/* Top Right: Audit Ledger Motif */}
                        <div className="absolute top-[-10px] right-[-30px] w-72 bg-white rounded shadow-sm border border-gray-200 transform rotate-[8deg] opacity-20 group-hover:opacity-40 transition-opacity duration-500 p-4">
                            <div className="flex justify-between items-end border-b-2 border-navy mb-2 pb-1">
                                <span className="font-serif italic text-navy text-xs">General Ledger</span>
                                <span className="font-mono text-[8px] text-gray-500">FY2024</span>
                            </div>
                            <div className="space-y-1.5 font-mono text-[9px] text-navy/80">
                                <div className="grid grid-cols-4 gap-2 border-b border-dashed border-gray-300 pb-1 font-bold text-gray-400">
                                    <span>DATE</span><span>REF</span><span>DR</span><span>CR</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <span>Jan 01</span><span>INV001</span><span>1,200</span><span>-</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2 bg-highlight/30 -mx-1 px-1">
                                    <span>Jan 02</span><span>PMT092</span><span>-</span><span>1,200</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <span>Jan 05</span><span>EXP221</span><span>450</span><span>-</span>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    <span>Jan 08</span><span>JRNL04</span><span>2,100</span><span>-</span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right: Waterfall Chart */}
                        <div className="absolute bottom-6 right-6 flex items-end space-x-1.5 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                             {/* Bar 1: Base (Start) - Black */}
                             <div className="w-8 h-16 bg-gray-900 rounded-sm"></div>
                             
                             {/* Connector 1 */}
                             <div className="w-2 h-16 relative border-t border-dashed border-gray-400/50 top-[1px]"></div>

                             {/* Bar 2: Increase - Green */}
                             <div className="relative w-8 h-32">
                                 <div className="absolute bottom-16 w-full h-10 bg-emerald-600 rounded-sm"></div>
                             </div>

                             {/* Connector 2 */}
                             <div className="w-2 h-[6.5rem] relative border-t border-dashed border-gray-400/50 top-[1px]"></div>

                             {/* Bar 3: Decrease - Red */}
                             <div className="relative w-8 h-32">
                                 <div className="absolute bottom-[5.5rem] w-full h-4 bg-red-600 rounded-sm"></div>
                             </div>
                             
                             {/* Connector 3 */}
                             <div className="w-2 h-[5.5rem] relative border-t border-dashed border-gray-400/50 top-[1px]"></div>

                             {/* Bar 4: Total (End) - Black (Higher than start) */}
                             <div className="w-8 h-[5.5rem] bg-gray-900 rounded-sm"></div>
                        </div>
                    </div>
                </div>

                {/* Box 2: Automation (1x1) - Top Right */}
                <div className="md:col-span-1 md:row-span-1 bg-[#F6F4EE] rounded-2xl p-6 md:p-5 flex flex-col gap-3 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[200px] md:min-h-0">
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 bg-portfolio-green/10 rounded-full flex items-center justify-center text-portfolio-green">
                            <Settings size={20} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1 min-h-0">
                        <div>
                            <h3 className="font-sans font-bold text-lg mb-1.5 text-navy">Automation</h3>
                            <p className="font-body text-xs text-navy/70">Designing scalable processes.</p>
                        </div>
                        {/* Code Snippet */}
                        <div className="bg-navy p-2.5 rounded-lg font-mono text-[11px] leading-4 text-gray-300 shadow-inner mt-auto">
                            <div className="flex gap-1.5 mb-2 opacity-50">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <p><span className="text-secondary">def</span> <span className="text-yellow-300">pipeline</span>(data):</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> insight</p>
                        </div>
                    </div>
                </div>

                {/* Box 3: Stakeholder (1x1) - Middle Right */}
                <div className="md:col-span-1 md:row-span-1 bg-[#F6F4EE] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[200px] md:min-h-0">
                    <div className="w-10 h-10 bg-portfolio-green/10 rounded-full flex items-center justify-center text-portfolio-green z-10">
                        <Users size={20} />
                    </div>
                    <div className="z-10 mt-auto">
                        <h3 className="font-sans font-bold text-xl mb-2 text-navy">Stakeholder Mgt</h3>
                        <p className="font-body text-sm text-navy/70">Connecting diverse teams & GDPR.</p>
                    </div>
                    {/* Background Icon */}
                    <div className="absolute -bottom-4 -right-4 text-navy/5 transform rotate-12">
                        <Users size={120} />
                    </div>
                </div>

                {/* Box 4: Process Design (1x1) - Bottom Left */}
                <div className="md:col-span-1 md:row-span-1 bg-[#F6F4EE] rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-h-[200px] md:min-h-0">
                    <div className="w-10 h-10 bg-portfolio-green/10 rounded-full flex items-center justify-center text-portfolio-green">
                        <Briefcase size={20} />
                    </div>
                     <div className="mt-auto">
                        <h3 className="font-sans font-bold text-xl mb-2 text-navy">Process Design</h3>
                        <p className="font-body text-sm text-navy/70">Creating efficient workflows.</p>
                    </div>
                </div>

                {/* Box 5: Tech Stack (2x1) - Bottom Right */}
                <div className="md:col-span-2 md:row-span-1 bg-[#F6F4EE] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-xl transition-all duration-300 min-h-[200px] md:min-h-0">
                    <div className="flex-shrink-0 text-center sm:text-left">
                        <div className="w-10 h-10 bg-portfolio-green/10 rounded-full flex items-center justify-center text-portfolio-green mb-3 mx-auto sm:mx-0">
                            <Code size={20} />
                        </div>
                        <h3 className="font-sans font-bold text-xl text-navy">Tech Stack</h3>
                        <p className="font-body text-sm text-navy/70">Modern tools & tech.</p>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-3 w-full sm:w-auto">
                        {/* Python */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="w-12 h-12 bg-[#3776ab] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xs">Py</span>
                            </div>
                        </div>
                        {/* Excel */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="w-12 h-12 bg-[#217346] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                <FileSpreadsheet size={20} />
                            </div>
                        </div>
                        {/* SQL */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="w-12 h-12 bg-[#00758f] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                <Database size={20} />
                            </div>
                        </div>
                        {/* Code */}
                        <div className="flex flex-col items-center gap-2 group cursor-default">
                            <div className="w-12 h-12 bg-[#5c2d91] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                 <Code size={20} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
