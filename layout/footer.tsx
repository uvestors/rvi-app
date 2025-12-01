import { ArrowRight, Building2, Globe, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("HomePage");

  return (
    <footer
      id="contact"
      className="bg-slate-950 pt-16 pb-8 border-t border-slate-900 text-sm"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                R
              </div>
              <span className="text-lg font-bold text-white">
                Real Value Institute
              </span>
            </div>
            <p className="text-slate-500 max-w-xs mb-6">{t("footer.desc")}</p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowRight size={12} className="-rotate-45" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contact_title")}
            </h4>
            <ul className="space-y-3 text-slate-500">
              <li className="flex items-start">
                <Building2 size={16} className="mr-2 mt-0.5 text-blue-500" />
                <span>
                  Level 23, Salesforce Tower
                  <br />
                  180 George Street, Sydney NSW 2000
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-500" />
                <a
                  href="mailto:contact@rvi-australia.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@rvi-australia.org
                </a>
              </li>
              <li className="flex items-center">
                <Globe size={16} className="mr-2 text-blue-500" />
                <a
                  href="https://rvi-australia.org"
                  className="hover:text-blue-400 transition-colors"
                >
                  rvi-australia.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.links_title")}
            </h4>
            <ul className="space-y-2 text-slate-500">
              {t.raw("footer.links").map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Real Value Institute.{" "}
            {t("footer.rights")}
          </p>
          <p className="mt-2 md:mt-0">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
