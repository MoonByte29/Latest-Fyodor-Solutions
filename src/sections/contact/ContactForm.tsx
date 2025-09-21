import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, EmailTemplateParams } from "../../lib/emailjs";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  industry: string;
  jobTitle: string;
}

interface FormState {
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  message: string;
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

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    submitStatus: "idle",
    message: "",
  });

  // Refs for GSAP animation
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  // Auto-hide status messages after 5 seconds
  useEffect(() => {
    if (formState.submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          submitStatus: "idle",
          message: "",
        }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formState.submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormState({
      isSubmitting: true,
      submitStatus: "idle",
      message: "",
    });

    try {
      // Prepare the email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_company: formData.company,
        from_phone: formData.phone,
        from_email: formData.email,
        from_industry: formData.industry,
        from_job_title: formData.jobTitle,
        to_email: "your-email@example.com", // Replace with your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);

      setFormState({
        isSubmitting: false,
        submitStatus: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form data
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        industry: "",
        jobTitle: "",
      });

      // Animate form reset
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { scale: 0.98, opacity: 0.7 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
      }
    } catch (error) {
      console.error("Failed to send email:", error);

      setFormState({
        isSubmitting: false,
        submitStatus: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly.",
      });
    }
  };

  const StatusMessage = () => {
    if (formState.submitStatus === "idle") return null;

    const isSuccess = formState.submitStatus === "success";
    const Icon = isSuccess ? CheckCircle : AlertCircle;

    return (
      <div
        className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
          isSuccess
            ? "bg-emerald-900/20 border-emerald-500/30 text-emerald-200"
            : "bg-red-900/20 border-red-500/30 text-red-200"
        }`}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">{formState.message}</p>
      </div>
    );
  };

  return (
    <>
    <Toaster position="top-right" />
      <div
        id="contact-form"
        className="min-h-screen pt-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left side heading with GSAP */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <div
                ref={headingRef}
                className="text-center lg:text-left origin-center lg:origin-left"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight space-y-0">
                  <span className="block text-white">Let's</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 ml-0 lg:ml-5 mt-0">
                    Talk!
                  </span>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full lg:flex-1 max-w-4xl">
              <div className="bg-slate-900/70 backdrop-blur-md rounded-lg transition-all duration-500 ease-in-out border border-slate-700/40 shadow-[0_0_10px_rgba(59,130,246,0.15)] p-4 sm:p-6 md:p-8 lg:p-10">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Status Message */}
                  <StatusMessage />

                  {/* Row 1 - Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Row 2 - Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Company Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Row 3 - Industry and Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Industry
                      </label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 appearance-none cursor-pointer disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      >
                        <option
                          value=""
                          className="bg-slate-800 text-slate-400"
                        >
                          Select industry...
                        </option>
                        <option
                          value="technology"
                          className="bg-slate-800 text-white"
                        >
                          Technology
                        </option>
                        <option
                          value="finance"
                          className="bg-slate-800 text-white"
                        >
                          Finance & Banking
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
                        <option
                          value="retail"
                          className="bg-slate-800 text-white"
                        >
                          Retail & E-commerce
                        </option>
                        <option
                          value="education"
                          className="bg-slate-800 text-white"
                        >
                          Education
                        </option>
                        <option
                          value="consulting"
                          className="bg-slate-800 text-white"
                        >
                          Consulting
                        </option>
                        <option
                          value="other"
                          className="bg-slate-800 text-white"
                        >
                          Other
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-100/80 mb-1 sm:mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Your job title"
                        className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white/90 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400/40 transition-all duration-200 disabled:opacity-50"
                        required
                        disabled={formState.isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      disabled={formState.isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:from-blue-700 active:to-cyan-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {formState.isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        "Get Started Today"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
