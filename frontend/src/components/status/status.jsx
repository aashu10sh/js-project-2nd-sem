import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  function handleDelete() {
    console.log("Deleting", props.id);
  }

  return (
    <Card sx={{ minWidth: 275, margin: 2, backgroundColor: "black" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="grey" gutterBottom>
          {props.datetime}
        </Typography>
        <Typography variant="h5" component="div" style={{ color: "white" }}>
          {props.website}
        </Typography>

        <br />
        <Typography variant="body2" color={props.status ? "green" : "red"}>
          {props.status ? "Online" : "Offline"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: "white" }} onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
