import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "@material-ui/core";
import firebaseConfig from "./firebase.config";
import { UserContext } from "./../../App";
import Header from "../Header/Header";
import logo from "../../images/Logo2.png";
import "./Login.css";
import googleLogo from "../../images/Icon/google.png";
import fbLogo from "../../images/Icon/fb.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, useLocation } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" color="white">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Travel-guru.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"white",
    border: "1px solid #bfbfbf",
    boxShadow: "0 2px 4px 0px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.19)",
    padding:"15px",
    marginTop:"30px"
  },

  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

const Login = () => {
  const [place, setPlace, loggedInUser, setLoggedInUser] = useContext(
    UserContext
  );
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const classes = useStyles();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  //Fb sign in
  const handleFbSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {});
  };

  //Google sign in
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {});
  };

 const handleBlur = (e) =>{
  let isFieldValid = true;
  if (e.target.name === 'name') {
    isFieldValid = e.target.value.length > 4;
  }
  if (e.target.name === 'email') {
    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
  }
  if (e.target.name === 'password') {
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber = /\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;
  }
  if (isFieldValid) {
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
 }


//Create User with email and password
 const handleSubmit = (e) => {
  e.preventDefault();
  if (newUser && user.email && user.password) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {      
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      updateUsername(user.name);
      verifyEmail();
    })
    .catch((error) => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false
      setUser(newUserInfo);
      
    });
  }
  if (!newUser && user.email && user.password) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      history.replace(from);
      
    })
    .catch((error) => {
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false
      setUser(newUserInfo);
    });
  }
 }

 //update User Name
 const updateUsername = name =>{
  const user = firebase.auth().currentUser;

  user.updateProfile({
    displayName: name,
  }).then(function() {
    console.log("User Name Updated Successfuly")
  }).catch(function(error) {
    console.log(error);
  });
 }

 //send email verification link

 const verifyEmail = () =>{
   const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
 }

 //Reset password
 const resetPassword = (email) =>{
  const auth = firebase.auth(); 
  auth.sendPasswordResetEmail(email).then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.
  });
 }

  return (
 <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${place.img})`,
            height:"100vh",
            backgroundSize:"cover",
            backgroundPosition:"center",
            width:"100vw"
         }}>
      <Header img={logo} color="white"></Header>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
          {newUser ? 'Sign Up' : 'Sign In'}
          </Typography>          
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            
            {newUser && <TextField
              onBlur={handleBlur}
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
            />}
            <TextField
              onBlur={handleBlur}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
           
            />
            <TextField
              onBlur={handleBlur}
              // variant="outlined"
              // margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {newUser ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link style={{cursor:'pointer'}} onClick={()=>resetPassword(user.email)} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link style={{cursor:'pointer'}} onClick={()=> setNewUser(!newUser)} variant="body2">
                  {!newUser 
                  ? 
                  "Don't have an account? Sign Up"
                  :
                  "Already have an account? Sign In"
                  }
                </Link>
              </Grid>
            </Grid>
          </form>
          <p style={{color:'red', fontWeight:'500'}}>{user.error}</p>
          {user.success && <p style={{color:'green', fontWeight:'600'}}>User {newUser ? "created" : "LoggedIn"} successfuly</p>}
        </div>
        

      <div style={{ width: "300px", margin: "auto" }}>
        <p style={{ textAlign: "center", color:'white' }}>------------- or --------------</p>
        <div className="googleButton">
          <img
            src={fbLogo}
            alt=""
            style={{ width: "30px", height: "30px" }}
          ></img>
          <Button onClick={handleFbSignIn}>Continue with Facebook</Button>
        </div>
        <div className="googleButton">
          <img
            src={googleLogo}
            alt=""
            style={{ width: "30px", height: "30px" }}
          ></img>
          <Button onClick={handleGoogleSignIn}>Continue with Google</Button>
        </div>
      </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default Login;
