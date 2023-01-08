/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   green: "#2a5c52",
    //   white: "#ffff",
    //   darkblue: "#111827",
    //   lightgray: "#E7EAE8",
    //   darkgray: "#6B7280",
    // },
    extend: {
      backgroundImage: {
        "content-pic":
          "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80')",
      },
      colors: {
        darkblue: {
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
