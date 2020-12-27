import React, { Component } from "react";
import axios from "axios";
import "./css/form.css";
import Grid from "@material-ui/core/Grid";

export class BookingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerInfo: {},
      bookingInfo: this.props.location.state
    }
  }

  componentDidMount(){
    this.getCustomerInfo(this.props.location.state.customer)
    document.getElementById("carImage").src = "data:image/png;base64," + this.arrayBufferToBase64(this.props.location.state.image.data);

  }

  getCustomerInfo = async (id) => {
    try {
      const data = await axios.get("http://localhost:4000/getcustomer/" + id);
      console.log(data);
      this.setState({customerInfo: data.data})
    } catch (e) {
      alert("server is down");
    }
  };

   arrayBufferToBase64 = ( buffer ) => {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }

  getDetailsContainer = (label, value) => {
    return (
      <>
        <label for="fname">{label}</label>
        <input
          type="text"
          readOnly="readOnly"
          value={value}
        />
      </>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h2 style={{ textAlign: "center", fontFamily: "serif" }}>
            Booking Details
          </h2>
        </div>
        <div className="container">
          <form>
          <Grid container style={{ marginLeft: "10" }}>
            <Grid item xs={6}>
                {this.getDetailsContainer("Car Name", this.state.bookingInfo.name)}

                {this.getDetailsContainer("Company", this.state.bookingInfo.company)}

                {this.getDetailsContainer("Engine Type", this.state.bookingInfo.engineType)}

                {this.getDetailsContainer("Fuel", this.state.bookingInfo.fuel)}

                {this.getDetailsContainer("Type", this.state.bookingInfo.type)}

             </Grid>
             <Grid item xs={6}>
               <div style={{width: "100%", height: "100%", display:"flex", justifyContent: "center", alignItems:"center"}}>
                 <img style={{height: "max-content"}} id="carImage" />
               </div>
             </Grid>
             <Grid item xs={12}>
                {this.getDetailsContainer("Start Date", new Date(this.state.customerInfo.start).toDateString() || "-")}

                {this.getDetailsContainer("End Date", new Date(this.state.customerInfo.end).toDateString() || "-")}

               <div style={{textAlign: "center"}}>
                <h3>Customer information</h3>
               </div>
               {this.getDetailsContainer("Name", this.state.customerInfo.name || "-")}

               {this.getDetailsContainer("DL Number", this.state.customerInfo.DLNumber || "-")}

               {this.getDetailsContainer("Phone", this.state.customerInfo.phoneNo || "-")}

               {this.getDetailsContainer("Email", this.state.customerInfo.email || "-")}

               {this.getDetailsContainer("Address", this.state.customerInfo.address || "-")}

             </Grid>
          </Grid>
          </form>
        </div>
      </div>
    );
  }
}
