import { Grid } from "@material-ui/core";
import React from "react";
import logo from "../../images/Logo2.png";
import Header from "../Header/Header";
import Hotel from "../Hotel/Hotel";
import Map from "../Map/Map";
import hotels from "./../../fakeData/hotelData";

const Destination = (props) => {
  console.log(props);
  return (
    <div>
      <Header img={logo} color="black"></Header>

      <Grid container item xs={12} style={{borderTop:"1px solid gray"}}>
        <Grid item xs={12} md={6}>
          <div style={{ marginLeft: "15px"}}>
            <b style={{ color: "grey" }}>252 Stays Sep 17-20</b>
            <h3 style={{ margin: 0 }}>Stay in Cox's Bazar</h3>
          </div>

          {hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)}
        </Grid>
        <Grid item xs={12} md={6}>
          <Map></Map>
        </Grid>
      </Grid>
    </div>
  );
};

export default Destination;
