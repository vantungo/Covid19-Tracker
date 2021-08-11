import React from "react";
import { Link, useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { Brightness2, Brightness7 } from "@material-ui/icons";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";
import { useTranslation } from "react-i18next";
//import i18next from "i18next";

function MainLayout(props) {
  const history = useHistory();
  const themeMode = useSelector((state) => state.GlobalReducer.themeMode);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

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

  const handleTranslate = (lang) => {
    if (lang === "en") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("vi");
    }
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
    button: {
      minWidth: 0,
    },
    box: {
      display: "inline-flex",
      border: "solid 2px white",
      borderRadius: "1em",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.navbar}>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Dashboard</Link>
            </Typography>
            <Button color="inherit" onClick={handleLinkToNewsPage}>
              {t("News.1")}
            </Button>
            <Box className={classes.box}>
              <Button
                color="inherit"
                size="small"
                className={classes.button}
                onClick={() => handleTranslate("en")}
              >
                ENG
              </Button>
              <Typography component="p" style={{ margin: "0.1em 0.2em" }}>
                |
              </Typography>
              <Button
                color="inherit"
                size="small"
                className={classes.button}
                onClick={() => handleTranslate("vi")}
              >
                VIE
              </Button>
            </Box>
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
                {t("Logout.1")}
              </Button>
            ) : (
              <Button color="inherit" onClick={handleLogin}>
                {t("Login.1")}
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
