"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Globe,
  ArrowRight,
  ShieldCheck,
  Landmark,
  TrendingUp,
  Users,
  BookOpen,
  Building2,
  Mail,
  Menu,
  X,
  ChevronRight,
  Zap,
  Scale,
  Languages,
} from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * ------------------------------------------------------------------
 * I18N CONFIGURATION & TRANSLATIONS (Best Practice Pattern)
 * ------------------------------------------------------------------
 */
const TRANSLATIONS = {
  zh: {
    nav: {
      about: "关于 RVI",
      why: "RWA 价值",
      core: "核心业务",
      partners: "生态合作",
      contact: "联系我们",
    },
    hero: {
      badge: "连接澳大利亚 & 亚洲",
      title_line1: "推进真实世界资产",
      title_line2: "上链与国际标准建设",
      description:
        "Real Value Institute (RVI) — 致力于连接澳大利亚高质量资产与亚洲增长最快的资本市场，打造中立、可信的全球 RWA 生态系统。",
      btn_learn: "了解更多",
      btn_partner: "成为合作伙伴",
      globe_caption: "全球信任网络",
    },
    about: {
      title: "关于 RVI",
      p1_segment1: "RVI 是一家位于澳大利亚的",
      p1_highlight: "非营利机构",
      p1_segment2: "，致力于推动真实世界资产（RWA）的研究与行业标准。",
      p2: "我们的核心使命是建立一个中立、公信力强的行业生态平台，促进澳大利亚优质资产与亚洲资本之间的跨境合作。",
      quote: "“真实价值值得被看见，并以最透明、最高标准的方式被全球接触。”",
      badges: {
        standard: "建立行业标准",
        ecosystem: "跨境生态协同",
        compliance: "合规监管桥梁",
        research: "深度研究教育",
      },
      card_title: "我们的定位",
      card_points: [
        "RWA 研究与标准制定的先行者",
        "连接监管者、资产方与技术方的枢纽",
        "支持合规、透明、可持续的资产数字化",
      ],
    },
    why: {
      section_title: "为什么是现在？",
      section_desc:
        "全球金融正进入“真实价值回归”的时代。RVI 站在 RWA、澳洲资产与亚洲资本的交汇点。",
      cards: {
        rwa: {
          title: "Why RWA?",
          desc: "RWA 不是技术革命，而是信任革命。",
          points: [
            "让优质资产全球可见",
            "真实、可审计、可监管",
            "提高透明度，降低风险",
          ],
        },
        au: {
          title: "Why Australia?",
          desc: "全球最适合做“合规 RWA”的国家之一。",
          points: [
            "强监管结构 (ASIC, APRA)",
            "世界级资产 (能源, 矿产, 农业)",
            "真实、稳定、长期、透明",
          ],
        },
        asia: {
          title: "Why Asia?",
          desc: "增长最快的资本市场与 RWA 金融中心。",
          points: [
            "香港 & 新加坡作为监管前沿",
            "资本体量大，速度快",
            "对创新型真实资产需求旺",
          ],
        },
      },
    },
    mission: {
      badge: "我们的工作",
      title: "构建可信 RWA 生态",
      desc: "RVI 承担行业标准共建者、监管沟通桥梁、资产与资本链接者的多重角色。",
      cards: [
        {
          title: "研究与标准",
          desc: "真实世界资产研究、分类、合规框架分析及澳洲与亚太监管比较研究。",
        },
        {
          title: "生态协作",
          desc: "联合资产方、资本方、技术方，建立跨境协作联盟 (RWFF)。",
        },
        {
          title: "澳亚跨境桥梁",
          desc: "帮助机构理解澳洲资产，协助亚洲资本理解监管风控，推动合规项目落地。",
        },
        {
          title: "教育与知识库",
          desc: "发布行业白皮书，与大学合作课程，普及 RWA 知识体系。",
        },
      ],
    },
    founder: {
      title: "创始人寄语",
      quote:
        "“澳大利亚拥有世界顶级的真实资产，但需要一座可信的桥梁连接全球资本。RVI 不是做投机，不追噱头，我们专注长期价值、监管对齐与产业升级。希望与行业一起，共同打造一个健康、透明、以真实价值为核心的全球 RWA 生态。”",
      name: "Henry Xu",
      role: "Founder, Real Value Institute",
      subrole: "RWA Strategy & Ecosystem Builder",
    },
    partners: {
      title: "全球合作与生态",
      tags: [
        "大学 & 研究机构",
        "法律事务所",
        "监管机构",
        "金融机构",
        "能源/基建产业",
        "Tokenisation 技术方",
      ],
      cta_title: "加入 RWA 生态系统",
      cta_desc:
        "无论你是资产方、技术方、律所、投行还是研究机构，RVI 诚邀你共同建设未来的真实世界资产体系。",
      btn_join: "加入 RWA 生态联盟 (RWFF)",
    },
    footer: {
      desc: "推进真实世界资产上链与国际标准建设。",
      contact_title: "联系方式",
      links_title: "链接",
      links: ["关于我们", "研究报告", "RWFF 联盟", "隐私政策"],
      rights: "保留所有权利。",
      tagline: "为信任与透明而设计。",
    },
  },
  en: {
    nav: {
      about: "About RVI",
      why: "Why RWA",
      core: "What We Do",
      partners: "Partners",
      contact: "Contact Us",
    },
    hero: {
      badge: "Connecting Australia & Asia",
      title_line1: "Advancing Real-World Asset",
      title_line2: "Tokenisation & Global Standards",
      description:
        "Real Value Institute (RVI) — Dedicated to connecting Australia’s high-quality assets with Asia’s fast-growing capital markets, building a neutral and trusted global RWA ecosystem.",
      btn_learn: "Learn More",
      btn_partner: "Partner With Us",
      globe_caption: "Global Trust Network",
    },
    about: {
      title: "About RVI",
      p1_segment1: "RVI is an Australia-based ",
      p1_highlight: "non-profit institute",
      p1_segment2: " dedicated to RWA research and industry standards.",
      p2: "Our core mission is to build a neutral, credible industry ecosystem platform that facilitates cross-border collaboration between Australian premium assets and Asian capital.",
      quote:
        "“Real value should be seen, trusted, and accessible globally in the most transparent and standardized way.”",
      badges: {
        standard: "Industry Standards",
        ecosystem: "Cross-Border Eco",
        compliance: "Regulatory Bridge",
        research: "Research & Edu",
      },
      card_title: "Our Positioning",
      card_points: [
        "Pioneer in RWA research & standardization",
        "Hub connecting regulators, asset owners & tech",
        "Supporting compliant, transparent digitization",
      ],
    },
    why: {
      section_title: "Why Now?",
      section_desc:
        'Global finance is entering the era of "Real Value Return". RVI stands at the intersection of RWA, Australian assets, and Asian capital.',
      cards: {
        rwa: {
          title: "Why RWA?",
          desc: "RWA is not a tech revolution, but a trust revolution.",
          points: [
            "Global visibility for quality assets",
            "Real, auditable, regulated",
            "Higher transparency, lower risk",
          ],
        },
        au: {
          title: "Why Australia?",
          desc: "One of the best jurisdictions for compliant RWA.",
          points: [
            "Strong regulation (ASIC, APRA)",
            "World-class assets (Energy, Agri, Mining)",
            "Real, Stable, Long-term, Transparent",
          ],
        },
        asia: {
          title: "Why Asia?",
          desc: "Fastest growing capital market & RWA hub.",
          points: [
            "HK & SG as regulatory frontiers",
            "Large scale, fast-moving capital",
            "Strong demand for innovative real assets",
          ],
        },
      },
    },
    mission: {
      badge: "Our Work",
      title: "Building a Trusted RWA Ecosystem",
      desc: "RVI serves multiple roles: industry standard co-builder, regulatory bridge, and connector of assets and capital.",
      cards: [
        {
          title: "Research & Standards",
          desc: "RWA research, classification, compliance framework analysis, and AU-APAC regulatory comparison.",
        },
        {
          title: "Ecosystem Collab",
          desc: "Uniting asset owners, capital, and tech providers to build the Cross-Border Alliance (RWFF).",
        },
        {
          title: "AU-Asia Bridge",
          desc: "Helping institutions understand AU assets, assisting Asian capital with compliance, and driving pilot projects.",
        },
        {
          title: "Education Hub",
          desc: "Publishing white papers, university course collaborations, and popularizing RWA knowledge.",
        },
      ],
    },
    founder: {
      title: "Founder’s Message",
      quote:
        "“Australia holds some of the world’s most stable assets, but needs a trusted bridge to global capital. RVI is not about speculation; we focus on long-term value, regulatory alignment, and industry upgrading. We aim to build a healthy, transparent, real-value-centric global RWA ecosystem.”",
      name: "Henry Xu",
      role: "Founder, Real Value Institute",
      subrole: "RWA Strategy & Ecosystem Builder",
    },
    partners: {
      title: "Global Partners & Ecosystem",
      tags: [
        "Universities & Research",
        "Law Firms",
        "Regulators",
        "Financial Institutions",
        "Energy/Infra",
        "Tokenisation Tech",
      ],
      cta_title: "Join the RWA Ecosystem",
      cta_desc:
        "Whether you are an asset owner, tech provider, law firm, investment bank, or research body, RVI invites you to build the future of real-world assets together.",
      btn_join: "Join RWA Alliance (RWFF)",
    },
    footer: {
      desc: "Advancing Real-World Asset Tokenisation & Global Standards.",
      contact_title: "Contact",
      links_title: "Links",
      links: ["About Us", "Research", "RWFF Alliance", "Privacy Policy"],
      rights: "All rights reserved.",
      tagline: "Designed for Trust & Transparency.",
    },
  },
};

