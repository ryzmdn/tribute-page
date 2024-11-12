import { About } from "@/components/About";
import { Avatar } from "@/components/Avatar";
import { List } from "@/components/List";
import { QuotesCarousel } from "@/components/Quotes";
import { quotes } from "@/assets/quotes";

export default function App() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:py-8 lg:px-8">
      <div className="space-y-10 max-w-3xl mx-auto">
        <header className="w-full">
          <Avatar />
        </header>
        <section className="w-full space-y-3">
          <div>
            <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">About</p>
            <h2 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Summary</h2>
          </div>
          <About />
        </section>
        <section className="w-full space-y-3">
          <h2 className="mt-14 text-pretty text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">Achievements and Timeline</h2>
          <div>
            <p className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
              Throughout his life, Einstein published hundreds of books and
              articles. He published more than 300 scientific papers and 150
              non-scientific papers. On 5 December 2014, a number of
              universities and archival institutions announced the release of
              Einstein&apos;s papers, which consisted of more than 30,000
              documents. His intellectual achievements and originality made the
              word &quot;Einstein&quot; synonymous with &quot;genius&quot;. In
              addition to his own work, he also collaborated with other
              scientists on complementary projects, including Bose-Einstein
              statistics, Einstein&apos;s refrigerator and so on.
            </p>
          </div>
          <List />
        </section>
        <section className="w-full space-y-16">
          <div className="relative w-full">
            <QuotesCarousel quotes={quotes} />
          </div>
          <div>
            <p className="text-base/7 text-gray-700 dark:text-gray-300">
              Einstein received many awards and honors, and in 1922, he was
              awarded the 1921 Nobel Prize in Physics &quot;for his services to
              Theoretical Physics, and especially for the discovery of the law
              of the photoelectric effect&quot;. None of the 1921 Nobel nominees met
              the criteria set by Alfred Nobel, so the 1921 Nobel Prize in
              Physics was awarded to Einstein in 1922.
            </p>
          </div>
        </section>
        <footer className="text-center w-full pt-2 pb-4 sm:pb-0">
          <a href="https://github.com/ryzmdn/tribute-page" target="_blank" rel="noopener">
            <svg fill="currentColor" viewBox="0 0 24 24" className="block mx-auto size-6 text-gray-600 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 mb-5" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <p className="text-sm text-gray-700 dark:text-gray-300">Want to know more information? Visit <a href="https://id.wikipedia.org/wiki/Albert_Einstein" target="_blank" className="font-medium hover:text-gray-600 dark:hover:text-gray-300 hover:underline">Wikipedia</a> for more details.</p>
        </footer>
      </div>
    </main>
  );
}
