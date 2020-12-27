import Axios from "axios";
import React, { Component } from "react";
import CarDisplay from "./CarDisplay";
import { AddCarModal } from "./AddCarModal";

export default class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddCarModal: false,
      unreservedCars: [],
      reservedCars: [],
      isReservedLoading: true,
      isUnreservedLoading: true
    };
  }

  componentDidMount(){
    this.getUnreservedCarInfo();
    this.getReservedCarInfo();
    this.selectResevedCar();
  }
  

  getUnreservedCarInfo = async () => {
    try {
      const data = await Axios.get("http://localhost:4000/unreserved");
      this.setState({
        unreservedCars: data.data,
        isUnreservedLoading: false
      });
    } catch (e) {
      alert("server is down");
      this.setState({
        isUnreservedLoading: false
      });
    }
  };

  getReservedCarInfo = async () => {
    try {
      const data = await Axios.get("http://localhost:4000/reserved");
      this.setState({
        reservedCars: data.data,
        isReservedLoading: false
      });
    } catch (e) {
      alert("server is down");
      this.setState({
        isUnreservedLoading: false
      });
    }
  };


  addCar = () => {
    this.setState({isAddCarModal: true})
  }

  openTab = (evt, cityName) => {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
  }

  closeModal() {
    this.setState({isAddCarModal: false});
    this.getUnreservedCarInfo();
    this.getReservedCarInfo();
  }

  selectResevedCar(){
    document.getElementById('activeButton').click();
  }

  render() {
    return <div>
      <div style={{textAlign: "center"}}>
        <button style={{width: "20%"}} onClick={() => this.addCar()}>+ Add car</button>
      </div>
      <div className="tab">
        <button id="activeButton" className="tablinks" onClick={(evt) => this.openTab(evt, 'reserved')}>Reserved cars</button>
        <button className="tablinks" onClick={(evt) => this.openTab(evt, 'unreserved')}>Unreserved cars</button>
      </div>

      <div id="reserved" className="tabcontent">
        <h3>Reserved cars</h3>
        <div>
        { this.state.isReservedLoading ? (<div class="loader"></div>) : null}
        {!this.state.isUnreservedLoading && this.state.reservedCars &&
          (this.state.reservedCars.length ? (
            this.state.reservedCars.map((car) => {
              return <CarDisplay data={car} hideBookingButton={true}/>;
            })
          ) : (
            <h3>No reserved cars available</h3>
          ))}        
          </div>
      </div>

      <div id="unreserved" className="tabcontent">
        <h3>Unreserved cars</h3>
        <div>
        { this.state.isUnreservedLoading ? (<div class="loader"></div>) : null}
        {!this.state.isUnreservedLoading && this.state.unreservedCars &&
          (this.state.unreservedCars.length ? (
            this.state.unreservedCars.map((car) => {
              return <CarDisplay data={car} hideBookingButton={true}/>;
            })
          ) : (
            <h3>No unreserved cars available</h3>
          ))}        
          </div>        
      </div>
      {this.state.isAddCarModal ? <AddCarModal closeModal={() => this.closeModal()}/> : null}
    </div>;
  }
}
