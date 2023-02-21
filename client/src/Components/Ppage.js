import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";
// import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getDataFromServer } from "../utils/dataFromServer"
import Title from "./Title"
import add_dynamic_components from '../utils/makeData'
import { Add_form_for_search } from '../utils/generic2'
import Clock from "./Clock"
import { useLocation } from 'react-router-dom';

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

export function PPage({ src_path = process.env.REACT_APP_MAIN_TABLE_ROUTE }) {
  let location_path = useLocation().pathname;
  if (location_path.split('/').length==2){
    location_path=process.env.REACT_APP_TPAGE_ROUTE
  }

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  //let to_host=src_path==null ? process.env.REACT_APP_MAIN_TABLE_ROUTE : src_path // if src_path!=null -> src_path else: get from config
  let host = process.env.REACT_APP_HOST + src_path
  //let next_page_route = '/Home/TPage/'
  const data = getDataFromServer(host);
  const [pk_search, setSearch] = useState("");


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Clock txt={process.env.REACT_APP_NAME_TIME} is_system_clock="true"></Clock>
          <Title message={process.env.REACT_APP_TITLE_MESSAGE} />

          {Add_form_for_search(process.env.REACT_APP_SEARCH_TEXT_1, process.env.REACT_APP_SYSTEM_FILTERS_LIST, location_path)}
          <br></br>
          <br></br>
          {data.map((item, index) =>
            add_dynamic_components(item, location_path, index)
          )}
          {/* <Content /> */}
        </main>
      </div>
    </ThemeProvider>
  );
}
