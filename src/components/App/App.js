import React from "react";

import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import DatePicker from "../DatePicker/DatePicker";

export default function (props) {
    return (
        <div className="App">
            <Map />
            <Menu />
            <DatePicker />
        </div>
    );
}
