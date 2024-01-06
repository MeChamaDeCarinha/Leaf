import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                base: {
                    "100": "#FFE0FC",
                    "200": "#FFD0FB",
                    "300": "#FFBAF9",
                },
            },
        },
    },
    plugins: [],
};
export default config;
