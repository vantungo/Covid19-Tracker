import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
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
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    handleSetUser();
  }, []);

  const handleSetUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return localStorage.setItem(
        "user",
        JSON.stringify([{ username: "admin", password: "admin" }])
      );
    }
    return user;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkUserExist = (users) => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo.length > 0) {
      const checkUser = userInfo.find(
        (item) => item.username === users.username
      );
      if (checkUser) return checkUser;
    }
    return null;
  };

  const handleLogin = () => {
    const userChecked = checkUserExist(user);
    if (user.username === "" || user.password === "") {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Login failed!",
        text: "Please enter your username or password.",
        showConfirmButton: false,
      });
    } else if (
      user.username === userChecked?.username &&
      user.password === userChecked?.password
    ) {
      localStorage.setItem(
        "token",
        JSON.stringify({ name: user.username, token: true })
      );
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
      });
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } else {
      setTimeout(() => {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Login failed!",
          text: "Your username or password is incorrect.",
          showConfirmButton: false,
        });
      }, 2000);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/signup" variant="body2">
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
