import React from "react";

import Map from "../Map/Map";
import MenuContainer from "../Menu/MenuContainer";
import DatePicker from "../DatePicker/DatePicker";
import Coordinates from "../Coordinates/Coordinates";
import ModalContainer from "../Modal/ModalContainer";
import DateSlider from "../DateSlider/DateSlider";

export default function App(props) {
    const [date, setDate] = React.useState(new Date(2020, 9, 4, 12));
    console.log("date state: ", date);
    return (
        <div className="App">
            <Map />
            <MenuContainer />
            <DatePicker />
            <DateSlider
                unit="day"
                currentDate={date}
                onClick={setDate}
                unitWidthInPixels={50}
                snapToUnit
            />
            <Coordinates />
            <ModalContainer />
        </div>
    );
}
