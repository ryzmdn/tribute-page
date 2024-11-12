import { useState, useEffect } from "react";
import { pictures } from "@/assets/pictures";
import { Lightbox } from "@/components/Lightbox";
import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export function Avatar() {
  const [image, setImage] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const handleImageClick = (picture) => {
    setImage(picture);
  };

  const closeLightbox = () => {
    setImage(null);
  };

  useEffect(() => {
    if (image) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [image]);

  return (
    <>
      <div className="block shrink-0 py-4 overflow-x-hidden">
        <div className="grid grid-cols-1 border-b border-gray-200 dark:border-gray-800 pb-8 md:grid-cols-4">
          <div className="flow-root">
            <div className="rounded-full bg-gray-900/5 dark:bg-gray-100/5 w-max p-2.5 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/5">
              <img
                alt="Einstein in 1947"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/255px-Albert_Einstein_Head.jpg"
                className="size-32 rounded-full object-cover object-left-top ring-1 ring-gray-900/10 dark:ring-gray-100/10"
              />
            </div>
          </div>
          <div className="col-span-3 text-gray-700 dark:text-gray-300">
            <div className="inline-flex justify-between items-center w-full">
              <h1 className="text-3xl text-pretty tracking-tight font-semibold text-gray-900 dark:text-gray-100 mt-4 md:leading-none md:mt-0">
                Albert Einstein
              </h1>
              <div>
                <button type="button" onClick={toggleTheme} className="rounded-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700">
                  {theme === "light" ? (
                    <SunIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-500" />
                  ) : (
                    <MoonIcon aria-hidden="true" className="h-4 w-4 flex-none text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <p className="text-xl/10 font-medium">German physicist</p>
            <p className="text-base/7 my-4 md:my-2">
              Albert Einstein was born in Ulm, Kingdom of Württemberg, German
              Empire, on March 14, 1879. His parents were Hermann Einstein,
              a sales agent and engineer, and Pauline Koch. In 1880, the family
              moved to Munich, where Einstein&apos;s father and uncle Jakob founded
              the Elektrotechnische Fabrik J. Einstein &amp; Cie, a company that
              manufactures electrical appliances by utilizing direct current.
            </p>
          </div>
        </div>
        <div className="relative custom-scrollbar inline-flex gap-x-5 items-center w-full py-8 whitespace-nowrap overflow-x-auto">
          {pictures.map((picture) => (
            <button key={picture.id} onClick={() => handleImageClick(picture)} className="group flex-shrink-0 flex justify-center items-center rounded-full bg-gray-900/5 dark:bg-gray-100/5 size-24 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10">
              <div className="group flex justify-center items-center size-20 rounded-full overflow-hidden">
                <img
                  alt={picture.alt}
                  src={picture.image}
                  className="w-full h-full rounded-full group-hover:scale-110 group-hover:translate-y-1 object-cover object-right-top ring-1 ring-gray-900/10 dark:ring-gray-100/10 transition-transform duration-300"
                />
              </div>
            </button>
          ))}
        </div> 
      </div>
      {image && <Lightbox picture={image} onClose={closeLightbox} />}
    </>
  );
}
