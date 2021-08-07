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
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";

function MainLayout(props) {
  const history = useHistory();
  // const [themeMode, setThemeMode] = useState("light");
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);
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
    dispatch(GlobalActions.themeModePage("light"));
  };
  const handleDarkMode = () => {
    dispatch(GlobalActions.themeModePage("dark"));
  };

  const handleLinkToNewsPage = () => {
    dispatch(GlobalActions.loadingPage(true));
    setTimeout(() => {
      dispatch(GlobalActions.loadingPage(false));
    }, 2000);
    history.push("/news");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/news");
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      flexGrow: 1,
      "& > header": {
        "& .MuiIconButton-root": {
          outline: "none",
        },
      },
      "& button": {
        outline: "none",
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
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Coronavirus Dashboard</Link>
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
            {localStorage.getItem("token") ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
        {props.children}
      </ThemeProvider>
    </div>
  );
}
export default MainLayout;
