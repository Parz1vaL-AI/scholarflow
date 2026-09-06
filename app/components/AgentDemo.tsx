// C:/Users/lengion/scholarflow-showcase/app/components/AgentDemo.tsx
"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const workflowSteps = [
  {
    title: "User Goal",
    desc: "Capture the research question, scope and outcome target in a structured brief.",
  },
  {
    title: "Planning Agent",
    desc: "Break the objective into research tasks, retrieval strategies and reasoning checkpoints.",
  },
  {
    title: "Retrieval Agent",
    desc: "Collect papers, evidence snippets and supporting sources from the research corpus.",
  },
  {
    title: "Cross-Paper Reasoning",
    desc: "Compare claims across sources, reconcile contradictions and identify patterns.",
  },
  {
    title: "Knowledge Graph Update",
    desc: "Persist entities, relationships and evidence links into the shared memory graph.",
  },
  {
    title: "Research Writing",
    desc: "Generate a polished, evidence-grounded output with traceable citations.",
  },
];

export default function AgentDemo() {
  return (
    <Reveal>
      <section
        id="workflow"
        className="bg-gradient-to-b from-white to-gray-50 py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-500">
              Workflow
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              A research pipeline that feels orchestrated
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              ScholarFlow coordinates planning, retrieval, reasoning, memory
              updates and writing in one continuous timeline.
            </p>
          </div>

          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative rounded-[32px] border border-gray-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <div className="absolute left-10 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-gray-900 via-gray-300 to-transparent md:block" />

              <div className="grid gap-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={{ y: -4 }}
                    className="relative"
                  >
                    <div className="flex gap-4 md:items-stretch">
                      <div className="relative flex w-16 shrink-0 justify-center">
                        <div
                          className={`mt-5 h-5 w-5 rounded-full border-4 border-white shadow-lg ${
                            index === workflowSteps.length - 1
                              ? "bg-black"
                              : "bg-gray-900"
                          }`}
                        />
                      </div>

                      <div
                        className={`flex-1 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg ${
                          index === workflowSteps.length - 1
                            ? "bg-gray-950 text-white"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                            Step {index + 1}
                          </div>
                          <div className="text-xs font-medium text-gray-500">
                            {index === 0
                              ? "Entry point"
                              : index === workflowSteps.length - 1
                              ? "Output"
                              : "Automated"}
                          </div>
                        </div>

                        <div
                          className={`mt-4 text-xl font-semibold tracking-tight ${
                            index === workflowSteps.length - 1
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {step.title}
                        </div>

                        <p
                          className={`mt-3 max-w-3xl text-sm leading-7 ${
                            index === workflowSteps.length - 1
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}