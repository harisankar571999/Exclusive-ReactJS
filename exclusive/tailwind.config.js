/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
      
    extend: {
      fontFamily:{
        interReg:['"inter",san-serif'],
        poppinReg:['"poppins-reg",san-serif'],
        interBold:['"inter-bold",san-serif'],
        interSemi:['"inter-semibold",san-serif'],
        poppinSemi:['"poppin-semibold",san-serif'],
        poppinMed:['"poppin-med",san-serif'],
      }
    },
   
  },
  plugins: [],
}

