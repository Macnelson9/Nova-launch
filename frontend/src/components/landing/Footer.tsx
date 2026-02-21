import { LANDING_SECTION_IDS } from "./sectionIds";
import { Newsletter } from "./shared";

export function Footer() {
  return (
    <footer id={LANDING_SECTION_IDS.footer} className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Stay informed</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Get release updates and deployment tips from the Nova team.
          </p>
          <div className="mt-5 max-w-md">
            <Newsletter />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900">Navigate</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href={`#${LANDING_SECTION_IDS.hero}`} data-scroll-link="true" className="hover:text-sky-700">Top</a></li>
              <li><a href={`#${LANDING_SECTION_IDS.features}`} data-scroll-link="true" className="hover:text-sky-700">Features</a></li>
              <li><a href={`#${LANDING_SECTION_IDS.faq}`} data-scroll-link="true" className="hover:text-sky-700">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li><a href="/deploy" className="hover:text-sky-700">Deploy app</a></li>
              <li><a href="/not-found" className="hover:text-sky-700">Status</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
