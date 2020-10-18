import React from "react";

import MapContainer from "../MapContainer/MapContainer";
import MenuContainer from "../MenuContainer/MenuContainer";
import Coordinates from "../CoordinatesContainer/CoordinatesContainer";
import ModalContainer from "../ModalContainer/ModalContainer";
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
