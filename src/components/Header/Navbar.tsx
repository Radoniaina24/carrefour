"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, LogIn, UserPlus, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/features/authSlice";
import { FaUser } from "react-icons/fa";
import { Language, useLanguageContext } from "@/context/LanguageContext";
import { NavItem, navItemsByLanguage } from "./menuData";

const Navbar = () => {
  const { language, setLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const user: any = useSelector(selectUser);
  const userRole = user?.user?.role || user?.role;

  const isAdmin =
    userRole === "admin" ||
    userRole === "super_admin" ||
    userRole === "candidate" ||
    userRole === "recruiter";

  const languages: Language[] = [
    { code: "fr", name: "Français", countryCode: "fr" },
    { code: "en", name: "English", countryCode: "gb" },
    { code: "de", name: "Deutsch", countryCode: "de" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navItemsByLanguage[language.code as "fr" | "en" | "de"];

  const pathname = usePathname();

  const handleLanguageChange = (language: Language) => {
    setLanguage(language);
    setIsLanguageDropdownOpen(false);
    // console.log(language.code);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        pathname !== "/" || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-blue-100"
          : "lg:bg-transparent bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748260405/carrefour-removebg-preview_pjn3yd.png"
              alt="Logo"
              width={160}
              height={60}
              priority
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-blue-900 hover:text-orange-600 hover:bg-blue-50 transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-blue-100 py-2 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-blue-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 ${
                      pathname !== "/" || isScrolled
                        ? "text-blue-700"
                        : "text-white "
                    } rounded-md text-sm font-medium hover:text-orange-600 hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 border-transparent hover:border-blue-200 ${
                  pathname !== "/" || isScrolled
                    ? "text-blue-700 bg-blue-50/50"
                    : "text-white bg-white/10 backdrop-blur-sm"
                } hover:bg-blue-50 transition-all duration-200 font-medium`}
              >
                <Image
                  width={20}
                  height={20}
                  src={`https://flagcdn.com/w40/${language.countryCode}.png`}
                  alt={language.name}
                  className="w-5 h-4 object-cover rounded-sm shadow-sm"
                />
                <span className="text-sm hidden sm:inline">
                  {language.code.toUpperCase()}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 overflow-hidden">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Globe className="w-4 h-4" />
                      <span className="text-xs font-medium uppercase tracking-wide">
                        Langue
                      </span>
                    </div>
                  </div>
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 ${
                        language.code === language.code
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-500"
                          : "text-gray-700"
                      }`}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${language.countryCode}.png`}
                        alt={language.name}
                        className="w-6 h-4 object-cover rounded-sm shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm">
                          {language.name}
                        </div>
                        <div className="text-xs text-gray-400 uppercase">
                          {language.code}
                        </div>
                      </div>
                      {language.code === language.code && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {user ? (
              <>
                <Link
                  href={isAdmin ? "/admin" : "/"}
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300 whitespace-nowrap cursor-pointer"
                >
                  <FaUser className="mr-1 inline-block" /> Mon Compte
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/connexion"}
                  className="ml-4 bg-gradient-to-r text-sm from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Se connecter
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-1 px-2 py-1 rounded-lg text-blue-900 hover:bg-blue-50 transition-colors duration-200"
              >
                <img
                  src={`https://flagcdn.com/w40/${language.countryCode}.png`}
                  alt={language.name}
                  className="w-5 h-4 object-cover rounded-sm shadow-sm"
                />
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-blue-50 transition-colors duration-200 ${
                        language.code === language.code
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="text-sm">{language.flag}</span>
                      <span className="text-xs font-medium">
                        {language.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-blue-900 hover:bg-blue-50 hover:text-orange-600 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md shadow-xl border-t border-blue-100">
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-orange-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 py-2 rounded-md text-sm text-blue-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-orange-600 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {user ? (
              <>
                <Link
                  href={isAdmin ? "/admin" : "/"}
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300 whitespace-nowrap cursor-pointer"
                >
                  <FaUser className="mr-1 inline-block" /> Mon Compte
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/connexion"}
                  className="ml-4 bg-gradient-to-r text-sm from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Se connecter
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
