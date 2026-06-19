"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pb-32 pt-10"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">

        <div className="mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-violet-400">
            About Me
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">
            Building Digital{" "}
            <span className="text-gradient-shimmer">
              Experiences
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong overflow-hidden rounded-[32px]"
          >
            <div className="relative h-full">

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

              <Image
                src="https://i.pinimg.com/736x/b4/30/42/b43042fb3f4780ba08c6b90897566c75.jpg"
                alt="Saba Kulsum"
                width={800}
                height={1200}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 z-20 w-full p-8">

                <h3 className="text-3xl font-bold text-white">
                  Saba Kulsum
                </h3>

                <p className="mt-2 text-white/70">
                  App & Web Developer
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={16} />
                  Bengaluru, India
                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href="https://github.com/Ameenkhan18"
                    target="_blank"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-violet-500/20"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ameen-khan2"
                    target="_blank"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-violet-500/20"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="mailto:ameenkhann.2004@gmail.com"
                    className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-violet-500/20"
                  >
                    <Mail size={18} />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="glass-strong rounded-[32px] p-8">

              <span className="text-xs uppercase tracking-[0.4em] text-violet-400">
                INTRODUCTION
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Jack of all Trades.
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Electronics and Communication Engineering graduate with a strong foundation in core ECE subjects gained throughout four years of engineering, which helped me develop analytical thinking, problem-solving abilities, innovation, and design-oriented skills. Along with my core branch knowledge, I have a strong interest in the IT domain and aspire to build my career in the technology industry. During my BE journey, I actively trained in areas such as App & Web Development, Data Analytics, and Cybersecurity, which further strengthened my passion for IT. I am eager to apply my technical knowledge, continuously learn new technologies, and contribute to impactful real-world projects in the IT field..
              </p>

              <p className="mt-5 text-lg leading-relaxed text-white/70">
                My interests span across Full Stack Development,
                Machine Learning, Cybersecurity, Automation,
                APIs and intelligent systems.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="glass-strong rounded-[28px] p-6">
                <h4 className="text-xl font-bold">
                  Focus Areas
                </h4>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "AI",
                    "Automation",
                    "Web Apps",
                    "Machine Learning",
                    "Cybersecurity",
                    "APIs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-strong rounded-[28px] p-6">
                <h4 className="text-xl font-bold">
                  Current Goal
                </h4>

                <p className="mt-4 leading-relaxed text-white/70">
                  Building impactful products while continuously improving
                  in software engineering, scalable systems and AI development.
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
