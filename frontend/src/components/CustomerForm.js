import React, { Component } from "react";
import axios from "axios";
import "./css/form.css";
import { withRouter } from "react-router-dom";
class CustomerForm extends Component {
  submit = async (e) => {
    e.preventDefault();
    const firstName = e.target.elements.fname.value.trim();
    const lastName = e.target.elements.lname.value.trim();
    const email = e.target.elements.email.value.trim();
    const age = e.target.elements.age.value;
    const address = e.target.elements.address.value.trim();
    const DLNumber = e.target.elements.dlnumber.value.trim();
    const phoneNo = e.target.elements.phoneno.value.trim();
    const start = e.target.elements.start.value.trim();
    const end = e.target.elements.end.value.trim();
    const name = firstName + " " + lastName;
    try {
      const data = {
        name,
        age,
        email,
        age,
        address,
        DLNumber,
        phoneNo,
        start,
        end,
        car_id: this.props.location.state._id,
      };
      const res = await axios.post(
        "http://localhost:4000/createCustomer",
        data
      );
      this.props.history.push({
        pathname: "/conformation",
        state: this.props.data,
      });
    } catch (error) {
      alert("server down");
    }
  };
  render() {
    return (
      <div>
        <div>
          <h2 style={{ textAlign: "center", fontFamily: "serif" }}>
            Enter Details
          </h2>
        </div>
        <div className="container">
          <form onSubmit={this.submit}>
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              required
            />
            <label for="age" style={{ marginRight: "10px" }}>
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Your age.."
              required
            />
            <br />
            <br />
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email.."
              required
            />
            <label for="phoneno">Phone Number</label>
            <input
              type="text"
              id="phoneno"
              name="phoneno"
              placeholder="Your Phone Number.."
              required
            />
            <label for="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address.."
              required
            />
            <label for="dlnumber">DL Number</label>
            <input
              type="text"
              id="dlnumber"
              name="dlnumber"
              placeholder="Your DL Number.."
              required
            />
            <label for="start">start date</label>
            <input
              type="date"
              id="start"
              name="start"
              placeholder="Start Date.."
              required
            />
            <label for="end">End Date</label>
            <input
              type="date"
              id="end"
              name="end"
              placeholder="End Date.."
              required
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(CustomerForm);
