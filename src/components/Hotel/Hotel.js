import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import star from "../../images/Icon/star_1_.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "10px 130px 0px 50px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
  p: {
    color: "gray",
  },
}));

const Hotel = (props) => {
  const { name, img, price, rating, review } = props.hotel;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {name}
          </Typography>
          <div style={{ color: "gray", fontSize: "13px", lineHeight: "80%" }}>
            <p> 4 guests 2 bedrooms 2 beds 2 baths</p>
            <p> Wifi Air Condition Kitchen</p>
            <p> Cancellation fexibility available</p>
            <p
              style={{
                fontSize: "15px",
                color: "black",
                fontWeight: "500",
                wordSpacing: "45px",
              }}
            >
              <img src={star} alt={star} style={{ width: "13px" }}></img>
              {rating}({review}) ${price}/night
            </p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Hotel;
