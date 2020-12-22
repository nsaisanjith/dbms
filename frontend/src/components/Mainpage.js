import Axios from "axios";
import React, { Component } from "react";
import CarDisplay from "./CarDisplay";
export default class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.getCarInfo();
  }
  state = {
    cars: null,
  };
  getCarInfo = async () => {
    try {
      const data = await Axios.get("http://localhost:4000/unreserved");
      console.log(data.data);
      this.setState({
        cars: data.data,
      });
    } catch (e) {
      alert("server is down");
    }
  };
  render() {
    return (
      <div>
        {this.state.cars &&
          (this.state.cars.length ? (
            this.state.cars.map((car) => {
              return <CarDisplay data={car} />;
            })
          ) : (
            <h1>No Car Available</h1>
          ))}
      </div>
    );
  }
}
