import { activity } from "@/assets/data";
import { clsx } from "@/utils/clsx";
import { calculateYearsAgo } from "@/utils/date";

export function List() {
  return (
    <ul className="space-y-8 py-8">
      {activity.map((item, index) => (
        <li key={item.id} className="relative flex gap-x-4">
          <div className={clsx(index === activity.length - 1 ? "h-6" : "-bottom-8", "absolute left-0 top-0 flex w-6 justify-center")}>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
          </div>
          <div className={clsx(index !== 0 ? "mt-3" : "", "relative flex justify-center items-center h-6 w-6 flex-none rounded-full bg-gray-50 dark:bg-gray-900")}>
            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 dark:bg-gray-900 ring-1 ring-gray-300 dark:ring-gray-700" />
          </div>
          <div className="flex-auto rounded-md px-4 py-3 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
            <div className="flex justify-between gap-x-4">
              <h3 className="text-lg/relaxed text-gray-900 dark:text-gray-100 font-semibold">{item.year}</h3>
              <span className="flex-none py-0.5 text-xs/5 text-gray-500">{calculateYearsAgo(item.year)}</span>
            </div>
            <p className="text-sm/6 text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
