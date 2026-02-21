import { LANDING_SECTION_IDS } from "./sectionIds";
import { PillTag } from "./shared";

export function Hero() {
  return (
    <section id={LANDING_SECTION_IDS.hero} className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
      <div>
        <PillTag>Stellar Infrastructure</PillTag>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Launch production-ready Stellar assets in minutes.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Nova helps teams deploy tokens, manage metadata, and monitor transactions with a developer-first workflow.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/deploy"
            className="inline-flex h-11 items-center rounded-xl bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Start deploying
          </a>
          <a
            href={`#${LANDING_SECTION_IDS.howItWorks}`}
            data-scroll-link="true"
            className="inline-flex h-11 items-center rounded-xl border border-gray-300 px-5 text-sm font-semibold text-gray-700 transition hover:border-gray-400"
          >
            See how it works
          </a>
        </div>
      </div>

      <nav aria-label="Section navigation" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Jump to section</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a className="text-gray-700 hover:text-sky-700" href={`#${LANDING_SECTION_IDS.hero}`} data-scroll-link="true">Overview</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-sky-700" href={`#${LANDING_SECTION_IDS.features}`} data-scroll-link="true">Features</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-sky-700" href={`#${LANDING_SECTION_IDS.howItWorks}`} data-scroll-link="true">How it works</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-sky-700" href={`#${LANDING_SECTION_IDS.faq}`} data-scroll-link="true">FAQ</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-sky-700" href={`#${LANDING_SECTION_IDS.footer}`} data-scroll-link="true">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
