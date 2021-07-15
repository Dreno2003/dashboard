module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      width: {
        99:'20em',
        98:'90vw',
        96:"45vw",
        97:'40vw',
        95:'182%',
        109:'47%',
        "desktop" : '12.5',
        "wid":"30%",
        "mem":'111%',
        'sub':'44%',
        'mearn':'126%',
        'jec':'21%'
      },

      colors: {

        myGreen:{
          100:'#32ed80',
          200:'#11c15b'
        },

        myBlue: {
          100: '#91baff',
          200: '#448aff'
        }
      },

      // margin

      margin: {
        29:'-10.45em',
        '-360':'-36px'
      },

      borderWidth: {
        "cus": '6px'
      },


      screens: {
        'xll': '1200px'
      }


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
