import React, { useState } from 'react';
import { GenericStyle } from '../app_styles';

import Sidebar from './Sidebar';
import Header from "./Header";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export function AllPages() {
    const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    }
}));
const [open, setOpen] = useState(false);

const [darkMode, setDarkMode] = useState(true);
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        }
    });
    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return(
        <ThemeProvider theme={theme}>
            {/* <GenericStyle> */}
                {/* <NavigationBar /> */}
                <Header
                    handleDrawerToggle={handleDrawerToggle}
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
                <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
                {/* </GenericStyle> */}
        </ThemeProvider>
    )

}
