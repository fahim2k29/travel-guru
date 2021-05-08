import React from "react";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./Header.css";
const Header = (props) => {
  const [place, setPlace, loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
        padding: "5px 20px",
      }}
    >
      <div>
        <Link to="/">
          <img style={{ height: "40px" }} src={logo} alt="" />
        </Link>
      </div>   

      <div
        className="header-right"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Link style={{ textDecoration: "none", color:`${props.color}`}} to="/">
          <p>Home</p>
        </Link>
        <Link style={{ textDecoration: "none", color:`${props.color}`}} to="/news">
          <p>News</p>
        </Link>
        <Link
          style={{ textDecoration: "none",color:`${props.color}`}}
          to="/booking/destination"
        >
          <p>Destination</p>
        </Link>
        <Link style={{ textDecoration: "none",color:`${props.color}` }} to="/blog">
          <p>Blog</p>
        </Link>
        <Link style={{ textDecoration: "none", color:`${props.color}` }} to="/contact">
          <p>Contact</p>
        </Link>
        
        
          {loggedInUser.email 
          ? 
          <Button onClick={()=>setLoggedInUser({})} size="small" style={{ background: "orange", color: "white" }}>
            Logout 
          </Button>

          :
          <Link style={{ textDecoration: "none", color: "white" }} to="/login">
            <Button size="small" style={{ background: "orange", color: "white" }}>
              Login
            </Button>
          </Link>
          }
          
      </div>
    </div>
  );
};

export default Header;
