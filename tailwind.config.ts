import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        droplo: {
          purple: "#6941C6",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-inset': 'inset 0px 0px 0px 1px #D0D5DD',
      },
    },
  },
  plugins: [],
} satisfies Config;
