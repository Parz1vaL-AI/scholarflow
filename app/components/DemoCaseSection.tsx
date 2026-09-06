// C:/Users/lengion/scholarflow-showcase/app/components/DemoCaseSection.tsx

import Reveal from "./Reveal";

export default function DemoCaseSection() {
  return (
    <Reveal>
      <section id="research" className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <div className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300">
              End-to-End Research Workflow
            </div>

            <h2 className="mt-8 text-5xl font-bold md:text-6xl">
              From Research Question
              <br />
              to Scientific Insight
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
              Explore how ScholarFlow investigates a real research problem,
              accumulates evidence and generates evidence-grounded knowledge.
            </p>

          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-6">

            {/* STEP 01 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 01
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Research Question
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                How do memory-augmented agents improve
                long-horizon reasoning performance?
              </p>

            </div>

            {/* STEP 02 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 02
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Literature Retrieval
              </h3>

              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <div>MemGPT (2024)</div>
                <div>GraphRAG (2024)</div>
                <div>Voyager (2023)</div>
                <div>Reflexion (2023)</div>
              </div>

            </div>

            {/* STEP 03 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 03
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Cross-Paper Analysis
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Compare memory architectures,
                retrieval strategies and reasoning
                capabilities across studies.
              </p>

            </div>

            {/* STEP 04 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 04
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Knowledge Graph
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Connect concepts, evidence,
                methods and findings into a
                persistent research graph.
              </p>

            </div>

            {/* STEP 05 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 05
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Evidence Synthesis
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Identify recurring patterns
                and key findings across
                memory-augmented agent systems.
              </p>

            </div>

            {/* STEP 06 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 06
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Survey Draft
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Generate an evidence-grounded
                research report with citations
                and traceable reasoning.
              </p>

            </div>

          </div>

          {/* Final Insight */}

          <div className="mt-16 rounded-[32px] bg-white p-10 text-black shadow-2xl">

            <div className="text-sm font-medium text-gray-500">
              FINAL SYNTHESIZED INSIGHT
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              Memory-Augmented Agents Improve Long-Horizon Reasoning
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
              Across recent studies including MemGPT,
              GraphRAG, Voyager and Reflexion,
              memory-augmented agents consistently
              outperform context-only systems in
              multi-session reasoning, knowledge reuse
              and long-horizon task execution.

              Knowledge graphs further strengthen
              evidence traceability and persistent
              research accumulation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                MemGPT
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                GraphRAG
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Voyager
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Reflexion
              </span>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}