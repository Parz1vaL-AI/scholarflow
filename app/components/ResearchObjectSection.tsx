"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

const metrics = [
  { label: "Papers", value: "12" },
  { label: "Evidence Nodes", value: "53" },
  { label: "Knowledge Links", value: "18" },
  { label: "Generated Drafts", value: "4" },
];

const flowSteps = [
  "Literature",
  "Evidence",
  "Insights",
  "Knowledge Graph",
  "Research Output",
];

export default function ResearchObjectSection() {
  return (
    <Reveal>
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Research Object
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              The central unit of scientific research
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A Research Object accumulates literature,
              evidence, insights and generated outputs
              throughout the research lifecycle.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">

            {/* Left Card */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-start justify-between gap-6 border-b border-gray-100 pb-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Topic
                  </div>

                  <div className="mt-3 text-3xl font-bold tracking-tight">
                     AI-Native Research Workspace
                  </div>
                </div>

                <div className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                  Active
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <div className="text-3xl font-bold tracking-tight">
                      {metric.value}
                    </div>

                    <div className="mt-2 text-sm font-medium text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-gray-950 p-5 text-white">
                <div className="text-sm uppercase tracking-[0.18em] text-gray-400">
                  State
                </div>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  This research object accumulates literature,
                  evidence, insights and generated outputs into
                  a unified research workflow for scientific
                  knowledge synthesis.
                </p>
              </div>
            </motion.div>

            {/* Right Card */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Lifecycle
                  </div>

                  <div className="mt-3 text-2xl font-bold tracking-tight">
                    Research lifecycle
                  </div>
                </div>

                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
              </div>

              <div className="mt-8 space-y-4">
                {flowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm">
                      {index + 1}
                    </div>

                    <div className="flex-1 text-sm font-medium text-gray-800">
                      {step}
                    </div>

                    {index < flowSteps.length - 1 && (
                      <div className="text-lg text-gray-400">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}