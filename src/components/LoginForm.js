import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { blue } from "@mui/material/colors";
import InputLabel from "@mui/material/InputLabel";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useStateValue } from "../StateProvider";
import constants from "../constants";
import { hash } from "../users";

const LoginForm = () => {
  // strictly for use on componentDidUpdate with useEffect
  const isMount = useRef(true);

  // Global State
  const [, dispatch] = useStateValue();

  // 'remember me' check state
  const [checked, setChecked] = useState(false);

  // Component specific internal states

  // username state change
  const [username, setUsername] = useState("");

  // password state change
  const [password, setPassword] = useState("");

  // username error state change
  const [usernameError, setUsernameError] = useState(false);

  // Password errot state change
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setChecked(e.target.checked);
    }
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      const errorCheck = () => {
        setUsernameError(username === "");
        setPasswordError(password === "");
      };
      errorCheck();
    }
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // hash

    for (let key of hash) {
      if (key[0] === username.toLowerCase() && atob(key[1]) === password) {
        dispatch({
          type: constants.LOGIN,
        });
        dispatch({
          type: constants.SETUSER,
          username: username[0].toUpperCase() + username.slice(1).toLowerCase(),
        });
      }
    }

    // clear out input fields if any error
    if (usernameError || passwordError) {
      setPassword("");
    } else {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Paper elevation={6} sx={{ borderRadius: "16px" }}>
      <CardContent>
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          style={{ marginTop: 20, marginBottom: 30 }}
        >
          <AccountCircleOutlinedIcon sx={{ color: "gray", fontSize: 70 }} />

          <Typography variant="h4">Sign In</Typography>
        </Grid>

        <form noValidate onSubmit={handleSubmit}>
          <Grid container rowSpacing={2} paddingX={3} direction={"column"}>
            <Grid
              item
              container
              rowSpacing={1}
              direction={"column"}
              alignItems={"center"}
            >
              <Grid item>
                <InputLabel>Username</InputLabel>
              </Grid>
              <Grid justifyContent={"center"} container item>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <input
                    id="username"
                    required
                    autoFocus
                    className="input"
                    autoComplete="off"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    error={usernameError}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid
              item
              container
              rowSpacing={1}
              direction={"column"}
              alignItems={"center"}
            >
              <Grid item>
                <InputLabel>Password</InputLabel>
              </Grid>
              <Grid justifyContent={"center"} container item>
                <Paper
                  elevation={4}
                  sx={{
                    borderRadius: "16px",
                    backgroundColor: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <input
                    id="password"
                    required
                    type="password"
                    className="input"
                    autoComplete="off"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    error={passwordError}
                  />
                </Paper>
              </Grid>
              <Grid
                container
                justifyContent={"right"}
                item
                alignSelf={"center"}
                px={1}
                mb={1}
              >
                <Link to="/" className="link">
                  Forgot your password?
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    sx={{
                      "&.Mui-checked": { color: blue[600] },
                    }}
                    name="checkbox"
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                label={'margin="normal"'}
                elevation={6}
                sx={{
                  backgroundColor: blue[600],
                  borderRadius: "16px",
                  width: "10rem",

                  // minWidth: "2rem",
                }}
              >
                Log in
              </Button>
            </Grid>
            <Grid item>
              <span className="link comment">Don't have an account? </span>
              <Link to="/" className="link register">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Paper>
  );
};
export default LoginForm;
