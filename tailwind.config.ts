import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "50px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
<<<<<<< HEAD
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        "red-1": "#FF0000",
        "grey-1": "#F7F7F7",
        "grey-2": "#8A8A8A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

=======
    },
    extend: {
      colors: {
        "white-1": "#F8F8F8",
        "grey-1": "#616161",
        "grey-2": "#E5E7EB",
        "blue-1": "#005EBE",
        "blue-2": "#E9F5FE",
        "blue-3": "#F5F7F9",
        "red-1": "#FF0000",
      },
    },
  },
  plugins: [],
};
export default config;
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
