"use client";
import React from "react";
import { useTranslations } from "next-intl";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  const f = useTranslations("footer");

  return (
    <footer
      className={`bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white ${className}`}
    >
      {/* Section principale */}
      {/* <div className="container mx-auto px-4 py-12">
        <div className="">
          <div className="flex justify-between">
            <div className="">
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/dikefxjpd/image/upload/v1753865346/logo_m3t5cg.jpg"
                  alt="Logo"
                  width={330}
                  height={300}
                  priority
                  className=" w-auto"
                />
              </Link>
            </div>
            <div></div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-blue-100 hover:text-orange-400  duration-300 hover:pl-2 transform transition-all"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Ligne de séparation */}
      <div className="border-t border-blue-700/50"></div>

      {/* Copyright */}
      <div className="px-4 py-6">
        <div className="flex justify-center items-center">
          <div className="text-blue-200 text-sm">
            © {currentYear} {f("copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
