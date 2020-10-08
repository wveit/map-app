import React from "react";

import Map from "../Map/Map";
import MenuContainer from "../Menu/MenuContainer";
import Coordinates from "../Coordinates/Coordinates";
import ModalContainer from "../Modal/ModalContainer";
import DateContainer from "../DateContainer/DateContainer";

export default function App(props) {
    return (
        <div className="App">
            <Map />
            <MenuContainer />
            <Coordinates />
            <ModalContainer />
            <DateContainer />
        </div>
    );
}
