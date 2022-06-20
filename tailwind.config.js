/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/background-image.jpg')",
        'about': "url('./assets/images/about-image.jpg')",
        'contact': "url('./assets/images/contact-background.jpg')"
      },
      objectPosition: {
        'center-bottom': 'center bottom',
        'center-top': 'center top'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' }
        },
      },
      animation: {
        'slide': 'slide 3s',
      }
    },
  },
  plugins: [],
}
