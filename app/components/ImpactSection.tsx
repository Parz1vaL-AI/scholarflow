// C:/Users/lengion/scholarflow-showcase/app/components/ImpactSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ImpactSection() {
  const metrics = [
    { value: "24+", label: "Research Objects Managed" },
    { value: "10K+", label: "Knowledge Nodes Created" },
    { value: "92%", label: "Evidence Links Maintained" },
    { value: "4x", label: "Generated Drafts" },
  ];

  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Research at scale
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Make every research session compound
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            ScholarFlow turns scattered sources and disconnected sessions into a
            measurable research advantage.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="text-5xl font-bold tracking-tight md:text-6xl">
                {metric.value}
              </div>

              <div className="mt-3 text-sm font-medium text-gray-500">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 rounded-3xl bg-black p-10 text-white md:p-14">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Vision
            </div>

            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Building the operating system for scientific discovery
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              ScholarFlow combines retrieval, memory, knowledge graphs and agent
              workflows into a unified research intelligence platform.
              Researchers gain a continuously evolving knowledge system that
              grows with every task.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}