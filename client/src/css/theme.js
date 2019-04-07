import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FE6B8B',
            contrastText: "#fff"
        },
        secondary: {
            main: '#FF8E53',
            contrastText: "red"
        },
        default :{
          main : 'white'
        }
        //   error: '#121212',

    },
    typography: {
      useNextVariants: true,
      fontFamily: "Nunito Sans, Roboto, sans-serif"
    
    },
    text: { // Name of the rule
        color: 'white', // Some CSS
    }

});

export default theme;