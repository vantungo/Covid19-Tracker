import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import Swal from "sweetalert2";

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const errorValidate = {
  username: "",
  password: "",
  confirmPassword: "",
  isValid: false,
};

const checkUsernameExist = (username) => {
  let userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo.length > 0) {
    const checkUser = userInfo.find((item) => item.username === username);
    if (checkUser) return checkUser.username;
  }
  return null;
};

const handleValidation = ({ name, value }, password) => {
  if (name === "username") {
    const checkUsername = checkUsernameExist(value);
    if (value === "") {
      errorValidate.username = "Username is required!";
    }
    if (value === checkUsername) {
      errorValidate.username = "Username already taken";
    } else {
      errorValidate.username = "true";
    }
  } else if (name === "password") {
    if (value === "") {
      errorValidate.password = "Password is required!";
    } else {
      errorValidate.password = "true";
    }
  } else {
    if (value === "") {
      errorValidate.confirmPassword = "Confirm password is required!";
    } else if (value !== password) {
      errorValidate.confirmPassword = "Confirm password does not match";
    } else {
      errorValidate.confirmPassword = "true";
    }
  }
  if (
    errorValidate.username === "true" &&
    errorValidate.password === "true" &&
    errorValidate.confirmPassword === "true"
  ) {
    errorValidate.isValid = true;
  }
  return errorValidate;
};

function Register(props) {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    isValid: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrorMessage(handleValidation({ name, value }, user.password));
  };
  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("user"));
    if (!users) {
      users = [];
    }
    if (errorMessage.isValid) {
      users.push({ username: user.username, password: user.password });
      localStorage.setItem("user", JSON.stringify(users));
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Register successful!",
        showConfirmButton: false,
      });
      history.push("/login");
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
          Sign Up
        </Typography>
        <form className={classes.form} >
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
            error={
              errorMessage.username !== "" && errorMessage.username !== "true"
                ? true
                : false
            }
            helperText={
              errorMessage.username !== "" && errorMessage.username !== "true"
                ? errorMessage.username
                : ""
            }
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
            error={
              errorMessage.password !== "" && errorMessage.password !== "true"
                ? true
                : false
            }
            helperText={
              errorMessage.password !== "" && errorMessage.password !== "true"
                ? errorMessage.password
                : ""
            }
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            error={
              errorMessage.confirmPassword !== "" &&
              errorMessage.confirmPassword !== "true"
                ? true
                : false
            }
            helperText={
              errorMessage.confirmPassword !== "" &&
              errorMessage.confirmPassword !== "true"
                ? errorMessage.confirmPassword
                : ""
            }
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Register;
