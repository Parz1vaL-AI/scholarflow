// C:/Users/lengion/scholarflow-showcase/app/page.tsx
import Hero from "./components/Hero";
import WorkspacePreview from "./components/WorkspacePreview";
import DemoCaseSection from "./components/DemoCaseSection";
import ResearchOutput from "./components/ResearchOutput";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 w-max max-w-[calc(100%_-_2rem)] -translate-x-1/2 rounded-full border border-gray-200/80 bg-white/70 px-3 py-2 shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <div className="px-3 text-lg font-bold tracking-tight">
            ScholarFlow
          </div>

          <div className="hidden items-center gap-1 text-sm font-medium md:flex">
            <a
              href="#workspace"
              className="rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              Workspace
            </a>

            <a
              href="#research"
              className="rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              Case Study
            </a>

            <a
              href="#research-output"
              className="rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              Output
            </a>

            <a
              href="#architecture"
              className="rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              Architecture
            </a>

            <a
              href="#"
              className="rounded-full px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            >
              GitHub
            </a>

            <a
              href="#workspace"
              className="ml-1 rounded-full bg-black px-4 py-2 text-white transition-transform hover:scale-[1.03] hover:bg-gray-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-black">
        <Hero />
        <WorkspacePreview />
        <DemoCaseSection />
        <ResearchOutput />
        <Footer />
      </main>
    </>
  );
}