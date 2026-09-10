export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-16">

          <div className="max-w-sm">
            <div className="text-2xl font-bold tracking-tight">
              ScholarFlow
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              AI-Native Research Workspace for literature review,
              knowledge synthesis and evidence-grounded scientific writing.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Built for persistent scientific research.
            </p>
          </div>

          <div className="flex flex-wrap gap-16 sm:gap-24">

            <div>
              <h3 className="text-sm font-semibold">
                Product
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                <a
                  href="#workspace"
                  className="transition-colors hover:text-black"
                >
                  Workspace
                </a>

                <a
                  href="#research"
                  className="transition-colors hover:text-black"
                >
                  Case Study
                </a>

                <a
                  href="#architecture"
                  className="transition-colors hover:text-black"
                >
                  Architecture
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                Resources
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                <a
                  href="#"
                  className="transition-colors hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-sm text-gray-500">
          © 2025 ScholarFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}