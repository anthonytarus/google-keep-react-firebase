import React from "react";

function Skeleton() {
  return (
    <section className="p-7 md:p-16 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div
        role="status"
        class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
        </div>
      </div>
      <div
        role="status"
        class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
        </div>
      </div>
      <div
        role="status"
        class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
        </div>
      </div>
      <div
        role="status"
        class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
        </div>
      </div>
      <div
        role="status"
        class="p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full  w-12"></div>
        </div>
      </div>
    </section>
  );
}

export default Skeleton;
