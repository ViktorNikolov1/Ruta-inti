import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'himalaya-blue': '#0f2e48',
                'prayer-gold': '#ecb100',
                'monastery-red': '#a63d40',
                'snow-white': '#f8fafc',
                'rock-gray': '#334155',
                'paper': '#fdfbf7',
            },
            fontFamily: {
                playfair: ['var(--font-playfair)', 'serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pan-slow': 'panSlow 20s infinite alternate linear',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                panSlow: {
                    '0%': { backgroundPosition: 'center top' },
                    '100%': { backgroundPosition: 'center bottom' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
