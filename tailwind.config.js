/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1604px',
      },
      width:{
        506:"506px",
        780:"780px"

      },
      fontFamily: {
        'dm': ['DM Sans']
      },
      colors:{
        secondary:'#767676',
        primary:'#262626',
        third:'#6D6D6D',
        four:'#F5F5F3',
        five:'#979797',
        six:'#D8D8D8',
      },
      fontSize: {
        text39: '39px',
        text49: '49px',
        text25: '25px',
        
      },  
      spacing: {
        '644': '644px',
      }
    },
  },
  plugins: [],
}

