import React, { Component } from "react";
import axios from "axios";
export class AddCarModal extends Component {
    closeModal = () => {    
        document.getElementById("carForm").reset();
        this.props.closeModal();
    }   
  render() {
    return (
      <>
        <div id="id01" style={{display: "block", paddingBottom: "5%"}} className="w3-modal">
        <div className="w3-modal-content">
            <header className="w3-container w3-teal">
                <h2>Add car</h2>
            </header>
            <div className="w3-container" style={{padding: 0}}>
                <form id="carForm" method="POST" action="http://localhost:4000/createcar" enctype="multipart/form-data">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name.."
                        required
                    />

                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Car type.."
                        required
                    />

                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company.."
                        required
                    />

                    <label htmlFor="cost">Cost</label>
                    <br />
                    <input
                        type="number"
                        id="cost"
                        name="cost"
                        style={{marginBottom: "1%", marginTop: "1%"}}
                        placeholder="Cost.."
                        required
                    />
                    <br />
                    
                    <label htmlFor="engineType">Engine Type</label>
                    <input
                        type="text"
                        id="engineType"
                        name="engineType"
                        placeholder="Engine Type.."
                        required
                    />

                    <label htmlFor="fuel">Fuel</label>
                    <input
                        type="text"
                        id="fuel"
                        name="fuel"
                        placeholder="Fuel.."
                        required
                    />

                    <label htmlFor="image">Image</label>
                    <br />
                    <input
                        type="file"
                        id="image"
                        name="image"
                        required
                    />
                    <br />
                    <br />
                    <div style={{marginLeft: "60%", display: "flex"}}>
                        <button className="cbutton" onClick={() => this.closeModal()}>Cancel</button>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            </div>
        </div>
      </>
    );
  }
}
