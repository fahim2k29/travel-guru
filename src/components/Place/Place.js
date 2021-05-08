import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Grid, Button } from "@material-ui/core";
import places from "../../fakeData/data";
import { Link } from "react-router-dom";
import PlaceDetail from "./../PlaceDetail/PlaceDetail";

const Place = () => {
  const [place, setPlace] = useContext(UserContext);

  return (
    <Grid
      container
      item
      xs={12}
      justify="space-between"
      style={{ paddingRight: "20px" }}
    >
      <Grid
        item
        md={6}
        style={{
          padding: "20px 9%",
          textAlign: "center",
          fontFamily: "TimesNewRoman",
        }}
      >
        <h1 style={{ color: "white", fontSize: "60px" }}>{place.name}</h1>

        <h5 style={{ color: "white", fontWeight: "500", fontSize: "16px" }}>
          {place.info}
        </h5>

        <Link
          to={`/booking/${place.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button style={{ background: "orange" }} variant="contained">
            Booking
          </Button>
        </Link>
      </Grid>
      <Grid
        container
        item
        md={6}
        justify="center"
        spacing={4}
        style={{ marginTop: "100px", padding: "5px", cursor: "pointer" }}
      >
        {places.map(place => <PlaceDetail key={place.id} place={place}></PlaceDetail>
        )}
      </Grid>
      
    </Grid>
  );
};

export default Place;
