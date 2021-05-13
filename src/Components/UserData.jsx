import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RoomNum from "../Components/RoomNum";
import "./UserData.css";
import $ from "jquery"
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css"
import { DatePickerComponent } from "../../node_modules/@syncfusion/ej2-react-calendars";
import Home from "../Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function setRooms(event) {
  console.log(event.target.value);
  ReactDOM.render(
    <RoomNum total={event.target.value} />,
    document.getElementById("roomsetid")
  );
}

class UserData extends Component {
  state = {
    arStartDate:new Date(),
    depStartDate:new Date()
  };
dispArr=(event)=>{
  console.log(event);
  this.setState({arStartDate:event})
  this.setState({depStartDate:event})
  console.log(new Date(event.getTime() + 24*60*60*1000));
}
dispDep=(event)=>
{
  this.setState({depStartDate:event})
}
  render() {
    return (
      <div className="main-parent">
        <div className="main w-80 ml-auto mr-auto  mx-auto p-4 ">
          <div class=" main-child container-fluid w-3 ">
            <div class="row m-3">
              <div class="col-sm-4 p-3">
                <label htmlFor="ardate" className="setFont">
                  Arrival Date
                </label>
                <DatePicker selected={this.state.arStartDate} minDate={new Date()} onSelect={this.dispArr}/>

              </div>
              <div class="col-sm-4 p-3">
                <label htmlFor="ardate" className="setFont" >
                  Departure Date
                </label>
                <DatePicker selected={this.state.depStartDate} minDate={this.state.arStartDate} onSelect={this.dispDep}/>
              </div>
            </div>
            <div class="row m-3">
              <div class="col-sm-4 p-3 ">
                <label htmlFor="total" className="setFont">
                  Rooms
                </label>
                <select className="m-2" onChange={setRooms}>
                  <option value="0">No of Rooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div class="col-sm-2 roomset" id="roomsetid"></div>
            </div>
            <div class="row m-3">
              
              <div class="col-sm-8 p-3">
                <div className="btn btn-primary ">Search</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserData;
