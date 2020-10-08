import React from "react";

import Map from "../Map/Map";
import MenuContainer from "../Menu/MenuContainer";
import DatePicker from "../DatePicker/DatePicker";
import Coordinates from "../Coordinates/Coordinates";
import ModalContainer from "../Modal/ModalContainer";
import DateSlider from "../DateSlider/DateSlider";
import DateUnitChooser from "../DateUnitChooser/DateUnitChooser";

export default function App(props) {
    const [date, setDate] = React.useState(new Date(2020, 9, 4, 12));
    const [dateUnit, setDateUnit] = React.useState("month");
    return (
        <div className="App">
            <Map />
            <MenuContainer />
            <DatePicker />
            <DateSlider
                unit={dateUnit}
                currentDate={date}
                onClick={setDate}
                unitWidthInPixels={50}
                snapToUnit
            />
            <DateUnitChooser unit={dateUnit} onUnitChoice={setDateUnit} />
            <Coordinates />
            <ModalContainer />
        </div>
    );
}
