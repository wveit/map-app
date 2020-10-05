import React from "react";

import Map from "../Map/Map";
import MenuContainer from "../Menu/MenuContainer";
import DatePicker from "../DatePicker/DatePicker";
import { UncontrolledRuler } from "../Ruler/Ruler";
import Coordinates from "../Coordinates/Coordinates";
import ModalContainer from "../Modal/ModalContainer";

export default function App(props) {
    return (
        <div className="App">
            <Map />
            <MenuContainer />
            <DatePicker />
            <UncontrolledRuler title="Feb 2018" range="1, 30" selected="5" />
            <Coordinates />
            <ModalContainer />
        </div>
    );
}