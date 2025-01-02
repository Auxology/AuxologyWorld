import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  		background: '#232946',
  		headline: '#fffffe',
			paragraph: '#b8c1ec',
			button: '#eebbc3',
			buttonText: '#232946',
      formBackground: '#D9D9D9',
      input: '#1E243C',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
