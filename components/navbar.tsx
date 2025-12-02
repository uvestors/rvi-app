import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";
// import NavigationLink from "./NavigationLink";
import Link from "next/link";
import React from "react";

// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/messages/en.json

function Navbar() {
  const t = useTranslations("Navigation");
  const items = [
    { name: t("about"), href: "#about" },
    { name: t("whyRwa"), href: "#why-rwa" },
    { name: t("mission"), href: "#mission" },
    { name: t("services"), href: "#services" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <React.Fragment>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-[#0B0F19]/90 backdrop-blur-md shadow-lg border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-pink-500 tracking-wider">
                RVI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {items.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <LocaleSwitcher />
              <Link
                href="#contact"
                className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-cyan-900/20"
              >
                Join Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
