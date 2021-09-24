import { createTheme } from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000000'
        },
        secondary: {
            main: chayns.env.site.color
        },
        text: {
            primary: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            label: {
                color: '#ffffff',
            }
        }
    }
});

export default darkTheme;
