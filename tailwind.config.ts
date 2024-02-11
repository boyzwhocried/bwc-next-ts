import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "spin-extra-slow": "spin 5s linear infinite",
      },
      colors: {
        text: "hsl(var(--text) / <alpha-value>)",
        textalt: "hsl(var(--text-alt) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        primary10: "hsl(var(--primary10) / <alpha-value>)",
        primary50: "hsl(var(--primary50) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        info: "hsl(var(--info) / <alpha-value>)",
        success: "hsl(var(--success) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)",
        danger: "hsl(var(--danger) / <alpha-value>)",
        link: "hsl(var(--link) / <alpha-value>)",
      },
    },
  },
  darkMode:'class',
  plugins: [],
}
export default config
