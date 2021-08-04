import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Brightness2, Brightness7 } from "@material-ui/icons";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Switch } from "react-router";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";

function MainLayout(props) {
  const history = useHistory();
  const [themeMode, setThemeMode] = useState("light");
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "light" ? "#0093D5" : "#363A3F",
      },
    },
  });

  const handleLightMode = () => {
    setThemeMode("light");
  };
  const handleDarkMode = () => {
    setThemeMode("dark");
  };

  const handleLinkToNewsPage = () => {
    dispatch(GlobalActions.loadingPage(true));
    setTimeout(() => {
      dispatch(GlobalActions.loadingPage(false));
    }, 2000);
    history.push("/news");
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      "& > header": {
        "& .MuiIconButton-root": {
          outline: "none",
        },
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
      "& a": {
        color: "white",
        "&:hover": {
          textDecoration: "none",
        },
        "& button": {
          outline: "none",
        },
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.navbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Coronavirus (COVID-19) Dashboard</Link>
            </Typography>

            <Button color="inherit" onClick={handleLinkToNewsPage}>
              News
            </Button>

            {themeMode === "light" ? (
              <IconButton color="inherit" onClick={handleDarkMode}>
                <Brightness2 />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={handleLightMode}>
                <Brightness7 />
              </IconButton>
            )}

            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        {props.children}
      </ThemeProvider>
    </div>
  );
}
export default MainLayout;
