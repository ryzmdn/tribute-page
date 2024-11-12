import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function QuotesCarousel({ quotes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? quotes.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex === quotes.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <>
      <figure key={quotes[currentIndex].id} className="border-l-2 border-indigo-600 dark:border-indigo-400 pl-9">
        <blockquote className="text-xl text-gray-900 dark:text-gray-100 font-semibold">
          <p>“{quotes[currentIndex].text}”</p>
        </blockquote>
        <figcaption className="mt-6 flex gap-x-4 text-sm/6">
          <img
            alt="Einstein in 1947"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/255px-Albert_Einstein_Head.jpg"
            className="h-6 w-6 flex-none rounded-full bg-gray-50 dark:bg-gray-950"
          />
          <div className="text-sm/6">
            <strong className="font-semibold text-gray-900 dark:text-gray-100">Albert Einstein</strong><span className="hidden text-gray-700 dark:text-gray-300 sm:inline-block sm:ml-1.5">– German physicist</span>
          </div>
        </figcaption>
      </figure>

      <div className="absolute right-5 bottom-0 inline-flex gap-x-2 justify-end items-center w-full">
        <span className="text-xs text-gray-500 mr-3">{currentIndex + 1} / {quotes.length}</span>
        <button type="button" onClick={handlePrevious} className="rounded-full bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700">
          <ArrowLeftIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-500" />
        </button>
        <button type="button" onClick={handleNext} className="rounded-full bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700">
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-500" />
        </button>
      </div>
    </>
  );
};
