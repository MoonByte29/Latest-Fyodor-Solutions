import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-3 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 bg-slate-900">
        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-4">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 text-sm">
                Info@FyodorSolutions.com
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300 text-sm">+91-7822922933</span>
            </div>
            <div className="flex items-start space-x-3 bg-slate-800/50 rounded-lg p-4">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              <span className="text-slate-300 text-sm leading-relaxed">
                <strong>INDIA:</strong> B1/E13, Block E, Mohan Cooperative
                Industrial Estate, Badarpur, New Delhi, 110044, India
              </span>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Industry", path: "/industry" },
                { label: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "AI & Automation Consulting",
                "Opportunity Discovery",
                "Implementation Services",
                "Cybersecurity & Compliance",
                "Managed Delivery",
                "Custom AI Solutions",
                "Enterprise App Development",
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`} 
                    className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Industry</h3>
            <ul className="space-y-2">
              {[
                "Automotive",
                "Healthcare",
                "Finance",
                "Government",
                "Construction",
                "Retail",
              ].map((industry, idx) => (
                <li key={idx}>
                  <Link
                    to={`/industry/${industry.toLowerCase()}`}
                    className="block text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Newsletter */}
          <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              placeholder="name@email.com"
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-64"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
            >
              Subscribe for newsletter
            </button>
          </form>

          {/* Copyright */}
          <p className="text-slate-500 text-sm mt-6">
            © {currentYear} Fyodor Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
