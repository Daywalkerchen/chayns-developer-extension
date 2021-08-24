import { createTheme } from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: chayns.env.site.color
        }
    },
    // overrides: {
    //     MuiInputBase: {
    //         focused: {
    //             border:
    //         },
    //     }
    // }
});

export default darkTheme;
