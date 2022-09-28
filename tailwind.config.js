/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#FBFAFF",
        "linear-gradient": "linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)",
        "primary-400": "#240D57",
        "primary-300": "#501FC1",
        "primary-200": "#8456EC",
        "primary-100": "#E87BF8",
        "secondary-300": "#CCB6FF",
        "secondary-200": "#EDE5FF",
        "secondary-100": "#F6F2FF",
        "alert-400": "#00805E",
        "alert-300": "#D3FFE2",
        "alert-200": "#E61445",
        "alert-100": "#FFD7E0",
        "custom-neutral-600": "#4F4F4F",
        "custom-neutral-500": "#828282",
        "custom-neutral-400": "rgba(189, 189, 189, 1)",
        "custom-neutral-300": "#E0E0E0",
        "custom-neutral-200": "#F2F2F2",
        "custom-neutral-100": "rgba(251, 250, 255, 1)",
      }
    },
  },
  plugins: [],
};
