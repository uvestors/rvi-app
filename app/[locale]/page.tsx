"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Globe,
  Shield,
  Activity,
  TrendingUp,
  Users,
  BookOpen,
  ArrowRight,
  Mail,
  MapPin,
  GraduationCap,
  Scale,
  Factory,
  Cpu,
  Landmark,
  Handshake,
  Network,
  Briefcase,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/navbar";
import Link from "next/link";

// --- Particle Background Component (Visual Reference to PDF) ---
const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        // Colors from PDF: Pink/Magenta and Cyan/Blue
        this.color =
          Math.random() > 0.5 ? "rgba(0, 188, 212, " : "rgba(255, 77, 136, ";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + "0.8)";
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth / 15, 100); // Responsive count
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.15 - distance / 1500})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", () => {
      resizeCanvas();
      init();
    });

    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("HomePage");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-pink-500 selection:text-white">
      <Navbar />

      {/* SECTION 01: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 to-[#0B0F19] z-0"></div>
        <ParticleNetwork />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm">
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
              {t("hero.instituteName")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {t("hero.title1")} <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-pink-500">
              {t("hero.title2")}
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-gray-200 mb-3 tracking-wide">
            {t("hero.subtitle")}
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6 font-light max-w-2xl mx-auto">
            {t("hero.desc1")}
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-500 font-light tracking-wide uppercase">
            {t("hero.desc2")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#about"
              className="px-8 py-4 bg-white text-[#0B0F19] rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              {t("hero.btnLearn")} <ArrowRight size={18} />
            </a>
            <Link
              href="#contact"
              className="px-8 py-4 border border-white/20 hover:border-cyan-500/50 hover:bg-white/5 rounded-lg font-semibold text-white transition-all"
            >
              {t("hero.btnPartner")}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 02: ABOUT */}
      <section id="about" className="py-24 bg-[#0B0F19] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About RVI</h2>
              <h3 className="text-xl text-cyan-400 font-medium mb-6">
                A Non-Profit Institute Dedicated to RWA Research & Ecosystem
                Development
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-cyan-500 mb-8"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                RVI is an Australia-based non-profit organisation focused on
                advancing the future of digital finance through rigorous
                research and global collaboration.
              </p>

              <div className="mt-8 p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl">
                <p className="text-gray-300 italic font-medium text-lg">
                  "We believe:{" "}
                  <span className="text-white">
                    Real value should be seen, trusted, and accessible globally.
                  </span>
                  "
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative bg-[#0F1422] p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Research</h3>
                      <p className="text-sm text-gray-400">
                        Advancing research on Real-World Assets (RWA).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400 mt-1">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Standards</h3>
                      <p className="text-sm text-gray-400">
                        Building cross-border industry standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Ecosystem</h3>
                      <p className="text-sm text-gray-400">
                        Coordinating an ecosystem of institutions, regulators,
                        asset owners, and technology providers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400 mt-1">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Compliance</h3>
                      <p className="text-sm text-gray-400">
                        Supporting compliant, transparent and sustainable asset
                        tokenization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS 03-05: THE WHY TRILOGY */}
      <section
        id="why-rwa"
        className="py-24 bg-[#0F1422] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">
              The Strategic Rationale
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              Unlocking global value by connecting Australia's premium assets
              with Asia's dynamic capital through a trusted RWA framework.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Why RWA */}
            <div className="flex flex-col h-full bg-[#0B0F19] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>

              <div className="w-12 h-12 bg-cyan-900/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 flex-shrink-0">
                <Shield size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Why RWA?</h3>
              {/* Reduced font size for intro text */}
              <p className="text-cyan-400 text-sm font-medium mb-6 italic opacity-80">
                The world is entering the era of “value-backed digital finance.”
              </p>

              <div className="flex-grow space-y-4 mb-8">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                  RWA creates:
                </p>
                <ul className="space-y-3">
                  {/* Reduced font size for list items */}
                  {[
                    "Global accessibility for high-quality assets",
                    "Transparent, auditable, legally compliant investment models",
                    "Cross-border capital efficiency",
                    "Lower risk and higher trust through regulatory alignment",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-white font-medium text-sm">
                  RWA is not a technology revolution — it is a{" "}
                  <span className="text-cyan-400">trust revolution</span>.
                </p>
              </div>
            </div>

            {/* Why Australia */}
            <div className="flex flex-col h-full bg-[#0B0F19] p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>

              <div className="w-12 h-12 bg-pink-900/20 rounded-lg flex items-center justify-center mb-6 text-pink-400 flex-shrink-0">
                <MapPin size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Why Australia?
              </h3>
              <p className="text-pink-400 text-sm font-medium mb-6 italic opacity-80">
                Australia offers one of the world’s strongest environments for
                regulated RWA.
              </p>

              <div className="flex-grow space-y-4 mb-8">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                  World-class real assets:
                </p>
                <ul className="space-y-2 grid grid-cols-1">
                  {[
                    "Renewable energy (solar, wind)",
                    "Natural gas",
                    "Grid & infrastructure",
                    "Agriculture & livestock",
                    "Minerals (gold, copper, lithium)",
                    "Real estate",
                    "Carbon & environmental assets",
                    "Embedded network energy data",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-white font-medium text-sm">
                  These assets are:{" "}
                  <span className="text-pink-400">
                    Stable, transparent, auditable, well-regulated
                  </span>{" "}
                  — ideal for tokenisation.
                </p>
              </div>
            </div>

            {/* Why Asia */}
            <div className="flex flex-col h-full bg-[#0B0F19] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-900/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-100"></div>

              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-400 flex-shrink-0">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Why Asia?</h3>
              <p className="text-blue-400 text-sm font-medium mb-6 italic opacity-80">
                Asia is the fastest-growing capital region globally.
              </p>

              <div className="flex-grow space-y-6 mb-8">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">
                    Asian capital is:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Large in scale",
                      "Fast moving",
                      "Demand-driven",
                      "Open to innovative investment products",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">
                    Hong Kong & Singapore are:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "RWA regulatory sandbox centers",
                      "Asia’s digital asset issuance hubs",
                      "Global tokenisation financial gateways",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-white font-medium text-sm">
                  Australia supplies the assets. / Asia supplies the capital.{" "}
                  <span className="text-blue-400 block mt-1">
                    RVI builds the bridge.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: MISSION */}
      <section
        id="mission"
        className="py-20 relative overflow-hidden bg-[#0B0F19]"
      >
        {/* Background gradient splash */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold tracking-widest text-pink-500 uppercase mb-4">
            {t("mission.title")}
          </h2>
          <p className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            {t("mission.desc")}
          </p>

          <div className="bg-[#0B0F19]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-semibold text-white mb-8">
              {t("mission.servesTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-10">
              {(t.raw("mission.list") as any[]).map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-2 mr-3 flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
                  <span className="text-gray-300 text-lg font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* VALUES SUB-SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {t.raw("mission.values").map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl"
                >
                  <div className="text-cyan-400 font-bold text-xl mb-1">
                    {value.title}
                  </div>
                  <div className="text-gray-400 text-sm">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: WHAT WE DO */}
      <section id="services" className="py-24 bg-[#0F1422]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Block 1 */}
            <div className="p-8 bg-[#0B0F19] border border-white/5 rounded-xl hover:bg-white/[0.02] transition-colors">
              <div className="text-4xl font-bold text-white/10 mb-6">01</div>
              <h3 className="text-xl font-bold text-white mb-4">
                RWA Research & Standards Development
              </h3>
              <ul className="space-y-2">
                {[
                  "Cross-border regulatory research",
                  "RWA classification frameworks",
                  "Standardisation of asset authenticity & on-chain verification",
                  "White papers & policy discussions",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-400 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 2 */}
            <div className="p-8 bg-[#0B0F19] border border-white/5 rounded-xl hover:bg-white/[0.02] transition-colors">
              <div className="text-4xl font-bold text-white/10 mb-6">02</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Ecosystem Collaboration
              </h3>
              <ul className="space-y-2">
                {[
                  "Partner with institutions across the value chain",
                  "Create the RWFF (Real World Finance Forum) alliance",
                  "Connect regulated service providers, asset owners & capital partners",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-400 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 3 */}
            <div className="p-8 bg-[#0B0F19] border border-white/5 rounded-xl hover:bg-white/2 transition-colors">
              <div className="text-4xl font-bold text-white/10 mb-6">03</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Australia ↔ Asia Cross-Border Bridge
              </h3>
              <ul className="space-y-2">
                {[
                  "Help Asian institutions understand Australian assets",
                  "Help Australian industry understand RWA compliance frameworks",
                  "Facilitate compliant issuance & asset tokenisation pilot programs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-400 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Block 4 */}
            <div className="p-8 bg-[#0B0F19] border border-white/5 rounded-xl hover:bg-white/[0.02] transition-colors">
              <div className="text-4xl font-bold text-white/10 mb-6">04</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Education & Knowledge Hub
              </h3>
              <ul className="space-y-2">
                {[
                  "Courses, workshops, industry panels",
                  "University collaboration",
                  "Research publications",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start text-gray-400 text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMBINED SECTION: GLOBAL ECOSYSTEM */}
      <section
        id="contact"
        className="py-24 bg-[#0B0F19] relative border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Global Ecosystem & Partnerships
            </h2>
            <p className="text-gray-400 text-lg">
              Connecting the leaders of the real-world asset revolution.
            </p>
          </div>

          {/* PART 1: PARTNERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: GraduationCap,
                title: "Academic & Research",
                text: "Universities & research bodies",
              },
              {
                icon: Scale,
                title: "Legal & Regulatory",
                text: "Legal & regulatory experts",
              },
              {
                icon: Factory,
                title: "Asset Owners",
                text: "Energy, infrastructure, agriculture & mining",
              },
              {
                icon: Cpu,
                title: "Technology Partners",
                text: "Web3 & tokenisation technology companies",
              },
              {
                icon: Landmark,
                title: "Capital Partners",
                text: "Family offices & institutional capital",
              },
              {
                icon: Globe,
                title: "RWA Hubs",
                text: "Hong Kong / Singapore RWA hubs",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#0F1422]/80 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-cyan-500/30 shadow-[0_0_15px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                    <item.icon size={32} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PART 3: JOIN THE ECOSYSTEM (ROLES + FORM) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Left Column: Roles */}
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Who Should Join?
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-cyan-500 mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you are building the future of finance or managing
                  world-class assets, RVI invites you to shape the future of
                  real-world asset tokenisation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Factory, text: "Asset Owner" },
                  { icon: Scale, text: "Regulator" },
                  { icon: Briefcase, text: "Lawyer or Auditor" },
                  { icon: Cpu, text: "Web3 Builder" },
                  { icon: TrendingUp, text: "Investor" },
                  { icon: GraduationCap, text: "University / Research" },
                  { icon: Landmark, text: "Financial Institution" },
                ].map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-[#0F1422] rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors"
                  >
                    <role.icon className="text-cyan-400 mr-3" size={20} />
                    <span className="text-gray-300 font-medium">
                      {role.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-[#0B0F19] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Start the Conversation
                </h3>
                <p className="text-gray-400 mb-8">
                  Join our network of industry leaders and pioneers.
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-[#0F1422] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                      Organization Type
                    </label>
                    <div className="relative">
                      <select className="w-full bg-[#0F1422] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer">
                        <option>Select your role...</option>
                        <option>Asset Owner</option>
                        <option>Financial Institution</option>
                        <option>Technology Partner</option>
                        <option>Regulator</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-cyan-900/20 mt-2 flex items-center justify-center gap-2 group">
                    Join the RWA Ecosystem{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: FOUNDER MESSAGE (Moved to bottom) */}
      <section className="py-24 bg-gradient-to-r from-[#0B0F19] to-[#0D121E] relative border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left: Founder Info */}
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full p-1 mb-6">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center">
                  <Activity className="text-white w-10 h-10" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Henry Xu</h3>
              <p className="text-cyan-400 font-medium mb-4">
                Founder, Real Value Institute
              </p>
              <div className="inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <p className="text-xs text-gray-400 tracking-wide uppercase">
                  RWA Strategy & Ecosystem Builder
                </p>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="w-full md:w-2/3 relative">
              <div className="absolute -top-6 -left-6 text-6xl text-white/5 font-serif">
                “
              </div>
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6 relative z-10">
                <p>
                  "Australia holds some of the world’s most stable, transparent
                  and high-quality assets, and they deserve global visibility."
                </p>
                <p>
                  "Our mission is{" "}
                  <span className="text-white font-semibold">
                    not speculation
                  </span>{" "}
                  but long-term, standards-based, regulatory-aligned industry
                  development."
                </p>
                <p>
                  "RVI is here to help build a{" "}
                  <span className="text-cyan-400">
                    healthier, more transparent and trusted
                  </span>{" "}
                  global RWA ecosystem."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#05080F] pt-12 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">
                Real Value Institute
              </h4>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin
                  className="text-pink-500 mt-0.5 flex-shrink-0"
                  size={16}
                />
                <span>
                  Level 23, Salesforce Tower
                  <br />
                  180 George Street, Sydney NSW 2000, Australia
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-cyan-500 flex-shrink-0" size={16} />
                <a
                  href="mailto:contact@rvi-australia.org"
                  className="hover:text-white transition-colors"
                >
                  contact@rvi-australia.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Globe className="text-blue-500 flex-shrink-0" size={16} />
                <a
                  href="https://rvi-australia.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  rvi-australia.org
                </a>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-6">
              <div className="flex gap-4">
                {/* Social Icons - Using lucide-react icons for consistency */}
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all text-gray-400"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all text-gray-400"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 7.8 4.5c2.1-.1 3.2.4 3.2.4l-1.9 1.9c-3 3.8 2.5 8.5 6.2 6.1l2-2s1.5.5 1.5 2c1.5-1.5 2.5-3.5 2.5-3.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all text-gray-400"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all text-gray-400"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
              <div className="flex gap-6 text-gray-500 text-xs md:text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
              <div className="text-gray-600 text-xs">
                © {new Date().getFullYear()} Real Value Institute. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
