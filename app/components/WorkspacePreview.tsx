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

              {/* Research Library */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  RESEARCH LIBRARY
                </div>

                <div className="mt-6 space-y-3 text-sm">

                  <div className="rounded-lg bg-gray-100 p-3">
                    ✓ MemGPT (2024)
                  </div>

                  <div className="rounded-lg bg-gray-100 p-3">
                    ✓ GraphRAG (2024)
                  </div>

                  <div className="rounded-lg bg-gray-100 p-3">
                    ✓ Voyager (2023)
                  </div>

                  <div className="rounded-lg bg-gray-100 p-3">
                    ✓ Reflexion (2023)
                  </div>

                  <div className="rounded-lg bg-gray-100 p-3">
                    ✓ AutoGen (2024)
                  </div>

                </div>

                <div className="mt-8 rounded-xl bg-black p-4 text-white">

                  <div className="text-xs uppercase tracking-wide text-gray-400">
                    Library Status
                  </div>

                  <div className="mt-3 flex justify-between text-sm">
                    <span>12 Papers</span>
                    <span>53 Evidence Nodes</span>
                  </div>

                </div>

              </div>

              {/* Research Object */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  RESEARCH OBJECT
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 p-5">

                  <div className="text-xs uppercase tracking-wide text-gray-400">
                    Topic
                  </div>

                  <div className="mt-2 text-xl font-semibold">
                    AI-Native Research Systems
                  </div>

                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-gray-100 p-4">
                    <div className="text-2xl font-bold">
                      12
                    </div>
                    <div className="text-xs text-gray-500">
                      Papers
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-4">
                    <div className="text-2xl font-bold">
                      53
                    </div>
                    <div className="text-xs text-gray-500">
                      Evidence
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-4">
                    <div className="text-2xl font-bold">
                      18
                    </div>
                    <div className="text-xs text-gray-500">
                      Knowledge Links
                    </div>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-4">
                    <div className="text-2xl font-bold">
                      4
                    </div>
                    <div className="text-xs text-gray-500">
                      Draft Versions
                    </div>
                  </div>

                </div>

                <div className="mt-8">

                  <div className="text-sm font-medium text-gray-500">
                    KNOWLEDGE FLOW
                  </div>

                  <div className="mt-6 flex items-center justify-center">

                    <div className="space-y-3">

                      <div className="rounded-full border px-5 py-2 text-center">
                        Literature
                      </div>

                      <div className="text-center text-gray-400">
                        ↓
                      </div>

                      <div className="rounded-full border px-5 py-2 text-center">
                        Evidence
                      </div>

                      <div className="text-center text-gray-400">
                        ↓
                      </div>

                      <div className="rounded-full border px-5 py-2 text-center">
                        Knowledge
                      </div>

                      <div className="text-center text-gray-400">
                        ↓
                      </div>

                      <div className="rounded-full bg-black px-5 py-2 text-center text-white">
                        Output
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Agent Workspace */}

              <div className="rounded-2xl border p-6">

                <div className="text-sm font-medium text-gray-500">
                  AGENT WORKSPACE
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
                    title="Cross-Paper Analysis"
                    active={step >= 3}
                  />

                  <StepCard
                    icon={<Network size={18} />}
                    title="Knowledge Graph Update"
                    active={step >= 4}
                  />

                  <StepCard
                    icon={<FileText size={18} />}
                    title="Research Writing"
                    active={step >= 4}
                  />

                </div>

                <div className="mt-10 rounded-xl bg-gray-50 p-5">

                  <div className="font-semibold">
                    Latest Output
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">

                    <span className="rounded-full bg-blue-100 px-2 py-1">
                      12 Papers
                    </span>

                    <span className="rounded-full bg-purple-100 px-2 py-1">
                      53 Evidence Nodes
                    </span>

                    <span className="rounded-full bg-green-100 px-2 py-1">
                      Draft Updated
                    </span>

                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">

                    Cross-paper synthesis completed.

                    Evidence from 12 papers has been linked
                    into the research object and incorporated
                    into the latest draft.

                  </p>

                  <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                    ✓ Draft Updated Successfully
                  </div>

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