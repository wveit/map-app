import React from "react";
import { connect } from "react-redux";
import "./CoordinatesContainer.css";

function Coordinates(props) {
    let coordinateString = "--";
    if (props.mouseCoordinates) {
        coordinateString = `${props.mouseCoordinates[0].toFixed(
            2
        )}, ${props.mouseCoordinates[1].toFixed(2)}`;
    }
    return <div className="Coordinates">{coordinateString}</div>;
}

function mapStateToProps(state) {
    return {
        mouseCoordinates: state.coordinates.mouseCoordinates,
    };
}

export default connect(mapStateToProps)(Coordinates);
