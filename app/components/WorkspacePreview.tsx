"use client";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Brain,
  Network,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function WorkspacePreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= 4) return 4;
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Reveal>
      <section
        id="workspace"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold">
              Interactive Research Workspace
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Watch how ScholarFlow plans research,
              retrieves literature, builds knowledge
              structures and generates evidence-grounded outputs.
            </p>

          </div>

          <motion.div
            className="mt-16 rounded-3xl border bg-white p-8 shadow-2xl"
            whileHover={{
              y: -6,
            }}
          >

            {/* Window Bar */}

            <div className="mb-8 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">

              {/* Literature */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  USER QUERY
                </div>

                <div className="mt-4 rounded-xl bg-gray-100 p-4 text-sm">
                  How do memory-augmented agents improve
                  long-term reasoning performance?
                </div>

                <div className="mt-8">

                  <div className="font-semibold">
                    Retrieved Sources
                  </div>

                  <div className="mt-3 space-y-2 text-sm">

                    {step >= 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-lg bg-gray-100 p-3"
                      >
                        ✓ MemGPT (2024)
                      </motion.div>
                    )}

                    {step >= 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-lg bg-gray-100 p-3"
                      >
                        ✓ GraphRAG (2024)
                      </motion.div>
                    )}

                    {step >= 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="rounded-lg bg-gray-100 p-3"
                      >
                        ✓ Voyager (2023)
                      </motion.div>
                    )}

                  </div>

                </div>

              </div>

              {/* Agent */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  AGENT EXECUTION
                </div>

                <div className="mt-6 space-y-4">

                  <StepCard
                    icon={<Brain size={18} />}
                    title="Task Planning"
                    active={step >= 1}
                  />

                  <StepCard
                    icon={<Search size={18} />}
                    title="Literature Retrieval"
                    active={step >= 2}
                  />

                  <StepCard
                    icon={<Network size={18} />}
                    title="Knowledge Graph Update"
                    active={step >= 3}
                  />

                  <StepCard
                    icon={<FileText size={18} />}
                    title="Research Writing"
                    active={step >= 4}
                  />

                </div>

                {/* Graph */}

                <div className="mt-10">

                  <div className="text-sm font-medium text-gray-500">
                    KNOWLEDGE GRAPH
                  </div>

                  <div className="mt-6 flex items-center justify-center">

                    <div className="space-y-3">

                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                        }}
                        className="rounded-full border px-4 py-2 text-center"
                      >
                        Memory
                      </motion.div>

                      <div className="text-center text-gray-400">
                        ↕
                      </div>

                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                        }}
                        className="rounded-full border px-4 py-2 text-center"
                      >
                        RAG
                      </motion.div>

                      <div className="text-center text-gray-400">
                        ↕
                      </div>

                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 5,
                        }}
                        className="rounded-full border px-4 py-2 text-center"
                      >
                        Agent
                      </motion.div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Output */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  RESEARCH OUTPUT
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 p-5">

                  {step < 4 ? (
                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                      className="text-sm text-gray-500"
                    >
                      Agent is generating report...
                    </motion.div>
                  ) : (
                    <>
                      <div className="font-semibold">
                        Key Insight
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2 text-xs">

                        <span className="rounded-full bg-blue-100 px-2 py-1">
                          12 Papers
                        </span>

                        <span className="rounded-full bg-purple-100 px-2 py-1">
                          42 Citations
                        </span>

                        <span className="rounded-full bg-green-100 px-2 py-1">
                          Graph Updated
                        </span>

                      </div>

                      <p className="mt-4 text-sm leading-7 text-gray-600">
                        Persistent memory enables AI agents
                        to retain important findings across
                        sessions, improving reasoning
                        consistency, evidence reuse and
                        long-horizon task execution.
                      </p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700"
                      >
                        ✓ Report Generated Successfully
                      </motion.div>
                    </>
                  )}

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>
    </Reveal>
  );
}

function StepCard({
  icon,
  title,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  active: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      className={`flex items-center justify-between rounded-xl border p-4 transition-all ${
        active
          ? "border-green-200 bg-green-50"
          : "bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>

      {active && (
        <CheckCircle2
          size={18}
          className="text-green-600"
        />
      )}
    </motion.div>
  );
}