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
          primary: "#7FC8A9",
          secondary: "#463730",
          white: '#F9F9F9'  
        
      },
    },
  },
  plugins: [],
} satisfies Config;
