"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 blur-[150px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* Hero Content */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
            AI-Native Research Workspace
          </div>

          <motion.h1
            className="mt-8 text-7xl font-bold tracking-tight md:text-8xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            ScholarFlow
          </motion.h1>

          <p className="mx-auto mt-8 max-w-3xl text-2xl font-medium leading-10 text-gray-800">
            Plan Research. Build Knowledge. Generate Insight.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            ScholarFlow helps researchers organize literature,
            accumulate evidence, connect knowledge and generate
            evidence-grounded scientific outputs.
            <br />
            <br />
          </p>

          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
          >
            <a
              href="#workspace"
              className="rounded-xl bg-black px-8 py-4 text-white transition hover:scale-105"
            >
              Explore Workspace
            </a>

            <a
              href="#architecture"
              className="rounded-xl border bg-white px-8 py-4 transition hover:bg-gray-100"
            >
              View Architecture
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <div className="relative mt-24 h-[320px]">
          {/* Center */}
          <motion.div
            className="absolute left-1/2 top-10 w-[320px] -translate-x-1/2 rounded-3xl border bg-white p-6 shadow-2xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <div className="font-semibold">
              Research Workspace
            </div>

            <div className="mt-4 text-sm text-gray-600">
              A persistent environment for literature,
              evidence, knowledge and research outputs.
            </div>
          </motion.div>

          {/* Left */}
          <motion.div
            className="absolute left-[12%] top-24 w-[260px] rounded-3xl border bg-white p-5 shadow-xl"
            animate={{
              y: [0, 10, 0],
              rotate: [-6, -4, -6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <div className="font-semibold">
              Literature Retrieval
            </div>

            <div className="mt-3 text-sm text-gray-600">
              Search, summarize and compare research papers.
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="absolute right-[12%] top-24 w-[260px] rounded-3xl border bg-white p-5 shadow-xl"
            animate={{
              y: [0, 12, 0],
              rotate: [6, 4, 6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <div className="font-semibold">
              Knowledge Graph
            </div>

            <div className="mt-3 text-sm text-gray-600">
              Structured concepts, evidence and research links.
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="absolute left-1/2 top-48 w-[300px] -translate-x-1/2 rounded-3xl border bg-black p-5 text-white shadow-xl"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <div className="font-semibold">
              Research Output
            </div>

            <div className="mt-3 text-sm text-gray-300">
              Evidence-grounded reports, insights and drafts.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}