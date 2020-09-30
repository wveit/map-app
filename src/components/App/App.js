import React from "react";

import Map from "../Map/Map";
import Menu from "../Menu/Menu";
import DatePicker from "../DatePicker/DatePicker";
import { UncontrolledRuler } from "../Ruler/Ruler";
import Coordinates from "../Coordinates/Coordinates";

export default function App(props) {
    return (
        <div className="App">
            <Map />
            <Menu />
            <DatePicker />
            <UncontrolledRuler title="Feb 2018" range="1, 30" selected="5" />
            <Coordinates />
        </div>
    );
}
