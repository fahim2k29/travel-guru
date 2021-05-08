import React from "react";
import { useParams } from "react-router";
import data from "../../fakeData/data";
import Header from "../Header/Header";
import logo from "../../images/Logo.png";
import "./Booking.css";
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextField, FormGroup } from "@material-ui/core";

const Booking = () => {
  const history = useHistory();
  const { placeId } = useParams();
  const selectedPlace = data.find((place) => place.id === parseInt(placeId));
  const { info, name, img } = selectedPlace;

  const handleAddTourInfo =(e) => {
    e.preventDefault();
    history.push("/booking/destination")
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${img})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
      }}
    >
      <Header img={logo} color="white"></Header>
      <Grid container item xs={12} >
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "20px 9%",
            textAlign: "center",
            fontFamily: "TimesNewRoman",
          }}
        >
          <h1 style={{ color: "white", fontSize: "60px" }}>{name}</h1>
          <h5 style={{ color: "white", fontWeight: "500", fontSize: "16px" }}>
            {info}
          </h5>
        </Grid>
        <Grid container item xs={12} md={6}>
          <form
            className="form"
            onSubmit={handleAddTourInfo}
            style={{
              marginTop: "100px",
              padding: "7% 9% 7% 7%",
              margin: "auto",
              width: "350px",
            }}
          >
            <FormGroup>
              <label>From</label>
              <input type="text" required />
              <label>To</label>
              <input type="text" required />
              <TextField
                id="date"
                label="Start"
                type="date"
                defaultValue="2021-12-24"
                required
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="End"
                type="date"
                required
                defaultValue="2021-12-28"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              /> 
             <br/>
              <Button type="submit" size="small" style={{ background: "orange", color: "white" }}>Save</Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
