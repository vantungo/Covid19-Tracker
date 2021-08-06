import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { GlobalActions } from "../../redux/slices/globalSlice";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  // const login = (e) => {
  //   if (username === "" && password === "") {
  //     alert("Enter username or password!");
  //   } else if (username === "admin" && password === "admin") {
  //     dispatch(GlobalActions.loadingPage(true));
  //     localStorage.setItem("token", true);
  //     setTimeout(() => {
  //       dispatch(GlobalActions.loadingPage(false));
  //     }, 2000);
  //     history.push("/");
  //   } else {
  //     Swal.fire({
  //       position: "center-center",
  //       icon: "error",
  //       title: "Login failed!",
  //       text: "Your email or password is incorrect.",
  //       showConfirmButton: false,
  //     });
  //   }
  // };

  const handleLinkToRegister = () => {
    history.push("/signup");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Ip
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="#" variant="body2" onClick={handleLinkToRegister}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
