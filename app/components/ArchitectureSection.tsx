// C:/Users/lengion/scholarflow-showcase/app/components/ArchitectureSection.tsx
'use client';
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const nodes = [
  {
    title: "Memory",
    x: "left-[12%] top-[18%]",
  },
  {
    title: "Agent",
    x: "left-[72%] top-[18%]",
  },
  {
    title: "RAG",
    x: "left-1/2 top-[52%] -translate-x-1/2",
  },
  {
    title: "Evidence",
    x: "left-[36%] top-[74%]",
  },
  {
    title: "Writing",
    x: "left-[36%] top-[90%]",
  },
];

export default function ArchitectureSection() {
  return (
    <Reveal>
      <section id="architecture" className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Knowledge Graph
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              A graph that keeps research connected
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              ScholarFlow links memory, retrieval, evidence and writing into a
              persistent system for scientific research.
            </p>
          </div>

          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.08),_transparent_40%)]" />

              <div className="relative md:hidden">
                <div className="space-y-4">
                  {nodes.map((node, index) => (
                    <motion.div
                      key={node.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      viewport={{ once: true, margin: "-80px" }}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {node.title}
                          </div>
                          <div className="mt-1 text-xs text-gray-500">
                            Persistent research node
                          </div>
                        </div>
                        <div className="h-2.5 w-2.5 rounded-full bg-black shadow-[0_0_24px_rgba(59,130,246,0.35)]" />
                      </div>
                      {index < nodes.length - 1 && (
                        <div className="mt-4 h-px w-full bg-gradient-to-r from-gray-300 via-gray-300 to-transparent" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative hidden min-h-[640px] md:block md:min-h-[700px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="20"
                    y1="20"
                    x2="72"
                    y2="20"
                    className="stroke-gray-300"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="46"
                    y1="28"
                    x2="34"
                    y2="50"
                    className="stroke-gray-300"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="46"
                    y1="28"
                    x2="60"
                    y2="50"
                    className="stroke-gray-300"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="34"
                    y1="50"
                    x2="34"
                    y2="74"
                    className="stroke-gray-300"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="34"
                    y1="74"
                    x2="34"
                    y2="90"
                    className="stroke-gray-300"
                    strokeWidth="0.7"
                  />
                </svg>

                <div className="relative h-full min-h-[640px] md:min-h-[700px]">
                  {nodes.map((node, index) => (
                    <motion.div
                      key={node.title}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true, margin: "-80px" }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`absolute ${node.x} w-[180px] -translate-y-1/2 sm:w-[200px]`}
                    >
                      <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:border-gray-300 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold tracking-tight text-gray-900">
                            {node.title}
                          </div>
                          <div className="h-2.5 w-2.5 rounded-full bg-black shadow-[0_0_24px_rgba(59,130,246,0.35)]" />
                        </div>
                        <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-gray-900 to-gray-300" />
                      </div>
                    </motion.div>
                  ))}

                  <div className="absolute left-1/2 top-[32%] h-[32%] w-px -translate-x-1/2 bg-gradient-to-b from-gray-300 via-gray-300 to-transparent" />
                  <div className="absolute left-[33%] top-[28%] h-px w-[39%] bg-gradient-to-r from-gray-300 via-gray-300 to-transparent" />
                  <div className="absolute left-[33%] top-[50%] h-px w-[16%] -translate-y-1/2 bg-gradient-to-r from-gray-300 via-gray-300 to-transparent md:w-[14%]" />
                  <div className="absolute left-[33%] top-[74%] h-px w-[1px] bg-transparent" />

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="absolute left-1/2 top-[30%] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-gray-200 bg-gray-950 px-6 py-5 text-white shadow-2xl shadow-black/10"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                      Core Hub
                    </div>
                    <div className="mt-3 text-lg font-semibold tracking-tight">
                      Persistent research graph
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="absolute left-1/2 top-[56%] w-[260px] -translate-x-1/2 rounded-[28px] border border-gray-200 bg-white/95 px-6 py-5 shadow-lg backdrop-blur"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">Research Flow</div>
                      <div className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                        Connected
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      Evidence, memory and generation stay linked across every
                      research session.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}