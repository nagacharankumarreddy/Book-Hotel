import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const RoomNum = (props) => {
    console.log(props.total);
    var list = [];
    for (var i = 1; i <= props.total; i++) {
      list.push(i);
    }
  return (  
    <div>
        
    {list.map(function(i){
        return (<div >
            <bold>Room {i}</bold>
            <div class="col-md-offset-5 col-md-10 d-flex">
                <label for="ex1">Adults</label>
                <input type="number" className="col-md-3 mx-2" name="adults" id=""/>
                <label for="ex1">Childs</label>
                <input type="number" className="col-md-3 mx-2" name="adults" id=""/>
            </div>
      
            
            
        </div>)
    })}

      
    </div>
  );
};
export default RoomNum;