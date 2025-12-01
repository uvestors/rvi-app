import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeSwitcher";
// import NavigationLink from "./NavigationLink";
import Link from "next/link";
import React from "react";
import ColorfulButton from "./colorfulButton";

// https://github.com/amannn/next-intl/blob/main/examples/example-app-router/messages/en.json

function Navbar() {
  const t = useTranslations("Navigation");
  const items = [
    { name: t("about"), href: "#about" },
    { name: t("why"), href: "#why-rwa" },
    { name: t("core"), href: "#what-we-do" },
    { name: t("partners"), href: "#partners" },
  ];
  const isScrolled = false;

  return (
    <React.Fragment>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-slate-800 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              RVI <span className="font-light text-slate-400">Institute</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {items.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            <LocaleSwitcher />

            <Link href="#contact">
              <ColorfulButton variant="primary">{t("contact")}</ColorfulButton>
            </Link>
          </nav>

          {/* <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleLang}
              className="text-slate-300 flex items-center gap-1"
            >
              <span className="uppercase text-sm font-bold">{lang}</span>
              <Languages size={20} />
            </button>
            <button
              className="text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}
        </div>

        {/* {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 flex flex-col space-y-4 shadow-xl animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white py-2 block"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="primary"
              className="w-full"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              {t.nav.contact}
            </Button>
          </div>
        )} */}
      </header>
    </React.Fragment>
  );
}

export default Navbar;
