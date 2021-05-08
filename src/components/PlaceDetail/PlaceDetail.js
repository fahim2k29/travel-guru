import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Grid } from "@material-ui/core";
import "./PlaceDetail.css";

const PlaceDetail = (props) => {
  const [place, setPlace] = useContext(UserContext);
  const { name, info, img } = props.place;

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "98%",
    borderRadius: "10px",
    margin: "2px",
  };

  const handlePlaceDetail = () => {
    setPlace(props.place);
  };

  return (
    <Grid item xs={12} md={3}>
      <div
        className="travel-area"
        onClick={handlePlaceDetail}
        style={backgroundImageStyle}
      >
        <h2 style={{ marginTop: "150px", textAlign: "left", fontFamily:"TimesNewRoman", color: "white" }}>
          {name}
        </h2>
      </div>
    </Grid>
  );
};

export default PlaceDetail;