/**
 * ------------------------------------------------------------------
 * UTILITY COMPONENTS
 * ------------------------------------------------------------------
 */

const FadeInSection = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-900/20",
    secondary:
      "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
    outline:
      "border border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent",
    ghost: "hover:bg-slate-800 text-slate-300 hover:text-white",
    link: "text-blue-400 underline-offset-4 hover:underline",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-slate-800 bg-slate-950/50 text-slate-100 shadow-sm backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
    {children}
  </span>
);

/**
 * ------------------------------------------------------------------
 * MAIN LANDING PAGE COMPONENT
 * ------------------------------------------------------------------
 */

export default function RVILandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sentinelRef = useRef(null); // Ref for IntersectionObserver Sentinel
  const t1 = useTranslations("HomePage");

  console.log(t1("title"));

  // I18N State
  const [lang, setLang] = useState("zh");
  const t = TRANSLATIONS[lang];

  // Optimized Scroll Handler using IntersectionObserver
  // Replaces: window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // isScrolled is true when sentinel is NOT intersecting (it scrolled out of view)
        setIsScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px",
      }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, []);

  // --- NEW: SMOOTH SCROLL HANDLER WITH OFFSET ---
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Calculate header height offset (approx 80px)
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const navLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.why, href: "#why-rwa" },
    { name: t.nav.core, href: "#what-we-do" },
    { name: t.nav.partners, href: "#partners" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* --- SCROLL SENTINEL --- */}
      {/* This invisible element sits at the top. When it scrolls out of view (50px height), the navbar becomes solid. */}
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-[50px] pointer-events-none bg-transparent z-0"
        aria-hidden="true"
      />

      {/* --- BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* --- NAVBAR --- */}
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              RVI <span className="font-light text-slate-400">Institute</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 text-slate-300 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
            >
              <Languages size={16} />
              <span className="text-sm font-medium uppercase">{lang}</span>
            </button>

            <Button
              variant="primary"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              {t.nav.contact}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
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
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
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
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInSection>
            <Badge>{t.hero.badge}</Badge>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              {t.hero.title_line1}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {t.hero.title_line2}
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                className="h-12 px-8 text-base w-full sm:w-auto"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                {t.hero.btn_learn}
              </Button>
              <Button
                variant="secondary"
                className="h-12 px-8 text-base w-full sm:w-auto"
                onClick={(e) => handleNavClick(e, "#partners")}
              >
                {t.hero.btn_partner} <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeInSection>

          {/* Abstract Wireframe Globe Representation */}
          <FadeInSection
            delay={300}
            className="mt-16 relative mx-auto max-w-4xl h-64 md:h-96 opacity-80"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
            <div
              className="w-full h-full border border-slate-800/50 rounded-full flex items-center justify-center relative animate-spin-slow"
              style={{ animationDuration: "60s" }}
            >
              <div className="absolute w-[80%] h-[80%] border border-blue-500/20 rounded-full rotate-45"></div>
              <div className="absolute w-[60%] h-[60%] border border-purple-500/20 rounded-full -rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
              {/* Connecting lines */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -rotate-12"></div>
            </div>
            <p className="text-xs text-slate-500 mt-4 tracking-widest uppercase">
              {t.hero.globe_caption}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="py-20 bg-slate-900/50 border-y border-slate-800/50 relative z-10"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  {t.about.p1_segment1}
                  <span className="text-blue-400 font-semibold">
                    {t.about.p1_highlight}
                  </span>
                  {t.about.p1_segment2}
                </p>
                <p>{t.about.p2}</p>
                <blockquote className="border-l-4 border-purple-500 pl-4 py-1 italic text-slate-300 bg-slate-800/30 rounded-r">
                  {t.about.quote}
                </blockquote>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{t.about.badges.standard}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t.about.badges.ecosystem}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">{t.about.badges.compliance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">{t.about.badges.research}</span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <Card className="p-8 relative bg-slate-950 border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  {t.about.card_title}
                </h3>
                <ul className="space-y-3">
                  {t.about.card_points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- WHY TRILOGY SECTION (RWA, Australia, Asia) --- */}
      <section id="why-rwa" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.why.section_title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t.why.section_desc}
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Why RWA */}
            <FadeInSection delay={0}>
              <Card className="p-6 hover:border-blue-500/50 transition-colors group h-full">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.why.cards.rwa.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t.why.cards.rwa.desc}
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {t.why.cards.rwa.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight
                        size={14}
                        className="text-blue-500 flex-shrink-0"
                      />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInSection>

            {/* Card 2: Why Australia */}
            <FadeInSection delay={150}>
              <Card className="p-6 hover:border-green-500/50 transition-colors group h-full">
                <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                  <Landmark size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.why.cards.au.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t.why.cards.au.desc}
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {t.why.cards.au.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight
                        size={14}
                        className="text-green-500 flex-shrink-0"
                      />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInSection>

            {/* Card 3: Why Asia */}
            <FadeInSection delay={300}>
              <Card className="p-6 hover:border-purple-500/50 transition-colors group h-full">
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t.why.cards.asia.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {t.why.cards.asia.desc}
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {t.why.cards.asia.points.map((p, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* --- MISSION & SERVICES --- */}
      <section id="what-we-do" className="py-24 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection className="mb-16">
            <span className="text-blue-500 font-semibold tracking-wide uppercase text-sm">
              {t.mission.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
              {t.mission.title}
            </h2>
            <p className="text-slate-400 max-w-3xl text-lg">{t.mission.desc}</p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.mission.cards.map((item, index) => {
              const icons = [
                <BookOpen className="w-8 h-8" />,
                <Users className="w-8 h-8" />,
                <Globe className="w-8 h-8" />,
                <Building2 className="w-8 h-8" />,
              ];
              const colors = [
                "text-blue-400",
                "text-purple-400",
                "text-indigo-400",
                "text-pink-400",
              ];

              return (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="p-6 border-slate-800 bg-slate-950 hover:-translate-y-1 transition-transform duration-300 h-full">
                    <div className={`mb-4 ${colors[index]}`}>
                      {icons[index]}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FOUNDER'S MESSAGE --- */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeInSection>
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
                  {/* Placeholder for Founder Image */}
                  <span className="text-2xl font-bold text-slate-600">HX</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {t.founder.title}
                  </h2>
                  <p className="text-lg text-slate-300 italic mb-6 leading-relaxed">
                    {t.founder.quote}
                  </p>
                  <div>
                    <div className="text-white font-semibold">
                      {t.founder.name}
                    </div>
                    <div className="text-blue-400 text-sm">
                      {t.founder.role}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">
                      {t.founder.subrole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- PARTNERS / JOIN US --- */}
      <section
        id="partners"
        className="py-20 border-t border-slate-800 bg-slate-950"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-white mb-12">
              {t.partners.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 opacity-70">
              {t.partners.tags.map((partner) => (
                <span
                  key={partner}
                  className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm md:text-base font-medium"
                >
                  {partner}
                </span>
              ))}
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t.partners.cta_title}
              </h3>
              <p className="text-slate-400 mb-8">{t.partners.cta_desc}</p>
              <Button
                variant="primary"
                className="h-12 px-8 text-lg"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                {t.partners.btn_join}
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- FOOTER --- */}
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
              <p className="text-slate-500 max-w-xs mb-6">{t.footer.desc}</p>
              <div className="flex space-x-4">
                {/* Social Icons Placeholders */}
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
                {t.footer.contact_title}
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
                {t.footer.links_title}
              </h4>
              <ul className="space-y-2 text-slate-500">
                {t.footer.links.map((link, i) => (
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
              {t.footer.rights}
            </p>
            <p className="mt-2 md:mt-0">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
