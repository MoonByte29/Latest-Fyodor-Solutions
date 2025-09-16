import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", href: "/about" },
  {
    name: "Service",
    dropdown: [
      { name: "AI & Automation Consulting", href: "/ai-automation" },
      { name: "Opportunity Discovery", href: "/opportunity-discovery" },
      { name: "Cybersecurity & Compliance", href: "/cybersecurity-compilance" },
      { name: "Managed Delivery", href: "/managed-delivery" },
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
    <header className="relative z-50 flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo */}
      <Link className="text-xl md:text-2xl font-bold" to="/">
        <span className="text-white">Fyodor</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
          Solutions
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6 bg-neutral-900/70 px-6 py-2 rounded-full border border-neutral-700 backdrop-blur-md">
        {navItems.map((item, idx) =>
          item.dropdown ? (
            <div key={idx} className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // stop bubbling
                  setOpenDropdown(openDropdown === item.name ? null : item.name);
                }}
                className="flex items-center gap-1 px-3 py-1 text-sm text-neutral-300 hover:text-white"
                aria-expanded={openDropdown === item.name}
              >
                {item.name} <ChevronDown size={14} />
              </button>
              {openDropdown === item.name && (
                <div className="absolute top-full mt-2 left-0 min-w-[200px] bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg p-3 space-y-2">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`block px-3 py-1 text-sm rounded ${
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
              className={`px-3 py-1 text-sm rounded ${
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
      <div className="hidden md:flex">
        <button className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-4 py-2 rounded-full hover:bg-neutral-800 text-sm backdrop-blur-md">
          Get Started <ArrowRight size={16} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-700 py-6 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ease-in-out">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={idx} className="w-full text-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileOpenDropdown(
                      mobileOpenDropdown === item.name ? null : item.name
                    );
                  }}
                  className="text-white text-sm hover:text-blue-400 flex justify-center items-center gap-1 md:mx-20 sm:mx-5"
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

          <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-neutral-200 mt-2">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
