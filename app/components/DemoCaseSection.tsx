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
                Research Object Created
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Create a research object that becomes
                the central workspace for literature,
                evidence and generated knowledge.
              </p>

            </div>

            {/* STEP 02 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 02
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Agent Planning
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                The agent decomposes the research task
                and plans retrieval, analysis and writing
                strategies.
              </p>

            </div>

            {/* STEP 03 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 03
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

            {/* STEP 04 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 04
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Evidence Extraction
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Key findings, methods and conclusions
                are extracted and structured as
                reusable evidence.
              </p>

            </div>

            {/* STEP 05 */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="text-sm text-gray-400">
                STEP 05
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                Knowledge Graph Update
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Evidence is connected into a growing
                research graph that persists across
                research sessions.
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
                Generate literature reviews, reports
                and drafts grounded in accumulated
                evidence.
              </p>

            </div>

          </div>

          {/* Final Insight */}

          <div className="mt-16 rounded-[32px] bg-white p-10 text-black shadow-2xl">

            <div className="text-sm font-medium text-gray-500">
              FINAL SYNTHESIZED INSIGHT
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              Research Becomes a Continuously Improving Process
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700">
              ScholarFlow transforms isolated research
              activities into a persistent workflow
              where literature, evidence and generated
              outputs accumulate around the same
              research object.

              <br />
              <br />

              Each interaction contributes to a growing
              body of structured knowledge that can be
              reused, verified and expanded over time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Research Object
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Agent Workflow
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Knowledge Graph
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                Evidence Traceability
              </span>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}