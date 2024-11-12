import { LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';

export function Lightbox({ picture, onClose }) {
  if (!picture) return null;

  return (
    <div className="relative z-10">
      <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-screen max-h-screen overflow-y-auto sm:w-max sm:max-w-full">
        <div className="flex items-stretch justify-center text-center">
          <div className="flex w-full h-max transform text-left text-base transition md:max-w-2xl md:px-4 lg:max-w-4xl">
            <div className="relative flex w-full items-center overflow-hidden bg-gray-100 dark:bg-gray-900 px-4 pb-8 pt-14 sm:px-6 sm:pt-8 sm:rounded-lg sm:shadow-2xl md:p-6 lg:p-8">
              <button type="button" onClick={onClose} className="absolute right-4 top-6 text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-700 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={picture.image}
                      alt={picture.alt}
                      className="object-cover object-center w-min mx-auto rounded-lg sm:w-full sm:mx-0"
                    />
                  </div>
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:pr-12">Einstein&apos;s image</h4>

                  <section className="mt-3">
                    <div className="mt-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300">{picture.alt}</p>
                    </div>

                    <div className="inline-flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-300 font-medium mt-6">
                      <LinkIcon aria-hidden="true" className="w-4 h-4" />
                      Source: <a href={picture.image} target="_blank" rel="noopener" className="text-indigo-500 dark:text-indigo-400 hover:underline">Wikipedia</a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}