import React from "react";

import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import DatePicker from "../DatePicker/DatePicker";
import Coordinates from "../Coordinates/Coordinates";

export default function App(props) {
    return (
        <div className="App">
            <Map />
            <Menu />
            <DatePicker />
            <Coordinates />
        </div>
    );
}
