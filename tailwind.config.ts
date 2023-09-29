import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
			lightblue: "#0895A3",
			darkpurple: "#7F56DA",
			darkblue: "#0F2851",
			darkgrey: "#F5F5F5",
      dark: "#121212",
      darkSecondary: "#fafafa",
      lightgrey: "#E1E5DE"
		},
		screens: {
			sm: "270px",
			md: "720px",
			lg: "1024px",
		},
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
