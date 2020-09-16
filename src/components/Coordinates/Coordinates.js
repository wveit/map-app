import React from "react";
import { connect } from "react-redux";
import "./Coordinates.css";

function Coordinates(props) {
    let coordinateString = "--";
    if (props.mouseCoordinates) {
        coordinateString = `${props.mouseCoordinates[0].toFixed(
            2
        )}, ${props.mouseCoordinates[1].toFixed(2)}`;
    }
    // const coordinateString = props.mouseCoordinates
    //     ? props.mouseCoordinates.toString()
    //     : "--";
    return <div class="Coordinates">{coordinateString}</div>;
}

function mapStateToProps(state) {
    return {
        mouseCoordinates: state.coordinates.mouseCoordinates,
    };
}

export default connect(mapStateToProps)(Coordinates);
