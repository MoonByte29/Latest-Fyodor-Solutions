"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.jpg";

const navItems = [
  { name: "About", href: "/about" },
  {
    name: "Service",
    dropdown: [
      {
        name: "AI & Automation Consulting",
        href: "/services/ai-&-automation-consulting",
      },
      {
        name: "Opportunity Discovery",
        href: "/services/opportunity-discovery",
      },
      {
        name: "Cybersecurity & Compliance",
        href: "/services/cybersecurity-&-compliance-compilance",
      },
      { name: "Managed Delivery", href: "/services/managed-delivery" },
      {
        name: "Implementation Services",
        href: "/services/implementation-services",
      },
      {
        name: "Enterprise App Development",
        href: "/services/enterprise-app-development",
      },
      { name: "Custom Solutions", href: "/services/custom-solutions" },
    ],
  },
  {
    name: "Industry",
    dropdown: [
      { name: "Banking", href: "/banking" },
      { name: "Finance", href: "/finance" },
      { name: "Insurance", href: "/insurance" },
      { name: "Automotive", href: "/automotive" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const location = useLocation();

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    function handleClickOutside() {
      setOpenDropdown(null);
      setMobileOpenDropdown(null);
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpenDropdown(null);
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-transparent w-full max-w-7xl mx-auto">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center space-x-2 text-xl md:text-2xl font-bold flex-shrink-0"
      >
        <img
          src={logo}
          alt="Fyodor Solutions Logo"
          className="h-8 w-8 md:h-10 md:w-10 object-contain"
        />
        <span className="text-white">Fyodor</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
          Solutions
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-1 bg-neutral-900/70 px-4 py-2 rounded-full border border-neutral-700 backdrop-blur-md flex-grow-0 mx-4">
        {navItems.map((item, idx) =>
          item.dropdown ? (
            <div
              key={idx}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(
                    openDropdown === item.name ? null : item.name
                  );
                }}
                className="flex items-center gap-1 px-3 py-1 text-sm text-neutral-300 hover:text-white whitespace-nowrap"
                aria-expanded={openDropdown === item.name}
              >
                {item.name} <ChevronDown size={14} />
              </button>
              {openDropdown === item.name && (
                <div className="absolute top-full mt-2 left-0 min-w-[200px] bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg p-3 space-y-2 z-50">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`block px-3 py-1 text-sm rounded whitespace-nowrap ${
                        location.pathname === sub.href
                          ? "text-blue-400 font-medium"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={idx}
              to={item.href}
              className={`px-3 py-1 text-sm rounded whitespace-nowrap ${
                location.pathname === item.href
                  ? "text-blue-400 font-medium"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </nav>

      {/* CTA Button (desktop only) */}
      <div className="hidden md:flex flex-shrink-0">
        <HashLink
          to="/contact#contact-form"
          scroll={(el) => {
            const yOffset = -80; // Adjust for header height
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-full hover:bg-neutral-800 text-sm backdrop-blur-md whitespace-nowrap"
        >
          Get Started <ArrowRight size={16} />
        </HashLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white flex-shrink-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-700 py-6 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ease-in-out z-50">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div
                key={idx}
                className="w-full text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileOpenDropdown(
                      mobileOpenDropdown === item.name ? null : item.name
                    );
                  }}
                  className="text-white text-sm hover:text-blue-400 flex justify-center items-center gap-1 w-full"
                >
                  {item.name} <ChevronDown size={14} />
                </button>
                {mobileOpenDropdown === item.name && (
                  <div className="mt-2 space-y-3 bg-neutral-800/50 mx-4 p-3 rounded-lg">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.href}
                        onClick={() => {
                          setMobileOpenDropdown(null);
                          setIsOpen(false);
                        }}
                        className={`block text-sm rounded ${
                          location.pathname === sub.href
                            ? "text-blue-400 font-medium"
                            : "text-neutral-300 hover:text-white"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm rounded ${
                  location.pathname === item.href
                    ? "text-blue-400 font-medium"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          <HashLink
            to="/contact#contact-form"
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-neutral-200 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get Started <ArrowRight size={16} />
          </HashLink>
        </div>
      )}
    </header>
  );
}
