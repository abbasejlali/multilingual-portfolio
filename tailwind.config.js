/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/imgs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgmain: "rgb(248 248 248)",
        bgmain_dark: "rgb(52 53 58)",
        bgslider_dark: "rgb(73 75 80)",
        black300: "rgb(118 118 118)",
        white300: "rgb(187 187 187)",
        bgtitr: "rgb(0 0 0 / 4%)",
        bgtitr_dark: "rgb(255 255 255 / 4%)",
        subtitr: "rgb(51 51 51)",
        subtitr_dark: "rgb(149 149 149)",
        divider_light: "rgb(223 223 223)",
        divider_dark: "rgb(255 255 255 / 10%)",
        progressbar_light: "rgb(0 0 0 / 9%)",
        progressbar_dark: "rgb(255 255 255 / 9%)",
        border_comment: "rgb(229 237 244)",
        border_cardservice: "rgb(0 0 0 / 20%)",
        border_contactdark: "rgb(255 255 255 / 20%)",
        focus_input: "rgb(0 0 0 / 50%)",
      },
      keyframes: {
        progressbar_custome: {
          "0%": { width: "0%" },
          "100%": { width: "const(--progress-end)" },
        },
      },
      animation: {
        progressbar_custome: "progressbar_custome 1s linear",
      },
    },
  },
  plugins: [require("daisyui")],
};
