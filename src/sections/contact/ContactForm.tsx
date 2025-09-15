import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  jobTitle: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    jobTitle: "",
  });


  // Ref for GSAP animation
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { rotate: -15, y: -50, opacity: 0 },
        {
          rotate: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.6)",
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
      {/* Left side heading with GSAP */}
      <div
        ref={headingRef}
        className="text-6xl md:text-8xl font-extrabold leading-tight space-y-0 origin-left"
      >
        <span className="block text-white">Let's</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 ml-5 mt-0">
          Talk!
        </span>
      </div>

      {/* Right side form */}
      <div
        className="flex-1 max-w-3xl relative"
      >
        <div
          className="bg-slate-900/70 backdrop-blur-md rounded-lg transition-all duration-500 ease-in-out border border-slate-700/40 shadow-[0_0_10px_rgba(59,130,246,0.15)] p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Company Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Company Email"
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                >
                  <option value="" className="bg-slate-800 text-slate-400">
                    Select...
                  </option>
                  <option
                    value="technology"
                    className="bg-slate-800 text-white"
                  >
                    Technology
                  </option>
                  <option value="finance" className="bg-slate-800 text-white">
                    Finance
                  </option>
                  <option
                    value="healthcare"
                    className="bg-slate-800 text-white"
                  >
                    Healthcare
                  </option>
                  <option
                    value="manufacturing"
                    className="bg-slate-800 text-white"
                  >
                    Manufacturing
                  </option>
                  <option value="education" className="bg-slate-800 text-white">
                    Education
                  </option>
                  <option value="other" className="bg-slate-800 text-white">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-100/80 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-4 py-3 text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
