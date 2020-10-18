import React from "react";

import MapContainer from "../Map/MapContainer";
import MenuContainer from "../Menu/MenuContainer";
import Coordinates from "../Coordinates/Coordinates";
import ModalContainer from "../Modal/ModalContainer";
import DateContainer from "../DateContainer/DateContainer";

export default function App(props) {
    return (
        <div className="App">
            <MapContainer />
            <MenuContainer />
            <Coordinates />
            <ModalContainer />
            <DateContainer />
        </div>
    );
}
