/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
          extend: {
            colors: {
              navy: {
                75: "#eaf2ff",
                300: "#d7e6ff",
                600: "#9bb3de",
                800: "#213c6b",
              },
              tungston: {
                10: "#ffffff",
                75: "#f1f1f1",
                300: "#e1e1e1",
                400: "#b8b9bc",
                600: "#6f7175",
                700: "#414246",
              },
              info: {
                100: "#d1e4fd",
                600: "#0f6ff6",
                900: "#0047aa",
              },
              success: {
                100: "#d9f0e3",
                600: "#368559",
                900: "#0f6d38",
              },
              "": {
                "000": "#9c7007",
              },
              blue: {
                75: "#f4fbfe",
                300: "#e4f4fc",
                600: "#cae9f9",
                800: "#66b4de",
              },
              alert: {
                100: "#ffd1d1",
                600: "#e20000",
                900: "#ae0000",
              },
              yellow: {
                75: "#fefbf1",
                300: "#fdf4dd",
                600: "#fbeabc",
                800: "#ebc664",
              },
              purple: {
                75: "#f0eff6",
                300: "#d9d7e8",
                600: "#b2aed1",
                800: "#655da3",
              },
              salmonpink: {
                75: "#fdf5f5",
                300: "#f9e6e5",
                600: "#f4cccc",
                800: "#e89a99",
              },
              warning: {
                100: "#fffcdf",
                600: "#fdf48b",
                900: "#fbe604",
              },
            },
            fontFamily: {
              sans: ["Roboto", "sans-serif"],
            },
          },
        },
  plugins: [],
}

