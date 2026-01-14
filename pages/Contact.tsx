import React from 'react';
import Button from '../components/Button';
import { Mail, ArrowDownCircle, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* ---------------- Hero ---------------- */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <h1 className="font-sans font-extrabold text-6xl text-primary mb-4">Contact</h1>
            <p className="font-serif text-2xl text-muted italic">Let’s cook something up.</p>
        </div>
      </section>

      {/* ---------------- Content & Form ---------------- */}
      <section className="bg-primary py-24 text-navy">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left Column: Info */}
                <div>
                    <h2 className="font-serif text-3xl mb-8">Get in touch</h2>
                    <p className="font-body text-lg text-navy-light/80 mb-12">
                        I specialize in transforming complex financial data into clear, actionable insights. Whether you need to automate your month-end close, build dynamic dashboards, or develop a custom financial application, I'm here to help.
                    </p>

                    <div className="space-y-8">
                        <a href="mailto:edward@example.com" className="flex items-center gap-4 group">
                            <div className="p-3 bg-navy text-secondary rounded-full group-hover:bg-secondary group-hover:text-navy transition-colors">
                                <Mail size={24} />
                            </div>
                            <span className="font-button text-lg underline decoration-secondary underline-offset-4">hello@edwardallan.com</span>
                        </a>

                        <a href="/resume.pdf" className="flex items-center gap-4 group">
                            <div className="p-3 bg-navy text-secondary rounded-full group-hover:bg-secondary group-hover:text-navy transition-colors">
                                <ArrowDownCircle size={24} />
                            </div>
                            <span className="font-button text-lg">Download CV</span>
                        </a>
                    </div>

                    <div className="mt-16 flex gap-6">
                        <a href="#" className="text-navy hover:text-secondary transition-colors"><Linkedin size={32} /></a>
                        <a href="#" className="text-navy hover:text-secondary transition-colors"><Github size={32} /></a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-navy-light/10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block font-button text-xs uppercase tracking-widest text-navy mb-2">Name <span className="text-red-500">*</span></label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full bg-[#F6F4EE] border border-gray-300 p-4 rounded-none focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-button text-xs uppercase tracking-widest text-navy mb-2">Email <span className="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full bg-[#F6F4EE] border border-gray-300 p-4 rounded-none focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                                placeholder="jane@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="org" className="block font-button text-xs uppercase tracking-widest text-navy mb-2">Organisation / Brand</label>
                            <input 
                                type="text" 
                                id="org" 
                                className="w-full bg-[#F6F4EE] border border-gray-300 p-4 rounded-none focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                                placeholder="Company Ltd"
                            />
                        </div>

                        <div>
                            <label htmlFor="topic" className="block font-button text-xs uppercase tracking-widest text-navy mb-2">How can we help?</label>
                            <div className="relative">
                                <select 
                                    id="topic"
                                    className="w-full bg-[#F6F4EE] border border-gray-300 p-4 rounded-none focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all appearance-none"
                                >
                                    <option>Financial Automation</option>
                                    <option>Dashboard Development</option>
                                    <option>Process Improvement</option>
                                    <option>Web Development</option>
                                    <option>General Inquiry</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-navy">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-button text-xs uppercase tracking-widest text-navy mb-2">Message</label>
                            <textarea 
                                id="message" 
                                rows={4}
                                className="w-full bg-[#F6F4EE] border border-gray-300 p-4 rounded-none focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-all"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" variant="primary" className="w-full md:w-auto">Send Message</Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;