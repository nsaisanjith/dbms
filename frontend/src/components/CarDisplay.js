import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { encode } from "base64-arraybuffer";
import axios from "axios";
import { withRouter } from "react-router-dom";
class CarDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  getItem = (name, value) => {
    return (
      <>
        <Grid item xs={12} style={{}}>
          <Grid item xs={6}>
            <Typography color="textSecondary" gutterBottom>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography style={{ fontSize: "30px" }}>{value}</Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  render() {
    return (
      <div>
        <Card style={{ margin: "1%" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {this.getItem("Car", this.props.data.name)}
              </Grid>
              <Grid item xs={4}>
                {this.getItem("Company", this.props.data.company)}
              </Grid>
              <Grid item xs={4} style={{ marginLeft: "10" }}>
                {
                  <img
                    src={
                      "data:image/png;base64," +
                      encode(this.props.data.image.data)
                    }
                    style={{ width: "150", height: "150" }}
                  />
                }
              </Grid>
              <Grid item xs={4}>
                {this.getItem("Type", this.props.data.type)}
              </Grid>
              <Grid item xs={4}>
                {this.getItem("Fule Type", this.props.data.fuel)}
              </Grid>
              <Grid item xs={4}>
                {this.getItem("Per Day(Rs)", this.props.data.cost)}
              </Grid>
              <Grid item xs={4}>
                {}
              </Grid>
              <Grid item xs={4}>
                {}
              </Grid>
              <Grid item xs={4}>
                {}
              </Grid>
              <Grid item xs={4}></Grid>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  this.props.history.push({
                    pathname: "/customer",
                    state: this.props.data,
                  })
                }>
                Book Car
              </Button>
            </Grid>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    );
  }
}
export default withRouter(CarDisplay);
