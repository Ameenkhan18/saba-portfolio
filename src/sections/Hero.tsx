import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32"
    >
      <div className="section w-full">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-violet-500/30 blur-3xl" />

              <img
                src="https://i.pinimg.com/1200x/04/58/9c/04589c822b20eb7941e20e8ea073bfd9.jpg"
                alt="avatar"
                className="relative h-44 w-44 rounded-full border border-white/10 bg-black/40 p-2 shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient-shimmer">
              Saba KUlsum
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-(--muted)"
          >
            ECE Graduate | App and Software Developer |  AI Systems • Infrastructure • Automation | Building Intelligent Systems & Automation Projects
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-violet-500 px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-violet-400"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="glass rounded-full px-7 py-3 text-sm font-semibold transition-all hover:scale-105"
            >
              About Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-strong mx-auto mt-20 max-w-3xl rounded-[32px] p-8"
          >
            <div className="mb-8">
              <p className="text-xl font-medium text-white/90">
                Ask anything about Saba...
              </p>

              <p className="mt-2 text-sm text-(--muted)">
                AI • Full Stack • Automation • Cybersecurity • Machine Learning
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["Projects", "Skills", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-violet-500/20"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-full border border-white/10 bg-black/20 px-6 py-4 text-left text-sm text-white/40">
              Ask me anything about my work...
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
