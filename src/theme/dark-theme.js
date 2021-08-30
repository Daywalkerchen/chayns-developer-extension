import { createTheme } from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: chayns.env.site.color
        }
    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: `1px solid ${chayns.env.site.color}`
                },
                '&:after': {
                    borderBottom: `1px solid ${chayns.env.site.color}`
                },
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: `1px solid ${chayns.env.site.color}`
                }
            },
        },
        MuiButton: {
            label: {
                color: '#fff',
            }
        }
    }
});

export default darkTheme;
