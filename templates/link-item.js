import { template } from '/helpers/template.js'
export const linkItem = template`<!-- Link -->
<div
  class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
>
  <p class="font-bold text-center text-veryDarkViolet md:text-left">
    ${0}
  </p>
  <div
    class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
  >
    <div class="font-bold text-cyan">${1}</div>
    <button
      class="p-2 px-8 text-white ${2} rounded-lg hover:opacity-70 focus:outline-none"
    >
      Copy
    </button>
  </div>
</div>`
