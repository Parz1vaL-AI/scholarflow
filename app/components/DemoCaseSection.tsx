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
              Explore how ScholarFlow transforms fragmented literature,
              evidence and notes into structured scientific knowledge.
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
                How can AI systems improve literature review,
                evidence synthesis and scientific knowledge discovery?
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
                <div>Research Paper A</div>
                <div>Research Paper B</div>
                <div>Research Paper C</div>
                <div>Research Paper D</div>
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
                Compare findings, methodologies and evidence
                across multiple studies.
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
                Connect concepts, evidence and insights
                into a structured research graph.
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
                Identify recurring patterns and generate
                high-confidence scientific insights.
              </p>

            </div>

            {/* STEP 06 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 06
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Research Output
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Generate evidence-grounded reports,
                literature reviews and survey drafts.
              </p>

            </div>

          </div>

          {/* Final Insight */}

          <div className="mt-16 rounded-[32px] bg-white p-10 text-black shadow-2xl">

            <div className="text-sm font-medium text-gray-500">
              FINAL SYNTHESIZED INSIGHT
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              Scientific Knowledge Emerges Through Evidence Synthesis
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
              Across multiple research studies, evidence synthesis reveals
              relationships and recurring patterns that are difficult to
              identify from individual papers alone.

              By integrating literature retrieval, cross-paper analysis,
              knowledge graphs and scientific writing, ScholarFlow transforms
              fragmented research activities into a unified research workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Literature Review
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Evidence Synthesis
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Knowledge Graph
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Scientific Writing
              </span>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}