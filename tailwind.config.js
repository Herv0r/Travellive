/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'Raleway': ['Raleway', 'sans-serif'],
      'Nunito': ['Nunito', 'cursive']
    },
    extend: {
      colors: {
        primary1: '#1F292B',
        primary2: '#D7E7D0',
        primary3: '#FCFCFC',
        primary4: '#F2F8F0',
        secondary1: '#B3C8AA',
        secondary2: '#10181A',
        secondary3: '#2C3D40',
        secondary4: '#EEEEEE',
        secondary5: '#C0C0C0',
        secondary6: '#FC3B3B',
      },
      backgroundImage: {
        'img-bg1': "url('./images/islas.jpg')",
        'img-bg2': "url('./images/dessert1.jpg')",
        'img-bg3': "url('./images/city1.jpg')",
        'img-bg4': "url('./images/mountains1.jpg')",
        'img-bg5': "url('./images/mountains3.jpg')"
      }
    },
  },
  plugins: [],
}

