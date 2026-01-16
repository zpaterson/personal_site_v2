import { createTheme } from "flowbite-react";

export const customTheme = createTheme({
  navbar: {
    link: {
      active: {
        on: "md:text-cyan-600",
        off: "text-gray-700 md:hover:text-cyan-600",
      },
    },
  },
});
